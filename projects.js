// Verso's cases. Shared by the WebGL carousel (name, colours, headline, cta), the cases section
// below the fold (stat, text) and the case page (`detail`). Colours drive the generated image
// placeholders; swap them for real artwork whenever it's ready.
//
// `detail.sections` alternate image-left / image-right on the case page. Their copy sticks to
// what the Verso deck says about each case; anything more specific should be replaced with the
// real story once it's written.
window.PROJECTS = [
  {
    name: 'Allpendre',
    slug: 'all-pendre',
    short: { headline: ['751% mais','seguidores.'] },   // phones: a shorter headline
    tag: 'Estratégia e social media',
    colors: ['#1c2f55', '#c88a4a'],
    headline: ['751% mais', 'seguidores', 'em um ano.'],
    sub: 'Crescimento 100% orgânico.',
    cta: 'Ver case',
    stat: { value: '+751%', label: 'seguidores em 12 meses, sem mídia paga' },
    text: 'Pegamos o perfil inteiro: do posicionamento ao grid. Uma marca de casa e mesa que agora é descoberta por quem nunca tinha ouvido falar dela.',
    detail: {
      lead: 'Uma marca de casa e mesa com muito para mostrar e pouca presença digital. Assumimos o perfil inteiro para transformar vitrine em lugar de descoberta.',
      services: ['Estratégia', 'Direção criativa', 'Conteúdo', 'Design', 'Gestão de comunidade'],
      sections: [
        { kicker: 'O ponto de partida', title: 'Uma marca bonita que ainda precisava ser encontrada', text: 'A Allpendre tinha repertório, objetos e olhar. Faltava um perfil que organizasse tudo isso numa conversa contínua, em vez de posts soltos.' },
        { kicker: 'O que assumimos', title: '100% da social media do perfil', text: 'Estratégia, direção criativa, produção de conteúdo, design e gestão de comunidade na mesma mão. Um só time decidindo o que dizer, como mostrar e como responder.' },
        { kicker: 'A linguagem', title: 'Um grid que se reconhece de longe', text: 'Objetos, cores e cenas de mesa montados com recortes e palavras sobre as fotos. O perfil passou a ter um jeito próprio de aparecer, mesmo antes de o nome estar à vista.' },
      ],
      result: { big: '+751%', text: 'de crescimento em seguidores em um ano, de forma totalmente orgânica.' },
    },
  },
  {
    name: 'Cantão',
    slug: 'cantao',
    short: { headline: ['Varejo que','fala B2B.'] },   // phones: a shorter headline
    tag: 'Social media',
    colors: ['#5a1219', '#d9534a'],
    headline: ['Varejo que fala', 'com quem vende.'],
    sub: 'Social media e conexão B2B.',
    cta: 'Ver case',
    stat: { value: 'B2B', label: 'conversa direta com os lojistas parceiros' },
    text: 'Um perfil de varejo que precisava falar com os parceiros sem perder o jeito do Cantão. Estratégia, conteúdo, design e comunidade em um só fluxo.',
    detail: {
      lead: 'Um perfil de varejo que precisava criar conexão entre a marca e seus parceiros B2B, sempre atento à identidade do Cantão.',
      services: ['Estratégia de conteúdo', 'Direção criativa', 'Design', 'Gestão de comunidade'],
      sections: [
        { kicker: 'O desafio', title: 'Falar com o lojista sem soar como catálogo', text: 'O público não era o consumidor final, e sim quem revende. O conteúdo precisava ser útil para esse parceiro e, ao mesmo tempo, reconhecível como Cantão.' },
        { kicker: 'O que fizemos', title: 'Gestão completa do perfil', text: 'Da estratégia e da direção criativa do conteúdo ao design e à comunidade. Cada peça nasce de uma pergunta que o lojista realmente faz.' },
        { kicker: 'A linguagem', title: 'Perguntas diretas, cor forte, produto à vista', text: 'Peças em vermelho e fotos de moda com títulos que conversam, como quem fala de balcão. O jeans e o bordado seguem sendo os protagonistas.' },
      ],
      result: { big: 'B2B', text: 'um canal que conversa direto com os parceiros e mantém a identidade do Cantão em cada post.' },
    },
  },
  {
    name: 'Sens8',
    slug: 'sens8',
    short: { headline: ['Confiança','em primeiro.'] },   // phones: a shorter headline
    tag: 'Branding',
    colors: ['#2b3a1e', '#c9742f'],
    headline: ['Confiança antes', 'de qualquer venda.'],
    sub: 'Branding para um selo de wellness.',
    cta: 'Ver case',
    stat: { value: 'Sens8', label: 'identidade pensada para transmitir autoridade' },
    text: 'No mercado de wellness, o selo precisa vender confiança primeiro. Da narrativa à paleta, cada decisão trabalha para parecer sólida e acolhedora.',
    detail: {
      lead: 'Uma identidade construída para um selo de certificação no mercado de wellness, em torno do que a marca precisa vender primeiro: confiança.',
      services: ['Branding', 'Identidade visual', 'Narrativa', 'Direção criativa'],
      sections: [
        { kicker: "O logotipo", title: "Letras finas e altas, com um S em gota", text: "O nome em caixa alta e fina termina num S em forma de gota. Há versões em preto, laranja e sobre fundos coloridos." },
        { kicker: "O selo", title: "Um círculo com o S no centro", text: "O selo de certificação leva o S no meio e o nome em volta, em versões claras e escuras." },
        { kicker: "A paleta", title: "Verde-musgo, oliva, terracota e creme", text: "A paleta principal junta verde escuro, oliva, laranja, terracota e um branco quente. A secundária traz marrom e areia." },
        { kicker: "O padrão", title: "O S que se repete", text: "O ícone vira padrão repetido em creme, verde e laranja, para fundos, embalagens e materiais." },
        { kicker: "Os objetos", title: "Copos, garrafa e moletom com o ícone", text: "O S em laranja e verde aparece em copos de papel, garrafa e roupa, nos tons da paleta." },
        { kicker: "O dia a dia", title: "Uma ecobag no tom da marca", text: "A sacola de pano leva o logotipo em tom sobre tom e acompanha a marca para fora dos eventos." },
        { kicker: "O digital", title: "Perfil de Instagram com destaques em círculo", text: "O perfil usa o ícone em círculos coloridos nos destaques e fotos de bem-estar nos posts." },
        { kicker: "O site", title: "Foto de rosto e um título curto", text: "A página inicial do site combina uma foto em tom quente com uma frase direta e um botão claro." },
      ],
      result: { big: 'Sens8', text: 'uma marca que se apresenta com autoridade e calma, do símbolo à paleta.' },
    },
  },
  {
    name: 'Cinco',
    slug: 'cinco',
    short: { headline: ['Moda com','presença.'] },   // phones: a shorter headline
    tag: 'Execução e gestão',
    colors: ['#2c3a3f', '#b9c4c4'],
    headline: ['Moda com', 'presença diária.'],
    sub: 'Conteúdo que preserva a identidade.',
    cta: 'Ver case',
    stat: { value: 'Conteúdo', label: 'motion, reels e design em um só ritmo' },
    text: 'Produção contínua de conteúdo para uma marca de moda, unindo o acervo da marca e novas camadas de criação sem diluir a assinatura visual.',
    detail: {
      lead: 'Estratégia e produção de conteúdo para uma marca de moda, sempre a serviço da sua identidade e da percepção que ela constrói.',
      services: ['Estratégia', 'Design gráfico', 'Motion', 'Reels', 'Legendas', 'Organização do grid'],
      sections: [
        { kicker: 'O ponto de partida', title: 'Uma marca de moda com assinatura própria', text: 'A Cinco já tinha um jeito de aparecer, da letra manuscrita ao tom das fotos. O trabalho era manter isso vivo no dia a dia, sem repetir fórmulas.' },
        { kicker: 'O que produzimos', title: 'Design, motion, reels e legenda', text: 'Do design gráfico aos reels, das legendas à organização do grid. Cada peça é pensada na sequência em que será vista.' },
        { kicker: 'O método', title: 'Acervo da marca e IA, sob a mesma régua', text: 'Combinamos materiais de IA com o acervo da própria marca para gerar awareness sem perder a identidade. A curadoria é o que mantém tudo com a mesma cara.' },
      ],
      result: { big: 'Conteúdo', text: 'awareness constante, sem diluir a identidade da marca.' },
    },
  },
  {
    name: 'A Oficina Cerâmica',
    slug: 'oficina-ceramica',
    short: { headline: ['Histórias','em argila.'] },   // phones: a shorter headline
    tag: 'Social media',
    colors: ['#3b2418', '#c8553a'],
    headline: ['Histórias que', 'começam na argila.'],
    sub: 'Conteúdo que convida a entrar no ateliê.',
    cta: 'Ver case',
    stat: { value: 'Argila', label: 'posts que contam a história de quem faz cerâmica' },
    text: 'Um perfil de ateliê que fala de artistas e de recomeços. Cada post conta uma história e termina com um convite: venha fazer cerâmica com a gente.',
    detail: {
      lead: 'Um ateliê de cerâmica com muita história para contar. Criamos posts de artista que transformam biografias e peças em conteúdo que convida o público a começar a sua própria história com a argila.',
      services: ['Social media', 'Direção criativa', 'Design', 'Conteúdo'],
      sections: [
        { kicker: 'A ideia', title: 'Contar a vida de quem trabalha com argila', text: 'Em vez de mostrar só peças, partimos das pessoas. Cada post apresenta uma ceramista, sua trajetória e o que a aproxima do ofício.' },
        { kicker: 'O convite', title: 'Toda história termina numa porta aberta', text: 'Os textos curtos, em letras grandes sobre a imagem, fecham sempre com um chamado: a oficina tem um lugar para quem quer começar.' },
        { kicker: 'O olhar', title: 'Peças, mãos e tons de terra', text: 'Fotos em preto e branco, tons quentes e objetos em destaque. Uma linguagem calma, que combina com o tempo do ateliê.' },
      ],
      result: { big: 'Argila', text: 'um perfil que transforma biografias e peças em convite para fazer cerâmica.' },
    },
  },
  {
    name: 'Estúdio Ilha',
    slug: 'estudio-ilha',
    short: { headline: ['Uma ilha','em azul.'] },   // phones: a shorter headline
    tag: 'Social media',
    colors: ['#1a1f9c', '#dfe6f7'],
    headline: ['Um estúdio', 'todo em azul.'],
    sub: 'Campanha, cenário e acervo.',
    cta: 'Ver case',
    stat: { value: 'O.U.I', label: 'campanha de fragrância e acervo de cenário' },
    text: 'Um estúdio de objetos e cenários com identidade em azul cobalto. Da campanha de fragrância ao acervo catalogado, tudo na mesma linguagem.',
    detail: {
      lead: 'Um estúdio de objetos e cenários que precisava de uma identidade tão marcante quanto o seu acervo. Criamos peças em azul cobalto, com tipografia grande e imagens tratadas em duotone.',
      services: ['Estratégia de conteúdo', 'Direção criativa', 'Design', 'Gestão de comunidade'],
      sections: [
        { kicker: 'A identidade', title: 'Um azul só, aplicado com coragem', text: 'O nome em letras enormes, o azul cobalto e um símbolo simples. A marca se reconhece antes mesmo de ser lida.' },
        { kicker: 'O acervo', title: 'Objetos de cenário, catalogados', text: 'Poltronas, espelhos, luminárias e toca-discos organizados como um inventário ilustrado: cada objeto com nome e origem.' },
        { kicker: 'O ambiente', title: 'Cenas que parecem imagens de arquivo', text: 'Fotos tratadas em duotone azul e composições com moldura mostram o estúdio como lugar, não só como lista de objetos.' },
      ],
      result: { big: 'Azul', text: 'uma identidade que une campanha, acervo e cenário numa só linguagem.' },
    },
  },
  {
    name: 'Velle',
    slug: 'velle',
    short: { headline: ['Pequena,','branca, Velle.'] },   // phones: a shorter headline
    tag: 'Branding e direção criativa',
    colors: ['#a9c8e0', '#f3f6f8'],
    headline: ['Uma marca', 'que cabe na mão.'],
    sub: 'Identidade e embalagem de lançamento.',
    cta: 'Ver case',
    stat: { value: 'Velle', label: 'identidade e embalagem para o lançamento' },
    text: 'Uma marca nova, uma embalagem simples e uma foto de lançamento que repete o nome até virar padrão. Identidade e direção criativa do começo ao ensaio.',
    detail: {
      lead: 'Uma marca nova pedia uma identidade direta e uma embalagem que se explicasse sozinha. Desenhamos o nome, a embalagem e a direção criativa do ensaio de lançamento.',
      services: ['Branding', 'Embalagem', 'Direção criativa', 'Ensaio de lançamento'],
      sections: [
        { kicker: "O nome", title: "Uma palavra em letras grossas, sem enfeite", text: "O logotipo preto sobre a embalagem branca é tudo o que a marca precisa para ser lida de longe." },
        { kicker: "A embalagem em cena", title: "A bolsa com a etiqueta Velle nos ombros e nas mãos", text: "No dia do lançamento, a embalagem aparece junto das pessoas: pendurada, segurada, passada de mão em mão." },
        { kicker: "A bancada", title: "Bolsas brancas entre pincéis e paletas", text: "Sobre a mesa de maquiagem, a embalagem e os produtos dividem a cena. A marca aparece no lugar onde vai ser usada." },
        { kicker: "O espelho", title: "Um gesto simples, o produto à mão", text: "Retratos no espelho do banheiro mostram a rotina da marca, sem pose: maquiagem, luz natural e o que está ao redor." },
        { kicker: "Os bastidores", title: "O dia do lançamento, por dentro", text: "A equipe ao redor da modelo mostra o ritmo do dia: gente trabalhando, riso e a marca sempre por perto." },
      ],
      result: { big: 'Velle', text: 'uma marca que se reconhece pela embalagem e pelo nome, do lançamento ao ensaio.' },
    },
  },
  {
    name: 'Astre',
    slug: 'astre',
    short: { headline: ['Identidade','de moda.'] },   // phones: a shorter headline
    tag: 'Branding e identidade visual',
    colors: ['#1a1613', '#b89a7a'],
    headline: ['Uma marca de moda', 'com olhar editorial.'],
    sub: 'Identidade, embalagem e linguagem de imagem.',
    cta: 'Ver case',
    stat: { value: 'Astre', label: 'identidade visual, embalagem e linguagem de imagem' },
    text: 'Um nome discreto, fotos de moda em luz natural e um sistema que vai do logo à embalagem. A marca aparece pequena e deixa a imagem falar.',
    detail: {
      lead: 'Uma marca de moda precisava de uma identidade que acompanhasse o olhar das suas imagens. Criamos o nome visual, a embalagem e o sistema de posts, sempre com a marca em segundo plano.',
      services: ['Branding', 'Identidade visual', 'Embalagem', 'Direção de arte'],
      sections: [
        { kicker: "A marca", title: "Um nome pequeno, sobre fotos grandes", text: "O logotipo em minúsculas aparece discreto no canto da imagem. Quem olha vê primeiro a roupa, o gesto e a luz; o nome vem depois." },
        { kicker: "A linguagem", title: "Moda, objetos e detalhe", text: "Retratos em preto e branco, peças em ambientes reais e objetos como uma taça ou um telefone antigo. Cada foto parece um quadro de editorial." },
        { kicker: "O sistema", title: "Do logo ao post, no mesmo tom", text: "Logo, embalagem, papelaria, site e posts partem das mesmas escolhas de cor, enquadramento e silêncio." },
        { kicker: "A embalagem", title: "Uma sacola geométrica em amarelo-manteiga", text: "Alça vazada, vincos marcados e o nome em preto. Uma forma própria e uma cor só, que se reconhece de longe." },
        { kicker: "O objeto", title: "Sem modelo nem cenário, a sacola vira escultura", text: "Em fundo liso, as pontas e os vincos ficam à mostra, com o nome centralizado na frente." },
        { kicker: "O pano", title: "O mesmo amarelo em tecido", text: "A versão em pano leva o mesmo nome e a mesma cor para o uso do dia a dia, de ombro e de mão." },
      ],
      result: { big: 'Astre', text: 'uma identidade que deixa a imagem falar e leva a marca da embalagem ao feed.' },
    },
  },
  {
    name: 'So.Connected',
    slug: 'so-connected',
    short: { headline: ['Cultura','em rede.'] },   // phones: a shorter headline
    tag: 'Social media e estratégia',
    colors: ['#ff8fc8', '#1c1cf0'],
    headline: ['Cultura que vira', 'conversa de marca.'],
    sub: 'Música, moda e parcerias em carrossel.',
    cta: 'Ver case',
    stat: { value: '1.216.545', label: 'views orgânicos em 1 ano' },
    text: "Posts de carrossel do perfil da própria So.Connected, em inglês, sobre parcerias e movimentos culturais. Os artistas e as marcas que aparecem são assunto do perfil.",
    detail: {
      lead: 'A So.Connected trabalha na interseção entre música, moda e marcas. Criamos posts de carrossel que explicam parcerias, contam histórias e apresentam números, sempre em tom de conversa.',
      services: ['Social media', 'Estratégia de conteúdo', 'Design de carrossel', 'Copy'],
      sections: [
        { kicker: 'Parceria', title: '30PRAUM e Kenner, em formato de história', text: 'Uma parceria de marca explicada em poucos cards: quem é cada lado, o que construíram juntos e o que acontece no Plantão Festival.' },
        { kicker: 'Moda e música', title: 'Quando o artista veste o argumento', text: 'Posts editoriais que mostram como roupa e som contam a mesma história, com fotos recortadas, notas e uma pergunta para abrir a conversa.' },
        { kicker: 'BRESH', title: 'Uma festa global chega ao Brasil', text: 'Cores fortes, mascote e números grandes para apresentar a BRESH ao público brasileiro: de onde veio, quanto cresceu e por que importa agora.' },
      ],
      result: { big: '1.216.545', text: 'views orgânicos em um ano, com conteúdo próprio que transforma movimentos culturais em conversa.' },
    },
  },
  {
    name: 'Bar Botânico',
    slug: 'botanico',
    short: { headline: ['Sabor','em foco.'] },   // phones: a shorter headline
    tag: 'Fotografia e conteúdo',
    colors: ['#4a2a14', '#d7a35b'],
    headline: ['Comida que', 'dá vontade.'],
    sub: 'Ensaio de cardápio para o Bar Botânico.',
    cta: 'Ver case',
    stat: { value: 'Sabor', label: 'ensaio de fotos do cardápio' },
    text: 'Um ensaio de cardápio com luz quente, mesa de madeira e pratos para dividir. As fotos servem ao feed, ao delivery e ao salão.',
    detail: {
      lead: 'Um bar com cozinha própria pedia fotos que fizessem o prato parecer o que é: para dividir, quente e sem pressa. O ensaio cobre tábuas, petiscos e acompanhamentos.',
      services: ['Fotografia', 'Conteúdo', 'Tratamento de imagem'],
      sections: [
        { kicker: "A mesa", title: "Tábua cheia, madeira e luz quente", text: "Frios, pães e frutas montados como na mesa: sem excesso de estilização, com cor e textura em primeiro plano." },
        { kicker: "O detalhe", title: "Petiscos que pedem a mão", text: "Cestinhos, molhos e pratos em close mostram o ponto da fritura e o brilho do molho." },
        { kicker: "Os petiscos", title: "Bolinhos dourados, ervas por cima", text: "Em prato claro e luz lateral, o ponto da fritura ganha o primeiro plano e o prato inteiro cabe na foto." },
        { kicker: "A bebida", title: "Vermelho, limão e gelo", text: "Os drinks aparecem na madeira da mesa ou contra um fundo claro, para fechar a cena com cor." },
        { kicker: "O ambiente", title: "O pátio onde tudo acontece", text: "Plantas, parede clara e mesa de madeira mostram o lugar, além do prato." },
      ],
      result: { big: 'Sabor', text: 'um banco de imagens do cardápio com a mesma luz, para o feed, o delivery e o salão.' },
    },
  },
  {
    name: 'Altare',
    slug: 'altare',
    short: { headline: ['Couro, metal','e pele.'] },   // phones: a shorter headline
    tag: 'Branding e identidade visual',
    colors: ['#4a0f12', '#b9b9b6'],
    headline: ['Uma marca em', 'couro, metal e pele.'],
    sub: 'Logotipo, texturas e destaques do Instagram.',
    cta: 'Ver case',
    stat: { value: 'Altare', label: 'logotipo em couro, metal, relevo e pele' },
    text: "Um acervo de moda com logotipo de traço solto e um ponto final, aplicado em couro vinho, metal escovado, papel em relevo, etiquetas, sacola e feed.",
    detail: {
      lead: 'A Altare pedia uma identidade com presença física. Desenhamos um logotipo manuscrito, com um floreio que corta as letras, e o levamos para materiais que dá vontade de tocar.',
      services: ['Branding', 'Identidade visual', 'Brandbook', 'Direção de arte'],
      sections: [
        { kicker: "O logotipo", title: "Um traço solto, fechado por um ponto", text: "As letras se cruzam num desenho único, com um floreio que sobe e um ponto final. Existe também uma versão em letra minúscula, presa a um alfinete." },
        { kicker: "Na pele", title: "A marca também é tatuagem", text: "O logotipo aparece tatuado na nuca e nas costas, como uma assinatura que não sai." },
        { kicker: "As texturas", title: "Couro, metal e relevo no mesmo sistema", text: "O mesmo logotipo em couro vinho, metal escovado, couro preto e relevo em papel areia. Cada textura vira um fundo para posts e destaques." },
        { kicker: "A sacola", title: "Prata escovada, alças pretas, logotipo grande", text: "A sacola leva o logotipo em preto sobre o prateado, de modo que a marca vai pela rua junto com quem compra." },
        { kicker: "A etiqueta", title: "Claro, costurado na peça", text: "Uma etiqueta de tom claro, com o logotipo e a data de fundação, fixada na peça." },
        { kicker: "Os tags", title: "Papel claro, preso por um nó", text: "Dois tags com o logotipo e a frase \"The art of collecting.\" em tipografia serifada." },
        { kicker: "O envelope", title: "Vinho por fora, cartão claro por dentro", text: "O envelope vinho leva o logotipo em branco no verso e guarda um cartão de apresentação, para convites e comunicados." },
        { kicker: "O feed", title: "Vitrine em preto, vinho e prata", text: "No Instagram, os destaques em círculo e os posts em preto, vinho e prata formam a vitrine da marca." },
      ],
      result: { big: 'Altare', text: 'uma identidade que sai do papel e vai para o couro, o metal e a pele.' },
    },
  },
  {
    name: 'Mari Maria × Scherbi’s',
    slug: 'mari-maria',
    short: { headline: ['Make com', 'gosto de cookie.'] },   // phones: a shorter headline
    tag: 'Produção de campanha',
    colors: ['#4e1518', '#c9925e'],
    headline: ['Maquiagem com', 'gosto de cookie.'],
    sub: 'Campanha da collab Mari Maria Makeup × Scherbi’s.',
    cta: 'Ver case',
    stat: { value: 'Collab', label: 'produção executiva, direção e edição da campanha' },
    text: 'A collab entre a Mari Maria Makeup e a Scherbi’s virou campanha de foto e vídeo. Fizemos a produção executiva, a direção e a pós-produção.',
    detail: {
      lead: 'Uma marca de maquiagem e uma de cookies lançando produtos juntas. A campanha precisava colocar as duas na mesma mesa, com o mesmo apetite.',
      services: ['Produção executiva', 'Direção', 'Pós-produção', 'Edição'],
      sections: [
        { kicker: 'A campanha', title: 'Duas marcas na mesma mesa', text: 'Batom e cookie dividem a cena: o produto aparece na mão, na boca e no meio da massa.' },
        { kicker: 'O produto', title: 'Embalagens no meio da bagunça', text: 'Caixas, sacolas e batons da collab aparecem entre chocolate, granulado e cookies quebrados.' },
        { kicker: 'A direção', title: 'Close, cor quente e mesa em uso', text: 'Vinho, chocolate e caramelo na paleta, luz suave e uma mesa que parece de verdade, do set à edição dos vídeos.' },
      ],
      result: { big: 'Collab', text: 'uma campanha de foto e vídeo que coloca as duas marcas na mesma linguagem.' },
    },
  },
];

