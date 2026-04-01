const categorias = [
    { nome: "Cadernetas", icone: "📔" },
    { nome: "Clientes 2024", icone: "💖" },
    { nome: "Cartelas Biju", icone: "✨" },
    { nome: "Sacolas", icone: "🛍️" },
    { nome: "Chaveiros", icone: "🔑" }
];

const produtos = [
    {
        id: 1,
        nome: "Cartão dobrável",
        categoria: "Destaque",
        preco: "39,90",
        imagem: "img/Produto_1.webp"
    },
    {
        id: 2,
        nome: "Caderneta Especial",
        categoria: "Cadernetas",
        preco: "25,00",
        imagem: "img/Produto_2.png"
    },
    {
        id: 3,
        nome: "Cartelas biju",
        categoria: "Cartelas Biju",
        preco: "25,00",
        imagem: "img/Produto_3BIJU.png"
    },
        {
        id: 4,
        nome: "Sacolas personalizadas",
        categoria: "Cadernetas",
        preco: "25,00",
        imagem: "img/Produto_4_sacola.png"
    },
        {
        id: 5,
        nome: "Chaveiros personalizados",
        categoria: "Cadernetas",
        preco: "25,00",
        imagem: "img/Produto_5_chaveiro.png"
    },
        {
        id: 6,
        nome: "Adesivos para controle de entrega",
        categoria: "Cadernetas",
        preco: "25,00",
        imagem: "img/Produto_6_adesivoentrega.png"
    }
    
];

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const productGrid = document.getElementById('product-grid');
    
    // Configurações do WhatsApp
    const numeroWhats = "5511922048764"; // Formato internacional para o Brasil (55)
    const mensagemBase = "Olá! Me interessei por este produto, quero fazer um orçamento, pode me passar mais detalhes?";

    // Renderizar Categorias
    categorias.forEach(cat => {
        categoryList.innerHTML += `
            <div class="category-item">
                <div class="cat-circle">${cat.icone}</div>
                <span>${cat.nome}</span>
            </div>
        `;
    });

    // Renderizar Produtos
    produtos.forEach(prod => {
        // Criar link dinâmico que inclui o nome do produto na mensagem
        const mensagemCompleta = `${mensagemBase} *Produto: ${prod.nome}*`;
        const urlWhats = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagemCompleta)}`;

        productGrid.innerHTML += `
            <article class="product-card">
                <div class="img-container">
                    <img src="${prod.imagem}" alt="${prod.nome}" loading="lazy">
                </div>
                <div><span class="tag">${prod.categoria}</span></div>
                <h4>${prod.nome}</h4>
                <span class="price">R$ ${prod.preco}</span>
                <a href="${urlWhats}" target="_blank" class="btn-interest">Tenho Interesse</a>
            </article>
        `;
    });
});