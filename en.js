// English layer. Loaded only by /en/index.html, right after projects.js: it rewrites every visible
// string of PROJECTS (matched by slug) and points the pictures one folder up.
window.I18N = { base: '../', services: 'Services', front: 'Focus', talk: 'Talk to Verso', caseLabel: 'Case', next: 'Next case', viewCase: 'View case', drag: 'Drag', view: 'View', closeMenu: 'Close menu', openMenu: 'Open menu' };

(function () {
  const S = (kicker, title, text) => ({ kicker, title, text });
  const EN = {
    'all-pendre': {
      tag: 'Strategy and social media',
      short: ['751% more', 'followers.'], headline: ['751% more', 'followers', 'in one year.'], sub: '100% organic growth.',
      stat: ['+751%', 'followers in 12 months, no paid media'],
      text: 'We took over the whole profile, from positioning to the grid. A home and table brand that is now discovered by people who had never heard of it.',
      lead: 'A home and table brand with a lot to show and little digital presence. We took over the entire profile to turn a showcase into a place of discovery.',
      services: ['Strategy', 'Creative direction', 'Content', 'Design', 'Community management'],
      sections: [
        S('The starting point', 'A beautiful brand that still needed to be found', 'Allpendre had repertoire, objects and a point of view. It lacked a profile that tied it all into one continuous conversation instead of loose posts.'),
        S('What we took on', '100% of the profile’s social media', 'Strategy, creative direction, content production, design and community management in the same hands. One team deciding what to say, how to show it and how to reply.'),
        S('The language', 'A grid you recognise from afar', 'Objects, colours and table scenes assembled with cut-outs and words over the photos. The profile found its own way of showing up, even before the name is in sight.'),
      ],
      result: ['+751%', 'follower growth in one year, entirely organic.'],
    },
    cantao: {
      tag: 'Social media',
      short: ['Retail that', 'speaks B2B.'], headline: ['Retail that talks', 'to those who sell.'], sub: 'Social media and B2B connection.',
      stat: ['B2B', 'a direct conversation with partner retailers'],
      text: 'A retail profile that had to talk to partners without losing Cantão’s voice. Strategy, content, design and community in one flow.',
      lead: 'A retail profile that needed to build a connection between the brand and its B2B partners, always true to Cantão’s identity.',
      services: ['Content strategy', 'Creative direction', 'Design', 'Community management'],
      sections: [
        S('The challenge', 'Talking to the retailer without sounding like a catalogue', 'The audience was not the end consumer but the people who resell. The content had to be useful to that partner and, at the same time, recognisable as Cantão.'),
        S('What we did', 'Full management of the profile', 'From strategy and creative direction of the content to design and community. Every piece starts from a question the retailer actually asks.'),
        S('The language', 'Direct questions, strong colour, product in sight', 'Red pieces and fashion photos with titles that talk, like a conversation across the counter. Denim and embroidery remain the protagonists.'),
      ],
      result: ['B2B', 'a channel that talks straight to partners and keeps Cantão’s identity in every post.'],
    },
    sens8: {
      tag: 'Branding',
      short: ['Trust', 'comes first.'], headline: ['Trust before', 'any sale.'], sub: 'Branding for a wellness seal.',
      stat: ['Seal', 'an identity designed to convey authority'],
      text: 'In wellness, a seal has to sell trust first. From narrative to palette, every decision works to look solid and welcoming.',
      lead: 'An identity built for a certification seal in the wellness market, around what the brand needs to sell first: trust.',
      services: ['Branding', 'Visual identity', 'Narrative', 'Creative direction'],
      sections: [
        S('The logotype', 'Thin, tall letters with a drop-shaped S', 'The name in thin capitals ends in an S shaped like a drop. There are versions in black, orange and over coloured backgrounds.'),
        S('The seal', 'A circle with the S at its centre', 'The certification seal carries the S in the middle and the name around it, in light and dark versions.'),
        S('The palette', 'Moss green, olive, terracotta and cream', 'The main palette brings together deep green, olive, orange, terracotta and a warm white. The secondary adds brown and sand.'),
        S('The pattern', 'The S, repeated', 'The icon becomes a repeated pattern in cream, green and orange, for backgrounds, packaging and materials.'),
        S('The objects', 'Cups, a bottle and a hoodie with the icon', 'The S in orange and green appears on paper cups, a bottle and clothing, in the palette’s tones.'),
        S('Everyday', 'A tote bag in the brand’s tone', 'The cloth bag carries the logotype tone on tone and takes the brand beyond the events.'),
        S('Digital', 'An Instagram profile with circular highlights', 'The profile uses the icon in coloured circles for the highlights and wellness photos in the posts.'),
        S('The website', 'A face photo and a short headline', 'The website’s home page pairs a warm-toned photo with a direct sentence and a clear button.'),
      ],
      result: ['Seal', 'a brand that presents itself with authority and calm, from the symbol to the palette.'],
    },
    cinco: {
      tag: 'Execution and management',
      short: ['Fashion with', 'presence.'], headline: ['Fashion with', 'daily presence.'], sub: 'Content that keeps the identity intact.',
      stat: ['Grid', 'motion, reels and design in a single rhythm'],
      text: 'Continuous content production for a fashion brand, joining the brand’s archive with new layers of creation without diluting its visual signature.',
      lead: 'Content strategy and production for a fashion brand, always in service of its identity and the perception it builds.',
      services: ['Strategy', 'Graphic design', 'Motion', 'Reels', 'Captions', 'Grid organisation'],
      sections: [
        S('The starting point', 'A fashion brand with its own signature', 'Cinco already had its way of showing up, from the handwritten lettering to the tone of the photos. The job was to keep that alive day to day, without repeating formulas.'),
        S('What we produce', 'Design, motion, reels and captions', 'From graphic design to reels, from captions to grid organisation. Every piece is thought out in the sequence in which it will be seen.'),
        S('The method', 'The brand’s archive and AI, under the same ruler', 'We combine AI materials with the brand’s own archive to build awareness without losing identity. Curation is what keeps everything looking like one brand.'),
      ],
      result: ['Grid', 'constant awareness, without diluting the brand’s identity.'],
    },
    'oficina-ceramica': {
      tag: 'Social media',
      short: ['Stories', 'in clay.'], headline: ['Stories that', 'start in clay.'], sub: 'Content that invites you into the studio.',
      stat: ['Clay', 'posts that tell the story of those who make ceramics'],
      text: 'A studio profile about artists and fresh starts. Each post tells a story and ends with an invitation: come make ceramics with us.',
      lead: 'A ceramics studio with plenty of stories to tell. We created artist posts that turn biographies and pieces into content inviting people to begin their own story with clay.',
      services: ['Social media', 'Creative direction', 'Design', 'Content'],
      sections: [
        S('The idea', 'Telling the lives of those who work with clay', 'Instead of showing only pieces, we start from people. Each post introduces a ceramicist, her path and what draws her to the craft.'),
        S('The invitation', 'Every story ends at an open door', 'Short texts, in big letters over the image, always close with a call: the studio has a place for whoever wants to begin.'),
        S('The look', 'Pieces, hands and earth tones', 'Black-and-white photos, warm tones and objects in focus. A calm language that matches the studio’s pace.'),
      ],
      result: ['Clay', 'a profile that turns biographies and pieces into an invitation to make ceramics.'],
    },
    'estudio-ilha': {
      tag: 'Social media',
      short: ['An island', 'in blue.'], headline: ['A studio', 'all in blue.'], sub: 'Campaign, set and archive.',
      stat: ['O.U.I', 'a fragrance campaign and a set-design archive'],
      text: 'A studio of objects and sets with a cobalt blue identity. From the fragrance campaign to the catalogued archive, all in the same language.',
      lead: 'A studio of objects and sets that needed an identity as striking as its archive. We created pieces in cobalt blue, with big typography and duotone images.',
      services: ['Content strategy', 'Creative direction', 'Design', 'Community management'],
      sections: [
        S('The identity', 'One blue, applied boldly', 'The name in huge letters, cobalt blue and a simple symbol. The brand is recognised before it is even read.'),
        S('The archive', 'Set objects, catalogued', 'Armchairs, mirrors, lamps and record players organised like an illustrated inventory: each object with its name and origin.'),
        S('The space', 'Scenes that look like archive images', 'Photos treated in blue duotone and framed compositions show the studio as a place, not just a list of objects.'),
      ],
      result: ['Blue', 'an identity that unites campaign, archive and set in a single language.'],
    },
    velle: {
      tag: 'Branding and creative direction',
      short: ['Small,', 'white, Velle.'], headline: ['A brand that', 'fits in your hand.'], sub: 'Launch identity and packaging.',
      stat: ['Velle', 'identity and packaging for the launch'],
      text: 'A new brand, simple packaging and a launch photo that repeats the name until it becomes a pattern. Identity and creative direction from start to shoot.',
      lead: 'A new brand called for a direct identity and packaging that explains itself. We designed the name, the packaging and the creative direction of the launch shoot.',
      services: ['Branding', 'Packaging', 'Creative direction', 'Launch shoot'],
      sections: [
        S('The name', 'One word in heavy letters, no frills', 'The black logotype on the white packaging is all the brand needs to be read from afar.'),
        S('Packaging in scene', 'The bag with the Velle label on shoulders and in hands', 'On launch day, the packaging appears alongside people: hanging, held, passed from hand to hand.'),
        S('The counter', 'White bags among brushes and palettes', 'On the makeup table, packaging and products share the scene. The brand shows up where it will be used.'),
        S('The mirror', 'A simple gesture, the product at hand', 'Bathroom-mirror portraits show the brand’s routine, unposed: makeup, natural light and what surrounds it.'),
        S('Behind the scenes', 'Launch day, from the inside', 'The team around the model shows the pace of the day: people working, laughter and the brand always close by.'),
      ],
      result: ['Velle', 'a brand recognised by its packaging and its name, from launch to shoot.'],
    },
    astre: {
      tag: 'Branding and visual identity',
      short: ['Fashion', 'identity.'], headline: ['A fashion brand', 'with an editorial eye.'], sub: 'Identity, packaging and image language.',
      stat: ['Astre', 'visual identity, packaging and image language'],
      text: 'A discreet name, fashion photos in natural light and a system that runs from the logo to the packaging. The brand appears small and lets the image speak.',
      lead: 'A fashion brand needed an identity that followed the eye of its images. We created the visual name, the packaging and the post system, always with the brand in the background.',
      services: ['Branding', 'Visual identity', 'Packaging', 'Art direction'],
      sections: [
        S('The brand', 'A small name over big photos', 'The lowercase logotype appears discreetly in the corner of the image. You see the clothes, the gesture and the light first; the name comes after.'),
        S('The language', 'Fashion, objects and detail', 'Black-and-white portraits, pieces in real settings and objects such as a glass or an old telephone. Every photo feels like an editorial frame.'),
        S('The system', 'From logo to post, in the same tone', 'Logo, packaging, stationery, website and posts all stem from the same choices of colour, framing and silence.'),
        S('The packaging', 'A geometric bag in butter yellow', 'Cut-out handle, sharp folds and the name in black. One shape and one colour, recognised from afar.'),
        S('The object', 'With no model or set, the bag becomes sculpture', 'On a plain background, the corners and folds are on display, with the name centred on the front.'),
        S('The cloth', 'The same yellow, in fabric', 'The cloth version carries the same name and colour for everyday use, on the shoulder and in the hand.'),
      ],
      result: ['Astre', 'an identity that lets the image speak and carries the brand from the packaging to the feed.'],
    },
    'so-connected': {
      tag: 'Social media and strategy',
      short: ['Culture', 'in a network.'], headline: ['Culture that becomes', 'brand conversation.'], sub: 'Music, fashion and partnerships in carousels.',
      stat: ['1,216,545', 'organic views in one year'],
      text: 'Carousel posts from So.Connected’s own profile, in English, about partnerships and cultural movements. The artists and brands that appear are the subject of the profile.',
      lead: 'So.Connected works at the intersection of music, fashion and brands. We create carousel posts that explain partnerships, tell stories and present numbers, always in a conversational tone.',
      services: ['Social media', 'Content strategy', 'Carousel design', 'Copy'],
      sections: [
        S('Partnership', '30PRAUM and Kenner, as a story', 'A brand partnership explained in a few cards: who each side is, what they built together and what happens at Plantão Festival.'),
        S('Fashion and music', 'When the artist wears the argument', 'Editorial posts that show how clothes and sound tell the same story, with cut-out photos, notes and a question to open the conversation.'),
        S('BRESH', 'A global party arrives in Brazil', 'Strong colours, a mascot and big numbers to introduce BRESH to the Brazilian public: where it came from, how much it grew and why it matters now.'),
      ],
      result: ['1,216,545', 'organic views in a year, with original content that turns cultural movements into conversation.'],
    },
    botanico: {
      tag: 'Photography and content',
      short: ['Flavour', 'in focus.'], headline: ['Food that', 'makes you hungry.'], sub: 'A menu shoot for Bar Botânico.',
      stat: ['Flavour', 'a photo shoot of the menu'],
      text: 'A menu shoot with warm light, a wooden table and dishes made for sharing. The photos serve the feed, delivery and the dining room.',
      lead: 'A bar with its own kitchen called for photos that make the dish look like what it is: for sharing, warm and unhurried. The shoot covers boards, small plates and sides.',
      services: ['Photography', 'Content', 'Image retouching'],
      sections: [
        S('The table', 'A full board, wood and warm light', 'Cold cuts, breads and fruit arranged as they would be on the table: no excess styling, with colour and texture up front.'),
        S('The detail', 'Small plates that ask to be picked up', 'Baskets, sauces and close-up dishes show the crispness of the fry and the gloss of the sauce.'),
        S('The small plates', 'Golden fritters, herbs on top', 'On a light plate and side light, the fry takes centre stage and the whole dish fits in the frame.'),
        S('The drinks', 'Red, lime and ice', 'Drinks appear on the wooden table or against a light background, to finish the scene with colour.'),
        S('The space', 'The courtyard where it all happens', 'Plants, a light wall and a wooden table show the place, beyond the plate.'),
      ],
      result: ['Flavour', 'an image bank of the menu in a consistent light, for the feed, delivery and the dining room.'],
    },
    altare: {
      tag: 'Branding and visual identity',
      short: ['Leather, metal', 'and skin.'], headline: ['A brand in', 'leather, metal and skin.'], sub: 'Logotype, textures and Instagram highlights.',
      stat: ['Altare', 'a logotype in leather, metal, relief and skin'],
      text: 'A fashion collection with a loose-stroke logotype and a full stop, applied to burgundy leather, brushed metal, embossed paper, labels, a bag and the feed.',
      lead: 'Altare called for an identity with physical presence. We drew a handwritten logotype, with a flourish that cuts through the letters, and took it to materials you want to touch.',
      services: ['Branding', 'Visual identity', 'Brandbook', 'Art direction'],
      sections: [
        S('The logotype', 'A loose stroke, closed by a full stop', 'The letters cross in a single drawing, with a flourish that rises and a full stop. There is also a lowercase version, pinned to a brooch.'),
        S('On the skin', 'The brand is also a tattoo', 'The logotype appears tattooed on the neck and back, like a signature that does not wash off.'),
        S('The textures', 'Leather, metal and relief in one system', 'The same logotype in burgundy leather, brushed metal, black leather and sand-paper relief. Each texture becomes a background for posts and highlights.'),
        S('The bag', 'Brushed silver, black handles, big logotype', 'The bag carries the logotype in black over silver, so the brand travels the streets with whoever buys.'),
        S('The label', 'Light, stitched into the piece', 'A light-toned label, with the logotype and the founding date, attached to the garment.'),
        S('The tags', 'Light paper, held by a knot', 'Two tags with the logotype and the line “The art of collecting.” in serif type.'),
        S('The envelope', 'Burgundy outside, light card inside', 'The burgundy envelope carries the logotype in white on the back and holds a presentation card, for invitations and announcements.'),
        S('The feed', 'A showcase in black, burgundy and silver', 'On Instagram, the circular highlights and the posts in black, burgundy and silver form the brand’s showcase.'),
      ],
      result: ['Altare', 'an identity that leaves the paper and goes onto leather, metal and skin.'],
    },
  };

  window.PROJECTS.forEach((p) => {
    const t = EN[p.slug];
    if (!t) return;
    p.tag = t.tag; p.headline = t.headline; p.short = { headline: t.short }; p.sub = t.sub; p.cta = 'View case';
    p.stat = { value: t.stat[0], label: t.stat[1] };
    p.text = t.text;
    p.detail.lead = t.lead; p.detail.services = t.services;
    p.detail.sections = t.sections.map((s, i) => Object.assign({}, p.detail.sections[i] || {}, s));
    p.detail.result = { big: t.result[0], text: t.result[1] };
    const GT = { cantao: 'How to sell jeans, in seven posts', 'so-connected': 'The Latin music carousel', 'estudio-ilha': 'Posts from the Heineken campaign', 'oficina-ceramica': 'From clay to piece: process and result' };
    const up = (u) => (u ? '../' + u : u);
    p.images.card = up(p.images.card); p.images.hero = up(p.images.hero);
    p.images.heroPortrait = up(p.images.heroPortrait); p.images.heroLandscape = up(p.images.heroLandscape); p.images.fullPortrait = up(p.images.fullPortrait); p.images.fullLandscape = up(p.images.fullLandscape);
    p.detail.sections.forEach((s) => { s.image = up(s.image); });
    if (p.gallery) { p.gallery.title = GT[p.slug]; p.gallery.items = p.gallery.items.map(up); }
  });
})();
