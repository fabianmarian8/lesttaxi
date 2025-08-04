import React, { useState } from 'react';
import { pipeline, env } from '@huggingface/transformers';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

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

export const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
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
    
    // Apply inverted mask to alpha channel
    for (let i = 0; i < result[0].mask.data.length; i++) {
      // Invert the mask value (1 - value) to keep the subject instead of the background
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
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
        'image/webp',
        0.95
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

interface BackgroundRemoverProps {
  imageUrl: string;
  onProcessed: (webpBlob: Blob) => void;
}

export const BackgroundRemover: React.FC<BackgroundRemoverProps> = ({ imageUrl, onProcessed }) => {
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  const handleRemoveBackground = async () => {
    try {
      setProcessing(true);
      
      // Load image from URL
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const image = await loadImage(blob);
      
      // Remove background
      const cleanedBlob = await removeBackground(image);
      
      toast({
        title: "Background removed successfully",
        description: "Image has been processed and cleaned."
      });
      
      onProcessed(cleanedBlob);
    } catch (error) {
      console.error('Failed to remove background:', error);
      toast({
        title: "Error processing image",
        description: "Failed to remove background. Please try again.",
        variant: "destructive"
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Background Remover</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Clean up ghost edges and artifacts from transparent images
      </p>
      <Button 
        onClick={handleRemoveBackground} 
        disabled={processing}
        className="w-full"
      >
        {processing ? "Processing..." : "Remove Background & Clean Edges"}
      </Button>
    </div>
  );
};
