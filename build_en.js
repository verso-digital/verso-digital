// Generates en/index.html from index.html: English copy, assets one folder up, switcher flipped.
// Run with: node build_en.js (after changing index.html)
const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
const R = (a, b) => { if (!h.includes(a)) throw new Error('missing: ' + a.slice(0, 60)); h = h.split(a).join(b); };

// paths one folder up
h = h.replace(/(href|src)="(?!https?:|#|mailto:|\.\.\/|en\/)([^"]+)"/g, '$1="../$2"');
// document
R('<html lang="pt-BR"', '<html lang="en"');
R('Verso Digital — Estratégia, marca e presença digital', 'Verso Digital — Strategy, brand and digital presence');
R('A Verso é uma agência de estratégia, branding e presença digital para marcas que querem ser lembradas.', 'Verso is a strategy, branding and digital presence agency for brands that want to be remembered.');
// switcher
h = h.split('<a class="lang" href="en/" hreflang="en" lang="en" aria-label="Read this site in English"><b>PT</b><i></i><span>EN</span></a>')
  .join('<a class="lang" href="../" hreflang="pt-BR" lang="pt-BR" aria-label="Ler este site em português"><span>PT</span><i></i><b>EN</b></a>');
// nav
R('aria-label="Verso Digital — início"', 'aria-label="Verso Digital — home"');
R('aria-label="Principal"', 'aria-label="Main"');
R('>Sobre</a>', '>About</a>');
R('>Contato</a>', '>Contact</a>');
R('Ol%C3%A1!%20Vim%20pelo%20site%20da%20Verso%20Digital%20e%20gostaria%20de%20conversar%20sobre%20a%20minha%20marca.', 'Hi!%20I%20came%20from%20the%20Verso%20Digital%20website%20and%20would%20like%20to%20talk%20about%20my%20brand.');
R('aria-label="Abrir menu"', 'aria-label="Open menu"');
R('aria-label="Cases selecionados"', 'aria-label="Selected cases"');
R('Arraste ou use ← →', 'Drag or use ← →');
R('<span id="cursorLabel">Arraste</span>', '<span id="cursorLabel">Drag</span>');
R('aria-label="Fechar case"', 'aria-label="Close case"');
// intro
R('Verso Digital · Estratégia, marca e presença', 'Verso Digital · Strategy, brand and presence');
R('Somos a Verso. Primeiro decidimos o que dizer', 'We are Verso. First we decide what to say');
R(', depois como parecer', ', then how to look');
R(' e, por fim, como estar presente todos os dias', ' and, finally, how to be present every day');
R('. É um trabalho que acontece em ordem e que o público só enxerga no final, quando tudo parece óbvio.', '. It is work that happens in order and that the public only sees at the end, when everything looks obvious.');
R('Sobre este site', 'About this site');
R('Nossa identidade é forte, mas o site é discreto de propósito. Tons neutros, tipografia calma e muito respiro: aqui o protagonista é o trabalho dos nossos clientes. A gente só arma o palco.', 'Our identity is strong, but the site is discreet on purpose. Neutral tones, calm typography and plenty of room to breathe: here the protagonist is our clients’ work. We just set the stage.');
R('Histórias de marcas que ganharam presença, cada uma do seu jeito.', 'Stories of brands that gained presence, each in its own way.');
// team
R('Quem está por trás', 'Who is behind it');
R('Duas fundadoras, uma só régua: clareza antes de ruído.', 'Two founders, one ruler: clarity before noise.');
R('Co-founder · Estratégia', 'Co-founder · Strategy');
R('Co-founder · Direção criativa', 'Co-founder · Creative direction');
R('Veio do marketing digital de marcas como Schutz, Bloomberg e Genial Investimentos, onde cuidou de eventos, conteúdo, seeding e monitoramento de campanhas. Fundou a Verso para dar às marcas uma presença digital que só elas poderiam ter.', 'She comes from the digital marketing of brands such as Schutz, Bloomberg and Genial Investimentos, where she handled events, content, seeding and campaign monitoring. She founded Verso to give brands a digital presence that only they could have.');
R('Publicitária com pós em direção de arte, passou por agências e startups como Iguatemi, Naked Nuts e NIINI. Cuida da visão criativa: traduz o que cada marca é em campanhas e identidades que fazem sentido para ela, e só para ela.', 'An advertising professional with a postgraduate degree in art direction, she has worked at agencies and startups such as Iguatemi, Naked Nuts and NIINI. She leads the creative vision: translating what each brand is into campaigns and identities that make sense for it, and only for it.');
// services
R('O que fazemos', 'What we do');
R('Três frentes que se encaixam. Dá para começar por qualquer uma.', 'Three fronts that fit together. You can start with any of them.');
R('>Estratégia<', '>Strategy<');
R('Onde a marca decide o que dizer.', 'Where the brand decides what to say.');
R('Posicionamento, narrativa e plano de crescimento, para que cada decisão de comunicação tenha um motivo.', 'Positioning, narrative and a growth plan, so every communication decision has a reason.');
R('<li>Posicionamento de marca</li><li>Estratégia de comunicação</li><li>Planejamento de conteúdo</li><li>Consultoria estratégica</li><li>Lançamentos</li>', '<li>Brand positioning</li><li>Communication strategy</li><li>Content planning</li><li>Strategic consulting</li><li>Launches</li>');
R('Branding &amp; Direção criativa', 'Branding &amp; Creative direction');
R('Onde a marca decide como parecer.', 'Where the brand decides how to look.');
R('Identidade, universo visual e voz, com a mesma assinatura em cada ponto de contato, do selo à embalagem.', 'Identity, visual universe and voice, with the same signature at every touchpoint, from the seal to the packaging.');
R('<li>Branding</li><li>Identidade visual</li><li>Naming</li><li>Tom de voz</li><li>Direção criativa</li><li>Direção de campanhas</li><li>Embalagens</li><li>Direção de conteúdo</li>', '<li>Branding</li><li>Visual identity</li><li>Naming</li><li>Tone of voice</li><li>Creative direction</li><li>Campaign direction</li><li>Packaging</li><li>Content direction</li>');
R('Execução &amp; Gestão', 'Execution &amp; Management');
R('Onde a marca aparece todos os dias.', 'Where the brand shows up every day.');
R('A rotina que mantém a marca viva: planejamos, produzimos, publicamos e medimos, sem deixar a identidade escapar.', 'The routine that keeps the brand alive: we plan, produce, publish and measure, without letting the identity slip.');
R('<li>Social media</li><li>Planejamento editorial</li><li>Produção de conteúdo</li><li>Design</li><li>Motion design</li><li>Foto e vídeo</li><li>Gestão de comunidade</li><li>Tráfego pago</li><li>Relatórios e otimização</li><li>Produção executiva</li>', '<li>Social media</li><li>Editorial planning</li><li>Content production</li><li>Design</li><li>Motion design</li><li>Photo and video</li><li>Community management</li><li>Paid traffic</li><li>Reporting and optimisation</li><li>Executive production</li>');
R('aria-label="Marcas com quem já trabalhamos"', 'aria-label="Brands we have worked with"');
R('Marcas com quem já trabalhamos', 'Brands we have worked with');
// footer
R('Vamos conversar sobre a sua marca?', 'Shall we talk about your brand?');
R('<span>Seu nome</span>', '<span>Your name</span>');
R('<span>E-mail</span>', '<span>Email</span>');
R('<span>Conte um pouco sobre a marca</span>', '<span>Tell us a little about the brand</span>');
R('Enviar mensagem', 'Send message');
R('Não conseguimos enviar agora. Tente de novo ou escreva direto para o e-mail ao lado.', 'We couldn’t send it right now. Try again, or write straight to the e-mail address alongside.');
R('<p class="form__eyebrow">Mensagem enviada</p>', '<p class="form__eyebrow">Message sent</p>');
R('<span data-thanks="Obrigado">Obrigado.</span>', '<span data-thanks="Thank you">Thank you.</span>');
R('Ela já chegou para a gente. Respondemos no e-mail que você deixou.', 'It has reached us. We’ll reply to the e-mail address you left.');
R('>Enviar outra mensagem</button>', '>Send another message</button>');
R('Ou fale direto', 'Or talk directly');
R('Voltar ao topo ↑', 'Back to top ↑');
R('eyebrow--light">Contato</p>', 'eyebrow--light">Contact</p>');
// scripts: projects first, then the English layer
R('<script src="../projects.js"></script>', '<script src="../projects.js"></script>\n  <script src="../en.js"></script>');
fs.mkdirSync('en', { recursive: true });
fs.writeFileSync('en/index.html', h);
console.log('en/index.html', h.length);
