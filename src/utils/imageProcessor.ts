import { removeBackground, loadImage } from '@/components/BackgroundRemover';

/**
 * Process an image to remove background artifacts and convert to WebP
 */
export const processImageToWebP = async (imageUrl: string): Promise<Blob> => {
  try {
    // Fetch the original image
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Load as HTML image element
    const image = await loadImage(blob);
    
    // Remove background and clean up artifacts
    const cleanedBlob = await removeBackground(image);
    
    return cleanedBlob;
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};

/**
 * Download a blob as a file
 */
export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};