// Verso's cases. Shared by the WebGL carousel (name, colours, headline, cta), the cases section
// below the fold (stat, text) and the case page (`detail`). Colours drive the generated image
// placeholders; swap them for real artwork whenever it's ready.
//
// `detail.sections` alternate image-left / image-right on the case page. Their copy sticks to
// what the Verso deck says about each case; anything more specific should be replaced with the
// real story once it's written.
window.PROJECTS = [
  {
    name: 'All Pendre',
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
        { kicker: 'O ponto de partida', title: 'Uma marca bonita que ainda precisava ser encontrada', text: 'A All Pendre tinha repertório, objetos e olhar. Faltava um perfil que organizasse tudo isso numa conversa contínua, em vez de posts soltos.' },
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
    stat: { value: 'Selo', label: 'identidade pensada para transmitir autoridade' },
    text: 'No mercado de wellness, o selo precisa vender confiança primeiro. Da narrativa à paleta, cada decisão trabalha para parecer sólida e acolhedora.',
    detail: {
      lead: 'Uma identidade construída para um selo de certificação no mercado de wellness, em torno do que a marca precisa vender primeiro: confiança.',
      services: ['Branding', 'Identidade visual', 'Narrativa', 'Direção criativa'],
      sections: [
        { kicker: 'O ponto de partida', title: 'Um selo que precisa ser levado a sério', text: 'Quem certifica precisa parecer certo antes de dizer qualquer coisa. O ponto de partida foi decidir como transmitir autoridade sem frieza.' },
        { kicker: 'A narrativa', title: 'Confiança como primeira promessa', text: 'Trabalhamos narrativa e visual em torno de uma só ideia. Tom de voz, símbolo e discurso se apoiam para dar a sensação de algo sólido e acolhedor.' },
        { kicker: 'Do selo à paleta', title: 'Terra, oliva e laranja', text: 'Um símbolo que funciona como selo e uma paleta quente e firme. Tudo pensado para transmitir autoridade, do carimbo ao perfil nas redes.' },
      ],
      result: { big: 'Selo', text: 'uma marca que se apresenta com autoridade e calma, do símbolo à paleta.' },
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
    stat: { value: 'Grid', label: 'motion, reels e design em um só ritmo' },
    text: 'Produção contínua de conteúdo para uma marca de moda, unindo o acervo da marca e novas camadas de criação sem diluir a assinatura visual.',
    detail: {
      lead: 'Estratégia e produção de conteúdo para uma marca de moda, sempre a serviço da sua identidade e da percepção que ela constrói.',
      services: ['Estratégia', 'Design gráfico', 'Motion', 'Reels', 'Legendas', 'Organização do grid'],
      sections: [
        { kicker: 'O ponto de partida', title: 'Uma marca de moda com assinatura própria', text: 'A Cinco já tinha um jeito de aparecer, da letra manuscrita ao tom das fotos. O trabalho era manter isso vivo no dia a dia, sem repetir fórmulas.' },
        { kicker: 'O que produzimos', title: 'Design, motion, reels e legenda', text: 'Do design gráfico aos reels, das legendas à organização do grid. Cada peça é pensada na sequência em que será vista.' },
        { kicker: 'O método', title: 'Acervo da marca e IA, sob a mesma régua', text: 'Combinamos materiais de IA com o acervo da própria marca para gerar awareness sem perder a identidade. A curadoria é o que mantém tudo com a mesma cara.' },
      ],
      result: { big: 'Grid', text: 'awareness constante, sem diluir a identidade da marca.' },
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
    tag: 'Branding e direção criativa',
    colors: ['#1a1f9c', '#dfe6f7'],
    headline: ['Um estúdio', 'todo em azul.'],
    sub: 'Campanha, cenário e acervo.',
    cta: 'Ver case',
    stat: { value: 'O.U.I', label: 'campanha de fragrância e acervo de cenário' },
    text: 'Um estúdio de objetos e cenários com identidade em azul cobalto. Da campanha de fragrância ao acervo catalogado, tudo na mesma linguagem.',
    detail: {
      lead: 'Um estúdio de objetos e cenários que precisava de uma identidade tão marcante quanto o seu acervo. Criamos peças em azul cobalto, com tipografia grande e imagens tratadas em duotone.',
      services: ['Branding', 'Direção criativa', 'Design', 'Campanha'],
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
        { kicker: 'O nome', title: 'Uma palavra em letras grossas, sem enfeite', text: 'O logotipo preto sobre a embalagem branca é tudo o que a marca precisa para ser lida de longe.' },
        { kicker: 'A embalagem', title: 'Uma bolsa simples, pensada para a mão', text: 'Formato prático, furo para pendurar e informação mínima. A embalagem faz o trabalho de vitrine.' },
        { kicker: 'O lançamento', title: 'Repetição que vira padrão', text: 'No ensaio, a embalagem se multiplica sobre um fundo azul-claro. A repetição transforma o produto em desenho e o nome em padrão.' },
      ],
      result: { big: 'Velle', text: 'uma marca que se reconhece pela embalagem e pelo nome, do lançamento ao ensaio.' },
    },
  },
];

// Photos taken from the Verso deck, to see how the real thing will look (an experiment: they can
// repeat and be swapped freely). `hero` feeds the carousel card, the case card and the first screen
// of the case page; `focus` is where, vertically, a wide crop of a tall photo should centre.
const PHOTO_FOCUS = { 'all-pendre': 0.5, cantao: 0.12, sens8: 0.5, cinco: 0.5, 'oficina-ceramica': 0.4, 'estudio-ilha': 0.5, velle: 0.5 };
const PHOTO_RATIO = { sens8: 1 };   // width / height of a case's section pictures, when they are not the usual 4:5
PROJECTS.forEach((p) => {
  if (PHOTO_RATIO[p.slug]) p.imageRatio = PHOTO_RATIO[p.slug];
  p.images = { hero: `assets/cases/${p.slug}-hero.jpg`, focus: PHOTO_FOCUS[p.slug] };
  p.detail.sections.forEach((s, k) => { s.image = `assets/cases/${p.slug}-s${k + 1}.jpg`; });
});
