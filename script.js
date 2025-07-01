const buques = [
    {
        nome:"Raio de sol",
        preco: 139.99,
        imagem: "imagens/buquegirassol.jpg"
    },
    {
        nome:"Sol de Outono",
        preco: 149.99,
        imagem:"imagens/buquegirassoisrosabranca.jpg"
    },
    {
        nome:"Amor Intenso",
        preco: 119.99,
        imagem:"imagens/buquerosa.jpg" 
    },
    {
        nome:"Brisa de Champagne",
        preco:119.99,
        imagem:"imagens/buquerosasbrancas.jpg"
    }
]
const arranjos = [
    {
        nome:"Aurora do Campo",
        preco:69.90,
        imagem:"imagens/arranjozinias.jpg"
    },
    {
        nome:"Vintage Rosé",
        preco:79.90,
        imagem:"imagens/arranjocrisantemo.jpg"
    },
    {
        nome:"Harmonia Pura",
        preco:49.90,
        imagem:"imagens/arranjoorquideas.jpg"
    },
    {
        nome:"Arranjo Brilho da Primavera",
        preco:49.90,
        imagem:"imagens/arranjotulipas.jpg"
    },
    {
        nome:"Crisantemos Elegantes",
        preco: 69.90,
        imagem:"imagens/arranjocrisantemopompomfuji.jpg"
    }
]
const maisvendidos = [
    {
        nome:"Buquê Rosas Raios de Sol",
        preco:159.99,
        imagem:"imagens/buquerosalaranja.jpg"
    },
    {
        nome:"Jarro de Rosas Sortidas",
        preco:179.99,
        imagem:"imagens/jarrorosassortidas.jpg"
    },
    {
        nome:"Cesto de Rosas Raios de Sol",
        preco:199.90,
        imagem:"imagens/cestoderosaslaranja.jpg"
    },
    {
        nome:"Cesto de Rosas Românticas",
        preco:199.90,
        imagem:"imagens/cestoderosas.jpg"
    }
];
/* =-=-=-=-=Produtos Mais Vendidos=-=-=-=-= */
const containermaisvendidos = document.getElementsByClassName("produtosmaisvendidos")[0]
maisvendidos.forEach(produto => {
    const div = document.createElement("div")
    div.classList.add("produtoscard")
    
    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h1>${produto.nome}</h1>
        <p>${produto.preco}</p>
    `;
    containermaisvendidos.appendChild(div)
})
/* =-=-=-=-=Produtos Mais Vendidos-=-=-=-= */

/* =-=-=-=-=Produtos Buquês=-=-=-=-= */
const containerbuques = document.getElementsByClassName("produtosbuques")[0]
buques.forEach(produto => {
    const div = document.createElement("div")
    div.classList.add("produtoscard")

    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h1>${produto.nome}</h1>
        <p>${produto.preco}</p>
    `
    containerbuques.appendChild(div)
})

const containerarranjos = document.getElementsByClassName("produtosarranjos")[0]
arranjos.forEach(produto => {
    const div = document.createElement("div")
    div.classList.add("produtoscard")

    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h1>${produto.nome}</h1>
        <p>${produto.preco}</p>
    `
    containerarranjos.appendChild(div)
})

function abrirMenu(){
    const menuicon = document.querySelector(".menuicon")
    const menumobile = document.querySelector(".menumobile") 
    
    menumobile.classList.toggle("open")

    menuicon.classList.toggle("open")
}