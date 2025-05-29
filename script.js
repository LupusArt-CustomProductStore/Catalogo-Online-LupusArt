const produtos = [
    { nome: "Caneca lisa s/ colher - 325ml", preco: "R$ 37,50", imagem: "IMG/PRODUCT 1.png" },
    { nome: "Caneca lisa c/ colher - <n> 325ml", preco: "R$ 49,90", imagem: "IMG/PRODUCT 2.png" },
    { nome: "Caneca magica s/ colher - 325ml", preco: "R$ 49,90", imagem: "IMG/PRODUCT 3.png" },
    { nome: "caneca conica c/ colher - 325ml", preco: "R$ 49,90", imagem: "IMG/PRODUCT 4.png" },
    { nome: "camiseta branca 100% Poliéster", preco: "R$ 37,90", imagem: "IMG/PRODUCT 5.png" },
    { nome: "Caneca c/ alça de coração - 325ml", preco: "R$ 44,90", imagem: "IMG/PRODUCT 6.png"},
    { nome: "Mochila  Sport - 35x 40cm ", preco: "R$ 29,90", imagem: "IMG/PRODUCT 7.png" },
    { nome: "Mousepad c/ apoio retangular 23,5x18cm", preco: "R$ 24,90", imagem: "IMG/PRODUCT 8.png" },
    { nome: "Azuleijo 20x20cm - Sem suporte", preco: "R$ 24,90", imagem: "IMG/PRODUCT 9.png" },
    { nome: "mousepad c/ apoio gota 24x19cm", preco: "R$ 24,90", imagem: "IMG/PRODUCT 10.png" },
    { nome: "mousepad  liso retangular 21x17,5cm", preco: "R$ 19,90", imagem: "IMG/PRODUCT 11.png"},
    { nome: "mousepad  liso redondo 18x18cm", preco: "R$ 19,90", imagem: "IMG/PRODUCT 12.png"},
];

const catalogo = document.getElementById("catalogo");

produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>${produto.preco}</p>
    `;
    catalogo.appendChild(div);
});
