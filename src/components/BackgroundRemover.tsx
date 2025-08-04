import React, { useState, useCallback } from 'react';
import { pipeline, env } from '@huggingface/transformers';
import { Button } from '@/components/ui/button';
import { Upload, Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

interface BackgroundRemoverProps {
  onImageProcessed?: (blob: Blob) => void;
  className?: string;
}

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize image if needed and draw it to canvas
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Image converted to base64');
    
    // Process the image with the segmentation model
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);
    
    // Apply the mask
    const outputImageData = outputCtx.getImageData(
      0, 0,
      outputCanvas.width,
      outputCanvas.height
    );
    const data = outputImageData.data;
    
    // Apply inverted mask to alpha channel with edge smoothing
    for (let i = 0; i < result[0].mask.data.length; i++) {
      // Invert the mask value and apply edge smoothing
      const maskValue = 1 - result[0].mask.data[i];
      const alpha = Math.round(maskValue * 255);
      
      // Apply edge cleaning - reduce ghosting artifacts
      if (alpha > 0 && alpha < 255) {
        // For semi-transparent pixels, make them more transparent to reduce ghost edges
        data[i * 4 + 3] = Math.max(0, alpha - 20);
      } else {
        data[i * 4 + 3] = alpha;
      }
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully with edge cleaning');
    
    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const BackgroundRemover: React.FC<BackgroundRemoverProps> = ({ 
  onImageProcessed, 
  className = "" 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<Blob | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    setIsProcessing(true);
    setOriginalImage(URL.createObjectURL(file));

    try {
      toast.info('Loading AI model... This may take a moment');
      
      const imageElement = await loadImage(file);
      const processedBlob = await removeBackground(imageElement);
      
      setProcessedImage(processedBlob);
      onImageProcessed?.(processedBlob);
      
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Background removal failed:', error);
      toast.error('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [onImageProcessed]);

  const downloadImage = useCallback(() => {
    if (!processedImage) return;

    const url = URL.createObjectURL(processedImage);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'background-removed.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [processedImage]);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">AI Background Remover</h3>
        <p className="text-muted-foreground mb-4">
          Remove background from images with AI precision
        </p>
        
        <div className="border-2 border-dashed border-border rounded-lg p-8">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="image-upload"
            disabled={isProcessing}
          />
          <label 
            htmlFor="image-upload" 
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            {isProcessing ? (
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            ) : (
              <Upload className="h-12 w-12 text-muted-foreground" />
            )}
            <span className="text-lg font-medium">
              {isProcessing ? 'Processing...' : 'Click to upload image'}
            </span>
          </label>
        </div>
      </div>

      {originalImage && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Original</h4>
            <img 
              src={originalImage} 
              alt="Original" 
              className="w-full rounded-lg border"
              style={{ 
                background: 'repeating-conic-gradient(#f0f0f0 0% 25%, #ffffff 0% 50%) 50% / 20px 20px'
              }}
            />
          </div>
          
          {processedImage && (
            <div className="space-y-2">
              <h4 className="font-medium">Background Removed</h4>
              <div className="relative">
                <img 
                  src={URL.createObjectURL(processedImage)} 
                  alt="Background removed" 
                  className="w-full rounded-lg border"
                  style={{ 
                    background: 'repeating-conic-gradient(#f0f0f0 0% 25%, #ffffff 0% 50%) 50% / 20px 20px',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.05) brightness(0.98)'
                  }}
                />
              </div>
              <Button 
                onClick={downloadImage}
                className="w-full"
                variant="outline"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PNG
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};