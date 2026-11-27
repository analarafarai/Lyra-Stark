NÊMESIS - Ficha de Herói
Projeto desenvolvido para a Parte 1 da disciplina Tecnologia Web. A página apresenta a ficha da personagem Lyra Stark, também conhecida como Nêmesis, em uma interface inspirada em telas de status de RPG.

Sobre o projeto
O site organiza as informacoes da personagem em cinco partes:
- apresentação e história;
- ficha de identificação;
- habilidades e atributos;
- inventario e conquistas;
- conexão com a guilda, com formulário de contato.
O projeto usa uma identidade visual escura, com tons de rosa para destacar níveis, barras de progresso e elementos interativos.

Tecnologias utilizadas
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media queries para responsividade
- Google Fonts
- JavaScript

Recursos aplicados
- Menu de navegação com links internos para cada seção.
- Barras de progresso feitas com HTML e CSS.
- Layout com Grid nas seções de atributos, poderes e inventário.
- Efeito de hover nos cards do inventário e no botão do formulário.
- Versão para celular com as seções organizadas em uma coluna.
- Menu fixo no topo e menu hambúrguer no celular.
- História dividida em seis capítulos com botões de Ler mais e Ver menos e uma linha do tempo.
- Inventário com seis itens, filtros por tipo e contador de itens exibidos.
- Barra de XP que ganha 7 pontos por missão e mostra um aviso ao chegar a 100.
- Formulário da Guilda com validação dos campos e mensagens de erro e confirmação. 
- Saudação conforme o horário 
- Botão para alternar entre o modo padrão e o noturno.
- Preferência de tema: localStorage para guardar o tema escolhido no navegador. O setItem() salva a escolha quando a pessoa troca de tema, e o getItem() recupera essa escolha quando a página abre.

Decisoes de UI/UX
- Hierarquia visual: o nome NÊMESIS e os destaques em rosa recebem tamanhos maiores para direcionar a atenção ao início de cada seção.
- Contraste: o fundo escuro contrasta com o texto claro, em tons de branco e rosa, favorecendo a leitura.
- Consistência: cards, bordas, barras e etiquetas repetem a mesma paleta de cores e os mesmos espaçamentos.
- Feedback: os cards do inventário e o botão mudam de cor e tamanho ao passar o mouse, indicando que podem ser interagidos.
- Estado da interface: o hambúrguer vira um X quando o menu está aberto, e o filtro ativo fica destacado em rosa.
- Feedback das ações: a barra de XP e o contador se atualizam a cada interação. O formulário mostra o resultado da validação abaixo de Enviar.
- Controle do usuário: é possível recolher os capítulos, voltar a exibir todos os itens e trocar o tema pelo cabeçalho.
  
Estrutura de pastas
Lyra Stark
├── index.html
├── README.md
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
└── IMAGENS/
    ├── ÍCONE.png
    ├── LYRA1.png
    ├── LYRA2.png
    ├── LYRA.cir.png
    ├── TRAJE.png
    ├── PISTOLA.png
    ├── VÉSPER.png
    ├── FRAGMENTO.png
    ├── NUCLEO.png
    ├── RASTREADOR.png
    └── AVENGERS.png
  
Protótipo
![Protótipo - parte 1](<READ ME/PROTÓTIPO1.png>)
![Protótipo - parte 2](<READ ME/PROTÓTIPO2.png>)

Capturas de tela
- Notebook:
![Print - Notebook](<NOOTBOOK2/.jpeg>)

- Celular:
![Print - Celular parte 1](<READ ME/CELULAR2.jpg>)
![Print - Celular parte 2](<READ ME/CELULAR3.jpg>)

Acesso ao projeto
- Git Hub Pages: [Clique aqui para acessar o site](https://analarafarai.github.io/Lyra-Stark/)
- Repositório Git Hub: [Acesse o código fonte aqui](https://github.com/analarafarai/Lyra-Stark)

Desenvolvido por
- Ana Lara da Rocha Faria
- Disciplina: Tecnologia Web
- Projeto acadêmico - Parte 1

Uso educacional
Projeto desenvolvido para fins educacionais. A personagem utiliza referências de universos de ficção como parte de uma criação de fã, sem afiliação oficial.
