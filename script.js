// Função para pré-visualizar a imagem
document.getElementById('imageUrl').addEventListener('input', function() {
    const url = this.value;
    const img = document.getElementById('previewImage');
    img.src = url;
    img.style.display = 'block';
});

// Adiciona event listener para o formulário de venda de produtos
document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = {
        imageUrl: formData.get('imageUrl'),
        categoria: formData.get('nome-da-roupa'),
        tamanho: formData.get('tamanho'),
        descricao: formData.get('descricao-do-produto'),
        preco: formData.get('preco-do-produto')
    };

    addProductToStock(product);
    event.target.reset();
    document.getElementById('previewImage').style.display = 'none';

    // Salva o produto no armazenamento local
    saveProductToLocalStorage(product);

});

// Função para adicionar o produto ao estoque e exibi-lo na página
function addProductToStock(product) {
    const productList = document.getElementById('product-list');
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    productItem.innerHTML = `
        <br><img src="${product.imageUrl}" alt="Imagem do produto">
        <p><strong>Categoria:</strong> ${product.categoria}</p>
        <p><strong>Tamanho:</strong> ${product.tamanho}</p>
        <p><strong>Descrição:</strong> ${product.descricao}</p>
        <p><strong>Preço:</strong> R$ ${product.preco}</p>
        <button class="add-to-cart">Adicionar ao Carrinho</button><br>
    `;

    productList.appendChild(productItem);
}  

// salvar o produto no armazenamento local
function saveProductToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProductsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => {
        addProductToStock(product);
    });
}

addToLocalStorage(productItem)

document.addEventListener('DOMContentLoaded', function() {
loadProductsFromLocalStorage(); 
});

