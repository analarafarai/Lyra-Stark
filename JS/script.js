// saudação pela hora
const saudacaoHeroi = document.getElementById("saudacao-heroi");

if (saudacaoHeroi) {
    // pega só a hora de agora
    const horaAtual = new Date().getHours();
    let mensagemSaudacao = "";

    if (horaAtual >= 6 && horaAtual < 12) {
        mensagemSaudacao = "Bom dia! Bem-vindo à Torre dos Vingadores.";
    } 
    
    else if (horaAtual >= 12 && horaAtual < 18) {
        mensagemSaudacao = "Boa tarde! Você está no canal dos Vingadores.";
    } 
    
    else {
        mensagemSaudacao = "Boa noite! A Torre dos Vingadores segue em vigília.";
    }

    saudacaoHeroi.textContent = mensagemSaudacao;
}

// modo noturno
const botaoModoNoturno = document.getElementById("botao-modo-noturno");

if (botaoModoNoturno) {
    // lembra o tema que ficou salvo no navegador
    if (localStorage.getItem("tema") === "noturno") {
        document.body.classList.add("modo-noturno");
        botaoModoNoturno.textContent = "Modo padrão";
    }

    botaoModoNoturno.addEventListener("click", () => {
        // coloca ou tira a classe do modo noturno
        document.body.classList.toggle("modo-noturno");

        // salva a escolha pra continuar igual quando abrir de novo
        if (document.body.classList.contains("modo-noturno")) {
            botaoModoNoturno.textContent = "Modo padrão";
            localStorage.setItem("tema", "noturno");
        } else {
            botaoModoNoturno.textContent = "Modo noturno";
            localStorage.setItem("tema", "padrao");
        }
    });
}

// menu hambúrguer
const botaoMenu = document.getElementById("botao-menu");
const menuNav = document.querySelector("header nav");

if (botaoMenu && menuNav) {
    botaoMenu.addEventListener("click", () => {
        menuNav.classList.toggle("aberto");

    if (menuNav.classList.contains("aberto")) {
    botaoMenu.textContent = "\u2715"; // vira um X
    } 
    
    else {
    botaoMenu.textContent = "\u2630"; // vira o hambúrguer
    }

    });
}

// itens do inventário
const itensInventario = [
    {
        nome: "Traje de Combate Nêmesis",
        imagem: "IMAGENS/TRAJE.png",
        tipo: "armadura",
        raridade: "epico",
        descricao: "Desenvolvido com engenharia Stark para conter energia primordial e impactos."
    },
    {
        nome: "Pistola de Deslocamento",
        imagem: "IMAGENS/PISTOLA.png",
        tipo: "arma",
        raridade: "raro",
        descricao: "Dispositivo de precisão para reposicionamento tático em combate."
    },
    {
        nome: "Interface Vésper",
        imagem: "IMAGENS/VÉSPER.png",
        tipo: "tecnologia",
        raridade: "epico",
        descricao: "Sistema inteligente de análise e monitoramento de anomalias."
    },
    {
        nome: "Fragmento 007",
        imagem: "IMAGENS/FRAGMENTO.png",
        tipo: "reliquia",
        raridade: "lendario",
        descricao: "Evidência recuperada da operação AHCOR-007 com assinatura energética ativa."
    },
    {
        nome: "Núcleo de Contenção",
        imagem: "IMAGENS/NUCLEO.png",
        tipo: "tecnologia",
        raridade: "raro",
        descricao: "Estabilizador portátil para reduzir sobrecarga de energia."
    },
    {
        nome: "Rastreador de Anomalias",
        imagem: "IMAGENS/RASTREADOR.png",
        tipo: "tecnologia",
        raridade: "raro",
        descricao: "Dispositivo criado por Lyra para localizar distorções da realidade com a mesma assinatura energética do Projeto AHCOR."
    }
];

const containerInventario = document.getElementById("lista-inventario");
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const contadorInventario = document.getElementById("contador-inventario");

// contador de itens
function atualizarContador(quantidade) {
    if (contadorInventario) {
        contadorInventario.textContent = `${quantidade} de ${itensInventario.length} itens`;
    }
}

