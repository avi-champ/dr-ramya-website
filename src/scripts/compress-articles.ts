// src/scripts/compress-articles.ts
// Script to pre-compress markdown articles for better performance
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { gzipSync } from 'zlib';

interface CompressionStats {
  totalFiles: number;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  timeTaken: number;
}

async function compressArticles(): Promise<CompressionStats> {
  const startTime = Date.now();
  console.log('🚀 Starting article compression process...');
  
  try {
    const articlesDir = join(process.cwd(), 'src', 'content', 'articles');
    console.log('📁 Articles directory:', articlesDir);
    
    const markdownFiles = readdirSync(articlesDir).filter(file => file.endsWith('.md'));
    console.log('📄 Found markdown files:', markdownFiles);
    
    let totalOriginalSize = 0;
    let totalCompressedSize = 0;
    let processedFiles = 0;
    
    // Process each markdown file
    for (const filename of markdownFiles) {
      const filePath = join(articlesDir, filename);
      const content = readFileSync(filePath, 'utf8');
      
      // Calculate original size
      const originalSize = Buffer.byteLength(content, 'utf8');
      totalOriginalSize += originalSize;
      
      // Compress content
      const compressed = gzipSync(Buffer.from(content, 'utf8'));
      totalCompressedSize += compressed.length;
      
      console.log(`📄 ${filename}: ${originalSize} → ${compressed.length} bytes (${((1 - compressed.length / originalSize) * 100).toFixed(1)}% reduction)`);
      processedFiles++;
    }
    
    const timeTaken = Date.now() - startTime;
    const compressionRatio = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100;
    
    const stats: CompressionStats = {
      totalFiles: processedFiles,
      originalSize: totalOriginalSize,
      compressedSize: totalCompressedSize,
      compressionRatio,
      timeTaken
    };
    
    console.log('\n📊 Compression Complete!');
    console.log(`   Files processed: ${stats.totalFiles}`);
    console.log(`   Original size: ${(stats.originalSize / 1024).toFixed(2)} KB`);
    console.log(`   Compressed size: ${(stats.compressedSize / 1024).toFixed(2)} KB`);
    console.log(`   Compression ratio: ${stats.compressionRatio.toFixed(1)}%`);
    console.log(`   Time taken: ${stats.timeTaken}ms`);
    
    return stats;
  } catch (error) {
    console.error('❌ Error during compression:', error);
    throw error;
  }
}

// Run compression if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  compressArticles()
    .then(() => {
      console.log('✅ Article compression completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Article compression failed:', error);
      process.exit(1);
    });
}

export { compressArticles, type CompressionStats };
