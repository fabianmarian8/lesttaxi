import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { removeMatte } from "@/utils/imageProcessor";

export const DefringeProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show original image
    setOriginalImage(URL.createObjectURL(file));
    setIsProcessing(true);

    try {
      // Apply defringe/remove matte processing
      const processedBlob = await removeMatte(file, 2); // 2px defringe radius
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);

      // Auto-download the processed file
      const link = document.createElement('a');
      link.href = processedUrl;
      link.download = 'rav4_clean_processed.webp';
      link.click();
    } catch (error) {
      console.error('Processing failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4">RAV4 Defringe Processor</h3>
      
      <input
        type="file"
        accept=".webp,.png,.jpg,.jpeg"
        onChange={handleFileUpload}
        className="mb-4 w-full"
      />
      
      {isProcessing && (
        <div className="text-center">Processing image...</div>
      )}
      
      {originalImage && (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Original:</h4>
            <img src={originalImage} alt="Original" className="w-full rounded" />
          </div>
          
          {processedImage && (
            <div>
              <h4 className="font-semibold">Processed (Defringe Applied):</h4>
              <img src={processedImage} alt="Processed" className="w-full rounded" />
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = processedImage;
                  link.download = 'rav4_clean_processed.webp';
                  link.click();
                }}
                className="mt-2 w-full"
              >
                Download Processed Image
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};