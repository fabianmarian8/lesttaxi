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
  // Default breakpoints for general images
  breakpoints: [320, 640, 800, 1200, 1600],
  // Specific breakpoints for different image types
  specificBreakpoints: {
    // Logo breakpoints - optimize for small display sizes (48x48 main display)
    '08bb4537-9151-4684-bf39-abc2900ea374': [48, 96, 192, 384, 512, 1024],
    // Taxi vehicle - optimize for medium display sizes (320x240 main display)
    '2c4085f5-69ea-4561-baae-9a987e4939e7': [320, 480, 640, 960, 1280],
    // Banner - optimize for small display sizes (80x80 main display)
    'c673d198-bf62-4c01-8827-484fb2d3df6e': [80, 160, 256, 320]
  },
  formats: ['avif', 'webp'],
  quality: {
    avif: 50,
    webp: 80,
    jpeg: 85,
    png: 95
  },
  extensions: ['.jpg', '.jpeg', '.png', '.webp']
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
  
  // Get specific breakpoints for this image or use defaults
  const imageId = name.replace(/\.(webp|avif|jpg|jpeg|png)$/, '');
  const breakpoints = CONFIG.specificBreakpoints[imageId] || CONFIG.breakpoints;
  
  console.log(`Using breakpoints for ${name}:`, breakpoints);
  
  // Generate different sizes
  for (const width of breakpoints) {
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