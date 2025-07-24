import { readdirSync } from 'fs';
import { join } from 'path';

console.log('Testing compression script...');

try {
  const articlesDir = join(process.cwd(), 'src', 'content', 'articles');
  console.log('Articles directory:', articlesDir);
  
  const markdownFiles = readdirSync(articlesDir).filter(file => file.endsWith('.md'));
  console.log('Found files:', markdownFiles);
  
  console.log('✅ Test completed successfully');
} catch (error) {
  console.error('❌ Test failed:', error);
}
