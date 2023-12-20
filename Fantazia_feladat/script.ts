// Típusdefiníciók
type Product = {
    name: string;
    price: number;
  };
  
  // Függvények
  function readProducts(): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < 5; i++) {      
      products.push({ name: (i+1)+'. termék', price: (i+1)*100 });
    }
    return products;
  }
  
  function displayProducts(products: Product[]): void {
    const productListDiv = document.getElementById('productList');
    if (!productListDiv) return;
  
    const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
    const cheapestProduct = sortedProducts[0];
    const avgPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
    const priceArray = products.map(product => product.price);
    const priceVariance = calculateVariance(priceArray);
  
    const cheapestProductName = cheapestProduct ? cheapestProduct.name : 'N/A';
  
    const productListHTML = `
      <p><strong>Legolcsóbb termék:</strong> ${cheapestProductName}</p>
      <p><strong>Átlagár:</strong> ${avgPrice.toFixed(2)}</p>
      <p><strong>Árak szórása:</strong> ${priceVariance.toFixed(2)}</p>
    `;
    productListDiv.innerHTML = productListHTML;
  }
  
  function calculateVariance(data: number[]): number {
    const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
    const squaredDiff = data.map(value => Math.pow(value - mean, 2));
    const variance = squaredDiff.reduce((sum, value) => sum + value, 0) / data.length;
    return Math.sqrt(variance);
  }
  
  // Fő program
  const products = readProducts();
  displayProducts(products);