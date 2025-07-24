// Test script to verify optimized article APIs
async function testOptimizedAPIs() {
  console.log('🧪 Testing Optimized Article APIs...\n');
  
  const baseUrl = 'http://localhost:3000';
  
  try {
    // Test 1: Get all articles metadata (optimized)
    console.log('1️⃣ Testing /api/articles/optimized');
    const start1 = Date.now();
    const response1 = await fetch(`${baseUrl}/api/articles/optimized`);
    const articles = await response1.json();
    const time1 = Date.now() - start1;
    console.log(`   ✅ Loaded ${articles.length} articles in ${time1}ms`);
    console.log(`   📦 Response size: ${JSON.stringify(articles).length} chars`);
    
    // Test 2: Get featured articles (optimized)
    console.log('\n2️⃣ Testing /api/articles/featured/optimized');
    const start2 = Date.now();
    const response2 = await fetch(`${baseUrl}/api/articles/featured/optimized`);
    const featured = await response2.json();
    const time2 = Date.now() - start2;
    console.log(`   ✅ Loaded ${featured.length} featured articles in ${time2}ms`);
    
    // Test 3: Get individual article (optimized)
    if (articles.length > 0) {
      const testSlug = articles[0].slug;
      console.log(`\n3️⃣ Testing /api/articles/by-slug?slug=${testSlug}`);
      const start3 = Date.now();
      const response3 = await fetch(`${baseUrl}/api/articles/by-slug?slug=${testSlug}`);
      const article = await response3.json();
      const time3 = Date.now() - start3;
      console.log(`   ✅ Loaded article "${article.title}" in ${time3}ms`);
      console.log(`   📄 Content length: ${article.content.length} chars`);
    }
    
    // Test 4: Bulk view counts
    if (articles.length > 0) {
      const slugs = articles.slice(0, 3).map(a => a.slug).join(',');
      console.log(`\n4️⃣ Testing /api/views/bulk?slugs=${slugs}`);
      const start4 = Date.now();
      const response4 = await fetch(`${baseUrl}/api/views/bulk?slugs=${slugs}`);
      const views = await response4.json();
      const time4 = Date.now() - start4;
      console.log(`   ✅ Loaded view counts for 3 articles in ${time4}ms`);
      console.log(`   👀 Views:`, views.views);
    }
    
    // Test 5: Cache statistics
    console.log('\n5️⃣ Testing /api/cache');
    const start5 = Date.now();
    const response5 = await fetch(`${baseUrl}/api/cache`);
    const cacheStats = await response5.json();
    const time5 = Date.now() - start5;
    console.log(`   ✅ Got cache stats in ${time5}ms`);
    console.log(`   💾 Cache:`, cacheStats);
    
    console.log('\n🎉 All API tests completed successfully!');
    
    // Performance summary
    const totalTime = time1 + time2 + time3 + time4 + time5;
    console.log(`\n📊 Performance Summary:`);
    console.log(`   Total time: ${totalTime}ms`);
    console.log(`   Average per request: ${(totalTime / 5).toFixed(1)}ms`);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run tests
testOptimizedAPIs();