// cria os cards na tela
function renderizarInventario(listaDeItens) {
    if (!containerInventario) return;

    // apaga o que tava na tela antes pra não ficar repetido
    containerInventario.textContent = "";

    listaDeItens.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card-item";

        const imagem = document.createElement("img");
        imagem.src = item.imagem;
        imagem.alt = item.nome;

        const titulo = document.createElement("h3");
        titulo.textContent = item.nome;

        const meta = document.createElement("p");
        meta.className = "meta-item";
        meta.textContent = `Tipo: ${item.tipo} | Raridade: ${item.raridade}`;

        const descricao = document.createElement("p");
        descricao.textContent = item.descricao;

   

        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(meta);
        card.appendChild(descricao);

        containerInventario.appendChild(card);
    });

    atualizarContador(listaDeItens.length);
}

// filtros do inventário
botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
        // pega o filtro que tá escrito no botão lá no HTML
        const categoria = botao.dataset.filtro;

        botoesFiltro.forEach((btn) => btn.classList.remove("ativo"));
        botao.classList.add("ativo");

        if (categoria === "todos") {
            renderizarInventario(itensInventario);
        } else {
            // separa só os itens que combinam com o botão clicado
            const filtrados = itensInventario.filter(
                (item) => item.tipo === categoria || item.raridade === categoria
            );
            renderizarInventario(filtrados);
        }
    });
});

// carrega o inventário logo de cara
renderizarInventario(itensInventario);

// barra de xp
const btnGanharXp = document.getElementById("btn-ganhar-xp");
const barraXp = document.getElementById("barra-xp");
const statusXp = document.getElementById("status-xp");

let xpAtual = 0;
const metaXp = 100;

if (btnGanharXp && barraXp && statusXp) {
    btnGanharXp.addEventListener("click", () => {
        xpAtual = xpAtual + 7;

        // não deixa passar de 100
        if (xpAtual > metaXp) {
            xpAtual = metaXp;
        }

        barraXp.style.width = `${xpAtual}%`;

        if (xpAtual >= metaXp) {
            statusXp.textContent = `XP: ${xpAtual} / ${metaXp} — Nível up!`;
        } else {
            statusXp.textContent = `XP acumulado: ${xpAtual} / ${metaXp}`;
        }
    });
}

// abre e fecha o texto extra dos capítulos
const capitulos = document.querySelectorAll(".capitulo");

capitulos.forEach((capitulo) => {
    const botao = capitulo.querySelector(".btn-ver-mais");
    const texto = capitulo.querySelector(".capitulo-extra");

    botao.addEventListener("click", () => {
        // vê se o texto tá escondido e troca pra mostrar ou esconder
        const estaEscondido = texto.hidden;
        texto.hidden = !estaEscondido;
        botao.textContent = estaEscondido ? "Ver menos" : "Ler mais";
    });
});

// formulário da guilda
const formularioGuilda = document.querySelector("#guilda form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const feedbackGuilda = document.getElementById("mensagem-guilda");

if (formularioGuilda && inputNome && inputEmail && inputMensagem && feedbackGuilda) {
    formularioGuilda.addEventListener("submit", (event) => {
        // não deixa a página atualizar sozinha ao enviar
        event.preventDefault();

        // tira espaços sobrando no começo e no fim
        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        const campoVazio = nome === "" || email === "" || mensagem === "";
        // vê se o e-mail tá num formato válido
        const emailInvalido = inputEmail.validity.typeMismatch;

        if (campoVazio || emailInvalido) {
            feedbackGuilda.textContent = "Confira os dados. Preencha os três campos e verifique o e-mail.";
            feedbackGuilda.className = "msg-erro";
            return;
        }

        feedbackGuilda.textContent = `Transmissão validada, ${nome}!`;
        feedbackGuilda.className = "msg-sucesso";

        // limpa os campos depois de enviar
        inputNome.value = "";
        inputEmail.value = "";
        inputMensagem.value = "";
    });
}