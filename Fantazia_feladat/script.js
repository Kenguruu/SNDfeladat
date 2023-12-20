// Függvények
function readProducts() {
    var products = [];
    for (var i = 0; i < 5; i++) {
        products.push({ name: (i + 1) + '. termék', price: (i + 1) * 100 });
    }
    return products;
}
function displayProducts(products) {
    var productListDiv = document.getElementById('productList');
    if (!productListDiv)
        return;
    var sortedProducts = products.slice().sort(function (a, b) { return a.price - b.price; });
    var cheapestProduct = sortedProducts[0];
    var avgPrice = products.reduce(function (sum, product) { return sum + product.price; }, 0) / products.length;
    var priceArray = products.map(function (product) { return product.price; });
    var priceVariance = calculateVariance(priceArray);
    var cheapestProductName = cheapestProduct ? cheapestProduct.name : 'N/A';
    var productListHTML = "\n      <p><strong>Legolcs\u00F3bb term\u00E9k:</strong> ".concat(cheapestProductName, "</p>\n      <p><strong>\u00C1tlag\u00E1r:</strong> ").concat(avgPrice.toFixed(2), "</p>\n      <p><strong>\u00C1rak sz\u00F3r\u00E1sa:</strong> ").concat(priceVariance.toFixed(2), "</p>\n    ");
    productListDiv.innerHTML = productListHTML;
}
function calculateVariance(data) {
    var mean = data.reduce(function (sum, value) { return sum + value; }, 0) / data.length;
    var squaredDiff = data.map(function (value) { return Math.pow(value - mean, 2); });
    var variance = squaredDiff.reduce(function (sum, value) { return sum + value; }, 0) / data.length;
    return Math.sqrt(variance);
}
// Fő program
var products = readProducts();
displayProducts(products);
