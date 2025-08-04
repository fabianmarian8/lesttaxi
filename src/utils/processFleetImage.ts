import { processImageToWebP, downloadBlob } from './imageProcessor';

/**
 * Process the SUV fleet image to remove artifacts and convert to WebP
 */
export const processFleetSUV = async () => {
  try {
    console.log('Starting SUV image processing...');
    
    // Process the SUV image
    const suvBlob = await processImageToWebP('/lovable-uploads/83d79a32-aec1-47b1-b1a5-76fb5ba38e71.png');
    
    // Download the processed image for manual upload
    downloadBlob(suvBlob, '83d79a32-aec1-47b1-b1a5-76fb5ba38e71.webp');
    
    console.log('SUV image processed successfully!');
    return suvBlob;
  } catch (error) {
    console.error('Failed to process SUV image:', error);
    throw error;
  }
};

// Auto-run when needed
if (typeof window !== 'undefined') {
  (window as any).processFleetSUV = processFleetSUV;
}