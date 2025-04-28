const preco = {
    griezmann: 499.00,
    neyma: 1.00,
    messi: 299.00,
    Mcgregor: 11299.00,
    poatan: 220099.00,
    bronx: 15009.00,
    garry: 11899.00,
    dk: 10.00,
    black: 100.00,
    master: 700.00,
    pulga: 199.00,
    cristianoRonaldo: 299.00
   

};
 
const produtos = [
    {
        titulo: "griezmann",
        preco: preco.griezmann,
        categoria: "jogadores",
        imagem: "https://jpimg.com.br/uploads/2017/04/1897829755-griezmann-havia-afirmado-que-atletico-de-madrid-brigaria-contra-o-rebaixamento-na-temporada.jpg"
    },
    {
        titulo: "oneyma",
        preco: preco.neyma,
        categoria: "jogadores",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jvT9aAJUPeexGgc4WTOpdc4Jld5qaW3FA&s"
    },
    {
        titulo: "messi",
        preco: preco.messi,
        categoria: "jogadores",
        imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/04/messi-inter-miami-scaled-aspect-ratio-512-320.jpg"
    },
    {
        titulo: "cris",
        preco: preco.cristianoRonaldo,
        categoria: "jogadores",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhHe79aHGHO5SfYZ01rniGOn7--_yPBXC4HIlynkunrmLLU3rli-La4uyaHQq76-ywBUL6RDQ_qzZ4FxW39LM4ERCN9balNn4FJwRUQ"
    },
    {
        titulo: "blackoutz",
        preco: preco.black,
        categoria: "players",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQut8XAGSnjUFNA7nUS9fX73wBJMc7Pai70TA&s"
    },
    {
        titulo: "pulga",
        preco: preco.pulga,
        categoria: "players",
        imagem: "https://s2-ge.glbimg.com/W8S4ayr2fh1kLeHAK9B-pxWZ2E4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/O/w/9G13qcToyyfT7WSQInsw/pulga-liquid-fortnite.jpg"
    },
    {
        titulo: "master",
        preco: preco.cristianoRonaldo,
        categoria: "players",
        imagem: "https://s2-ge.glbimg.com/9OiHrIO1liw7RSsadfQFLcf7QKA=/0x0:955x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/o/C/9okQcrQYOhn51xYenvKw/c652fa0ff06965e78ded728cd1965680low.jpeg"
    },
    {
        titulo: "dk",
        preco: preco.dk,
        categoria: "players",
        imagem: "https://static.valorantzone.gg/news/2021/03/12134703/DRAKONZ.png"
    },
    {
        titulo: "McGregor",
        preco: preco.Mcgregor,
        categoria: "lutadores",
        imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=pad/uploads/2022/11/24/637f7ad7c5a00.jpeg"
    },
    {
        titulo: "Machado garry",
        preco: preco.garry,
        categoria: "lutadores",
        imagem: "https://pbs.twimg.com/profile_images/1521560846073311232/y352LbTC_400x400.jpg"
    },
    {
        titulo: "charles do bronx",
        preco: preco.bronx,
        categoria: "lutadores",
        imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSg1Li_GHfllBmF5A15YMs2lv_6BSTL9UzLyzXeZf_Ge-QO4RunoWQMBV7y4RbDS8Lg1eEVdlauYgvFi2XI5_GJvQ"
    },
    {
        titulo: "alex poatan pereira ",
        preco: preco.poatan,
        categoria: "lutadores",
        imagem: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/15/492808233-poatancinturaoufc300.jpeg"
    }
];
 
 
const produtosNaCesta = [];
const container = document.getElementById('container');
const listaC = document.querySelector('.listaC');
const overlay = document.querySelector('.overlay');
 
function mostrarCarrinho() {
    listaC.classList.add('mostrar');
    overlay.classList.add('mostrar');
}
 
function ocultarCarrinho() {
    listaC.classList.remove('mostrar');
    overlay.classList.remove('mostrar');
}
 
