function filterProducts() {
    var searchInput = document.getElementById('search');
    var showInStockCheckbox = document.getElementById('showInStock');
    var productList = document.querySelectorAll('.product');

    var searchTerm = searchInput.value.toLowerCase();
    var showInStockOnly = showInStockCheckbox.checked;

    productList.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        var category = product.getAttribute('data-category').toLowerCase();
        var isInStock = product.getAttribute('data-stock') === 'true';

        var shouldDisplay = (productName.includes(searchTerm) || category.includes(searchTerm)) &&
                            (!showInStockOnly || (showInStockOnly && isInStock));

        product.style.display = shouldDisplay ? 'block' : 'none';
    });
}
