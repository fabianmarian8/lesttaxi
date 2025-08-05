#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to modern formats (WebP, AVIF) and generates responsive sizes
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDirs: [
    path.join(__dirname, '../src/assets'),
    path.join(__dirname, '../public/lovable-uploads')
  ],
  breakpoints: [320, 640, 800, 1200, 1600],
  formats: ['avif', 'webp'],
  quality: {
    avif: 50,
    webp: 80,
    jpeg: 85,
    png: 95
  },
  extensions: ['.jpg', '.jpeg', '.png']
};

/**
 * Get all image files from directories
 */
async function getImageFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files
      .filter(file => CONFIG.extensions.some(ext => file.toLowerCase().endsWith(ext)))
      .map(file => path.join(dir, file));
  } catch (error) {
    console.warn(`Directory ${dir} not found, skipping...`);
    return [];
  }
}

/**
 * Generate responsive image sizes
 */
async function generateResponsiveSizes(inputPath, outputDir) {
  const { name, ext } = path.parse(inputPath);
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  const results = [];
  
  // Generate different sizes
  for (const width of CONFIG.breakpoints) {
    if (width > metadata.width * 2) continue; // Skip sizes larger than 2x original
    
    for (const format of CONFIG.formats) {
      const outputPath = path.join(outputDir, `${name}-${width}w.${format}`);
      
      try {
        await image
          .resize(width, null, { withoutEnlargement: true })
          .toFormat(format, { quality: CONFIG.quality[format] })
          .toFile(outputPath);
        
        results.push(outputPath);
        console.log(`✓ Generated: ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`Error generating ${outputPath}:`, error.message);
      }
    }
  }
  
  return results;
}

/**
 * Convert image to modern formats
 */
async function convertToModernFormats(inputPath, outputDir) {
  const { name, ext } = path.parse(inputPath);
  const image = sharp(inputPath);
  const results = [];
  
  for (const format of CONFIG.formats) {
    const outputPath = path.join(outputDir, `${name}.${format}`);
    
    try {
      await image
        .toFormat(format, { quality: CONFIG.quality[format] })
        .toFile(outputPath);
      
      results.push(outputPath);
      console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`Error converting ${inputPath} to ${format}:`, error.message);
    }
  }
  
  return results;
}

/**
 * Optimize existing image
 */
async function optimizeOriginal(inputPath) {
  const { ext } = path.parse(inputPath);
  const image = sharp(inputPath);
  
  try {
    const format = ext.slice(1).toLowerCase();
    if (format === 'jpg') format = 'jpeg';
    
    await image
      .toFormat(format, { quality: CONFIG.quality[format] || 85 })
      .toFile(inputPath);
    
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(inputDir) {
  console.log(`\n📁 Processing directory: ${inputDir}`);
  
  const imageFiles = await getImageFiles(inputDir);
  
  if (imageFiles.length === 0) {
    console.log('No images found.');
    return;
  }
  
  for (const imagePath of imageFiles) {
    console.log(`\n🖼️  Processing: ${path.basename(imagePath)}`);
    
    // Convert to modern formats
    await convertToModernFormats(imagePath, inputDir);
    
    // Generate responsive sizes for large images
    const metadata = await sharp(imagePath).metadata();
    if (metadata.width > 400) {
      await generateResponsiveSizes(imagePath, inputDir);
    }
    
    // Optimize original
    await optimizeOriginal(imagePath);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Check if sharp is available
  try {
    await sharp({ create: { width: 1, height: 1, channels: 3, background: 'white' } })
      .png()
      .toBuffer();
  } catch (error) {
    console.error('❌ Sharp library not found. Install it with: npm install sharp');
    process.exit(1);
  }
  
  // Process all directories
  for (const dir of CONFIG.inputDirs) {
    await processDirectory(dir);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📊 Benefits:');
  console.log('  • AVIF: Up to 80% smaller file sizes');
  console.log('  • WebP: Up to 35% smaller than JPEG');
  console.log('  • Responsive: Proper sizes for all devices');
  console.log('  • SEO: Better Core Web Vitals scores');
}

// Run the script
main().catch(console.error);