function adicionarProdutosAoContainer() {
    produtos.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img class="ps4" src="${produto.imagem}" alt="${produto.titulo}">
            <h1 class="ps4titulo">${produto.titulo}</h1>
            <h2 class="preco"><b>R$ ${produto.preco.toFixed(2)}</b></h2>
            <button class="comprar" data-index="${index}">Comprar</button>
        `;
        container.appendChild(divProduto);
    });
 
    const botoesComprar = document.querySelectorAll('.comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            adicionarProdutoNaCesta(index);
            mostrarCarrinho();
        });
    });
}
 
function adicionarProdutoNaCesta(index) {
    const produto = produtos[index];
    const produtoExistente = produtosNaCesta.find(p => p.titulo === produto.titulo);
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        produtosNaCesta.push({ ...produto, quantidade: 1 }); 
    }
    atualizarListaC();
}
 
function atualizarListaC() {
    const itensExistentes = listaC.querySelectorAll('.item-cesta');
    itensExistentes.forEach(item => item.remove());
 
    produtosNaCesta.forEach((produto, index) => {
        const item = document.createElement('div');
        item.classList.add('item-cesta');
        item.innerHTML = `
            <p><strong>${produto.titulo}</strong></p>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <p class="legal"> <b>R$ ${(produto.preco * produto.quantidade).toFixed(2)}<b></p>
            <p><button class="diminuir" data-index="${index}">-</button>
                ${produto.quantidade}
                <button class="aumentar" data-index="${index}">+</button>
            </p><button class="remover" data-index="${index}">Remover</button>
        `;
        listaC.appendChild(item);
    });
 
    // Recalcula o total
    const precoTotal = produtosNaCesta.reduce((total, produto) => {
        return total + produto.preco * produto.quantidade;
    }, 0);
 
    let totalDiv = document.querySelector('.total-preco');
    if (!totalDiv) {
        totalDiv = document.createElement('div');
        totalDiv.classList.add('total-preco');
        listaC.appendChild(totalDiv);
    }
    totalDiv.innerHTML = `<h3 id="Total">Total: R$ ${precoTotal.toFixed(2)}</h3>`;
 
  
    const botoesDiminuir = document.querySelectorAll('.diminuir');
    botoesDiminuir.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (produtosNaCesta[index].quantidade > 1) {
                produtosNaCesta[index].quantidade -= 1;
            } else {
                produtosNaCesta.splice(index, 1);
            }
            atualizarListaC();
        });
    });
 
    const botoesAumentar = document.querySelectorAll('.aumentar');
    botoesAumentar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            produtosNaCesta[index].quantidade += 1;
            atualizarListaC();
        });
    });
 
    const botoesRemover = document.querySelectorAll('.remover');
    botoesRemover.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            produtosNaCesta.splice(index, 1);
            atualizarListaC();
        });
    });
}
function filtrarProdutosPorCategoria(categoria) {
    const produtosContainer = document.querySelectorAll('#container .produto');
    produtosContainer.forEach(produto => produto.remove());

    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    produtosFiltrados.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img class="ps4" src="${produto.imagem}" alt="${produto.titulo}">
            <h1 class="ps4titulo">${produto.titulo}</h1>
            <h2 class="preco"><b>R$ ${produto.preco.toFixed(2)}</b></h2>
            <button class="comprar" data-index="${index}">Comprar</button>
        `;
        container.appendChild(divProduto);
    });

    const botoesComprar = document.querySelectorAll('.comprar');
    botoesComprar.forEach((botao, index) => {
        botao.addEventListener('click', () => {
           
            adicionarProdutoNaCesta(produtos.indexOf(produtosFiltrados[index]));
            mostrarCarrinho();
        });
    });
}
 

const navItems = document.querySelectorAll('nav h1');
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        const categoria = navItem.getAttribute('data-categoria');
        filtrarProdutosPorCategoria(categoria);
    });
});
 
document.querySelector('.excluir').addEventListener('click', ocultarCarrinho);
overlay.addEventListener('click', ocultarCarrinho);
 
adicionarProdutosAoContainer();
document.querySelector('.excluir').addEventListener('click', ocultarCarrinho);
overlay.addEventListener('click', ocultarCarrinho);
 
adicionarProdutosAoContainer();