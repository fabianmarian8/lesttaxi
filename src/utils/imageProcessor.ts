// Image processing utilities for removing matte/halo effects

export const removeMatte = async (imageFile: File, defringeRadius: number = 2): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw original image
      ctx!.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Remove matte/defringe algorithm
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3];
          
          // If pixel is semi-transparent (halo region)
          if (alpha > 0 && alpha < 255) {
            let hasOpaqueNeighbor = false;
            
            // Check for fully opaque neighbors within defringe radius
            for (let dy = -defringeRadius; dy <= defringeRadius; dy++) {
              for (let dx = -defringeRadius; dx <= defringeRadius; dx++) {
                const ny = y + dy;
                const nx = x + dx;
                
                if (ny >= 0 && ny < canvas.height && nx >= 0 && nx < canvas.width) {
                  const neighborIndex = (ny * canvas.width + nx) * 4;
                  if (data[neighborIndex + 3] === 255) {
                    hasOpaqueNeighbor = true;
                    break;
                  }
                }
              }
              if (hasOpaqueNeighbor) break;
            }
            
            // If it's truly edge/matte, make it fully transparent
            if (!hasOpaqueNeighbor) {
              data[index + 3] = 0; // Full transparency
            } else {
              // Clean edge transition - make it fully opaque if close to opaque neighbor
              data[index + 3] = 255;
            }
          }
        }
      }
      
      // Apply processed data back to canvas
      ctx!.putImageData(imageData, 0, 0);
      
      // Export as WebP with quality 80
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/webp',
        0.8
      );
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(imageFile);
  });
};