// The order the cases appear in, both in the carousel and in the list below the fold: the strongest
// pictures first (the list opens with the first one, wide, then goes in pairs). The carousel loops, so the
// last one peeks in on the left of the first: that one has to look good too.
const CASE_ORDER = ['mari-maria', 'all-pendre', 'astre', 'velle', 'so-connected', 'cinco', 'altare', 'sens8', 'oficina-ceramica', 'estudio-ilha', 'cantao', 'botanico'];
PROJECTS.sort((a, b) => CASE_ORDER.indexOf(a.slug) - CASE_ORDER.indexOf(b.slug));

// Photos taken from the Verso deck, to see how the real thing will look (an experiment: they can
// repeat and be swapped freely). `hero` feeds the carousel card, the case card and the first screen
// of the case page; `focus` is where, vertically, a wide crop of a tall photo should centre.
const PHOTO_FOCUS = { 'mari-maria': 0.33, 'all-pendre': 0.5, cantao: 0.12, sens8: 0.5, cinco: 0.5, 'oficina-ceramica': 0.4, 'estudio-ilha': 0.5, velle: 0.5, astre: 0.35, 'so-connected': 0.3, botanico: 0.5, altare: 0.5 };
// bump this whenever a picture is replaced, so phones and the CDN fetch the new file instead of the cached one
const ASSET_V = 24;
const PHOTO_CARD = { 'all-pendre': true, 'mari-maria': true, cantao: true, sens8: true, 'oficina-ceramica': true, 'so-connected': true, astre: true, altare: true, velle: true, botanico: true };
// cases with a high-resolution copy of their slide picture (same framing), shown when the case opens full screen
const PHOTO_FULL = { 'all-pendre': true, 'mari-maria': true, altare: true, velle: true, botanico: true, sens8: true, 'oficina-ceramica': true };
const PHOTO_RATIO = { sens8: 1, botanico: 0.667 };
const SECTION_RATIOS = {   // overrides, per section: width / height of the picture
  velle: [0.78, 0.667, 1.5, 0.667, 0.667],
  astre: [0.8, 0.8, 0.8, 1, 1, 0.667],
  altare: [0.8, 1.778, 0.8, 1.778, 1.778, 1.778, 1.778, 1.778],
  sens8: [1.778, 1.778, 1.778, 1.778, 1.778, 1.778, 1.778, 1.778],
  'oficina-ceramica': [0, 0.75, 0.75],
  'mari-maria': [0.667, 0.667, 0.667],
};
// strips of posts / photos / videos shown before the result: slug -> [how many, title, ratio, file key, extension]
// (a list of them for a case with more than one strip; files are <slug>-<key><n>.<ext>, key 'g' and 'jpg' by default;
// an .mp4 strip also needs a <slug>-<key><n>.jpg poster)
const GALLERY = {
  'all-pendre': [
    [3, 'Ensaio da casa', 0.75, 'f'],
    [6, 'Posts criativos', 0.75],
  ],
  cinco: [4, 'Os vídeos', 0.5625, 'v', 'mp4'],
  'mari-maria': [
    [3, 'Mais do ensaio', 0.667],
    [2, 'Os vídeos da campanha', 0.5625, 'v', 'mp4'],
  ],
  cantao: [7, 'Como vender jeans, em sete posts', 0.8],
  'so-connected': [
    [9, 'O carrossel sobre música latina', 0.8],
    [8, 'Os países que mais escutam música brasileira', 0.8, 'p'],
  ],
  'estudio-ilha': [5, 'Posts da campanha Heineken', 0.8],
  'oficina-ceramica': [8, 'Do barro à peça: processo e resultado', 0.75],
};
PROJECTS.forEach((p) => {
  if (PHOTO_RATIO[p.slug]) p.imageRatio = PHOTO_RATIO[p.slug];
  const own = PHOTO_CARD[p.slug];   // pictures cut for the carousel card: one for phones, one for wide screens
  p.images = { card: `assets/cases/${p.slug}-card.jpg?v=${ASSET_V}`, heroPortrait: own && `assets/cases/${p.slug}-card-m.jpg?v=${ASSET_V}`, heroLandscape: own && `assets/cases/${p.slug}-card-d.jpg?v=${ASSET_V}`, hero: `assets/cases/${p.slug}-hero.jpg?v=${ASSET_V}`, focus: PHOTO_FOCUS[p.slug] };
  if (PHOTO_FULL[p.slug]) { p.images.fullPortrait = `assets/cases/${p.slug}-full-m.jpg?v=${ASSET_V}`; p.images.fullLandscape = `assets/cases/${p.slug}-full-d.jpg?v=${ASSET_V}`; }
  const g = GALLERY[p.slug];
  if (g) p.galleries = (Array.isArray(g[0]) ? g : [g]).map(([n, title, ratio, key = 'g', ext = 'jpg']) => ({ title, ratio, items: Array.from({ length: n }, (_, k) => `assets/cases/${p.slug}-${key}${k + 1}.${ext}?v=${ASSET_V}`) }));
  p.detail.sections.forEach((s, k) => { s.image = `assets/cases/${p.slug}-s${k + 1}.jpg?v=${ASSET_V}`; const r = SECTION_RATIOS[p.slug]; if (r && r[k]) s.ratio = r[k]; });
});
