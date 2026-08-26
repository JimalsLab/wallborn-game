'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'fr';
const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1x0EKn-56KEzbmFkhcKEi1tWkKWGmW2P2';

const copy = {
  en: {
    nav: ['The game', 'The rivals', 'Screenshots'],
    status: 'ALPHA · V4.5 · WINDOWS',
    eyebrow: 'A strategy roguelike of walls, wills & divine mischief',
    title: ['Outrun the rules.', 'Build the impossible.'],
    intro: 'The tabletop corridor game you love — twisted into a ruthless, run-based duel where walls become weapons, shortcuts become miracles, and every opponent rewrites the board.',
    download: 'Download the free alpha',
    downloadMeta: 'Windows · 155 MB · No installer',
    scroll: 'Descend into the labyrinth',
    gameKicker: 'A familiar duel. A completely broken rulebook.',
    gameTitle: 'Quoridor — if the gods got bored.',
    gameOneLiner: 'A turn-based strategy game: each turn, move your pawn or play one Action from your hand.',
    gameBody: 'Reach the far side before your rival. Place walls to carve the path. That part is simple. Then Wallborn hands you a deck of impossible tools and asks: what if every sacred rule could bend?',
    gamePoints: [
      ['Run the walls', 'Vault, swing, grapple and sprint along the very barriers meant to stop you.'],
      ['Weaponize the maze', 'Build long, ghost, spiky and armored walls — then rotate, salvage or demolish them.'],
      ['Raise a fortress', 'Shape the battlefield turn by turn until your route is a shortcut and theirs is a prison.'],
    ],
    stats: [
      ['65', 'Items now', '36 Actions + 29 Relics · heading to 100'],
      ['6', 'Route events', 'Every choice reshapes the run · heading to 50'],
      ['3', 'Acts to conquer', 'Combat · Event · Prayer · Boss'],
      ['∞', 'Ways through', 'Seeded routes and rule-bending builds'],
    ],
    enemiesKicker: 'The board fights back',
    enemiesTitle: 'Increasingly wild opponents.',
    enemiesBody: 'A cautious mason is only the beginning. Every adversary arrives with a disclosed identity, a distinct loadout and one more reason to abandon your perfect plan.',
    enemies: ['The Rampart Keeper', 'Wallrunner Behemoth', 'Tar Baron', 'Rimblade Ice Colossus'],
    galleryKicker: 'From the current alpha',
    galleryTitle: 'Every match becomes its own monument.',
    galleryHint: 'Select a screenshot to inspect the board',
    galleryAlts: ['Full Wallborn combat interface', 'A dense Wallborn board with tar, walls and pawns', 'A Wallborn board transformed into a fortress'],
    alphaKicker: 'The walls are still rising',
    alphaTitle: 'Play the V4.5 alpha.',
    alphaBody: 'Wallborn is in active development in Godot 4.7. The full three-act structure and core systems are playable now; balance, AI and content continue to grow with every run.',
    alphaNotes: ['Windows build', 'Free alpha demo', 'Keyboard & mouse', 'Easy · Medium · Hard'],
    alphaCta: 'Break into the demo',
    faqTitle: 'Before you enter',
    faq: [
      ['What is Wallborn?', 'A single-player strategy roguelike inspired by the tabletop game Quoridor, built around walls, movement Actions, Relics, Faith and escalating AI duels.'],
      ['Is this the finished game?', 'Not yet. V4.5 is an alpha: playable, ambitious and actively changing. Expect rough edges alongside fully working runs.'],
      ['How do I start?', 'Download the Windows build, open WallBorn.exe and begin a New Run. No installer is required.'],
    ],
    footerLine: 'Built by a Quoridor fan who wanted to break every rule.',
    inspired: 'Independently made and inspired by Quoridor. Not affiliated with its creators or publishers.',
  },
  fr: {
    nav: ['Le jeu', 'Les rivaux', 'Captures'],
    status: 'ALPHA · V4.5 · WINDOWS',
    eyebrow: 'Un roguelike stratégique de murs, de volonté et de folie divine',
    title: ['Contournez les règles.', 'Bâtissez l’impossible.'],
    intro: 'Le jeu de couloir sur plateau que vous aimez — transformé en duel impitoyable où les murs deviennent des armes, les raccourcis des miracles et chaque adversaire réécrit le terrain.',
    download: 'Télécharger l’alpha gratuite',
    downloadMeta: 'Windows · 155 Mo · Sans installation',
    scroll: 'Descendre dans le labyrinthe',
    gameKicker: 'Un duel familier. Des règles complètement brisées.',
    gameTitle: 'Quoridor — si les dieux s’ennuyaient.',
    gameOneLiner: 'Un jeu de stratégie au tour par tour : à chaque tour, déplacez votre pion ou jouez une Action de votre main.',
    gameBody: 'Atteignez l’autre rive avant votre rival. Posez des murs pour tracer le chemin. Jusque-là, tout va bien. Puis Wallborn vous donne un deck d’outils impossibles et pose une question : et si chaque règle sacrée pouvait plier ?',
    gamePoints: [
      ['Courez sur les murs', 'Sautez, pivotez, agrippez-vous et sprintez le long des barrières censées vous arrêter.'],
      ['Armez le labyrinthe', 'Bâtissez des murs longs, fantômes, piquants et blindés — puis tournez, recyclez ou démolissez-les.'],
      ['Élevez une forteresse', 'Façonnez le terrain jusqu’à ce que votre route soit un raccourci et la leur une prison.'],
    ],
    stats: [
      ['65', 'Objets actuels', '36 Actions + 29 Reliques · objectif 100'],
      ['6', 'Événements de route', 'Chaque choix transforme la partie · objectif 50'],
      ['3', 'Actes à conquérir', 'Combat · Événement · Prière · Boss'],
      ['∞', 'Chemins possibles', 'Routes seedées et builds hors-la-loi'],
    ],
    enemiesKicker: 'Le plateau riposte',
    enemiesTitle: 'Des adversaires toujours plus fous.',
    enemiesBody: 'Un maçon prudent n’est que le commencement. Chaque rival arrive avec une identité claire, son propre arsenal et une nouvelle raison d’abandonner votre plan parfait.',
    enemies: ['Le Gardien du Rempart', 'Le Colosse Coureur de Murs', 'Le Baron du Goudron', 'Le Colosse de Glace'],
    galleryKicker: 'Captures de l’alpha actuelle',
    galleryTitle: 'Chaque partie devient son propre monument.',
    galleryHint: 'Sélectionnez une capture pour inspecter le terrain',
    galleryAlts: ['Interface complète d’un combat Wallborn', 'Terrain Wallborn dense avec goudron, murs et pions', 'Terrain Wallborn transformé en forteresse'],
    alphaKicker: 'Les murs s’élèvent encore',
    alphaTitle: 'Jouez à l’alpha V4.5.',
    alphaBody: 'Wallborn est en développement actif avec Godot 4.7. La structure complète en trois actes et les systèmes principaux sont déjà jouables; l’équilibrage, l’IA et le contenu grandissent à chaque partie.',
    alphaNotes: ['Version Windows', 'Démo alpha gratuite', 'Clavier & souris', 'Facile · Moyen · Difficile'],
    alphaCta: 'Entrer dans la démo',
    faqTitle: 'Avant d’entrer',
    faq: [
      ['Qu’est-ce que Wallborn ?', 'Un roguelike stratégique solo inspiré du jeu de plateau Quoridor, construit autour des murs, des Actions de mouvement, des Reliques, de la Foi et de duels contre des IA toujours plus retorses.'],
      ['Est-ce le jeu final ?', 'Pas encore. La V4.5 est une alpha : jouable, ambitieuse et en évolution active. Attendez-vous à quelques aspérités au milieu de parties complètes.'],
      ['Comment commencer ?', 'Téléchargez la version Windows, ouvrez WallBorn.exe et lancez une Nouvelle partie. Aucun installateur n’est nécessaire.'],
    ],
    footerLine: 'Créé par un fan de Quoridor qui voulait briser toutes les règles.',
    inspired: 'Création indépendante inspirée de Quoridor. Sans affiliation avec ses créateurs ou éditeurs.',
  },
};

const screenshots = ['/wallborn-combat.png', '/wallborn-board-1.png', '/wallborn-board-2.png'];

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeShot, setActiveShot] = useState<number | null>(null);
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActiveShot(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <main>
      <section className="hero" id="top">
        <img className="hero-art" src="/wallborn-hero.png" alt="" />
        <div className="hero-shade" />
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Wallborn home"><span>WALL</span>BORN</a>
          <nav aria-label="Primary navigation">
            <a href="#game">{t.nav[0]}</a><a href="#rivals">{t.nav[1]}</a><a href="#gallery">{t.nav[2]}</a>
          </nav>
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label="Switch language">
            <span className={lang === 'en' ? 'active' : ''}>EN</span><i /><span className={lang === 'fr' ? 'active' : ''}>FR</span>
          </button>
        </header>
        <div className="hero-content">
          <p className="status"><span />{t.status}</p><p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="intro">{t.intro}</p>
          <div className="hero-actions"><DownloadButton label={t.download} meta={t.downloadMeta} /><div className="godot">BUILT WITH<br /><b>GODOT 4.7</b></div></div>
        </div>
        <a className="scroll" href="#game"><span>{t.scroll}</span><b>⌄</b></a><div className="hero-runes" aria-hidden="true">◆　◇　◆　◇　◆</div>
      </section>

      <section className="game-section" id="game">
        <div className="board-window reveal-frame"><img src="/wallborn-board-2.png" alt={t.galleryAlts[2]} /><div className="window-label">TACTICAL VIEW · SEED 045</div></div>
        <div className="game-copy">
          <Kicker>{t.gameKicker}</Kicker><h2>{t.gameTitle}</h2><p className="game-one-liner">{t.gameOneLiner}</p><p className="large-copy">{t.gameBody}</p>
          <div className="game-points">{t.gamePoints.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>
      <section className="stats-section" aria-label="Game content statistics">
        {t.stats.map(([value, label, meta]) => <article key={label}><strong>{value}</strong><div><b>{label}</b><span>{meta}</span></div></article>)}
      </section>

      <section className="enemies-section" id="rivals">
        <div className="enemy-copy">
          <Kicker>{t.enemiesKicker}</Kicker><h2>{t.enemiesTitle}</h2><p className="large-copy">{t.enemiesBody}</p>
          <div className="enemy-list">{t.enemies.map((enemy, index) => <div key={enemy}><span>{String(index + 1).padStart(2, '0')}</span>{enemy}<b>↗</b></div>)}</div>
        </div>
        <div className="enemy-visual"><img src="/wallborn-combat.png" alt={t.galleryAlts[0]} /><div className="enemy-card"><small>ACT II ADVERSARY</small><strong>THE RAMPART<br />KEEPER</strong><span>RESERVE MASONRY</span></div></div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading"><div><Kicker>{t.galleryKicker}</Kicker><h2>{t.galleryTitle}</h2></div><p>{t.galleryHint}</p></div>
        <div className="gallery">{screenshots.map((src, index) => <button key={src} className={'shot shot-' + (index + 1)} onClick={() => setActiveShot(index)}><img src={src} alt={t.galleryAlts[index]} /><span>0{index + 1}<b>EXPAND ↗</b></span></button>)}</div>
      </section>

      <section className="alpha-section">
        <div className="alpha-art"><img src="/wallborn-hero.png" alt="" /></div>
        <div className="alpha-copy"><Kicker>{t.alphaKicker}</Kicker><h2>{t.alphaTitle}</h2><p className="large-copy">{t.alphaBody}</p><div className="alpha-notes">{t.alphaNotes.map((note) => <span key={note}>✓ {note}</span>)}</div><DownloadButton label={t.alphaCta} meta={t.downloadMeta} /></div>
      </section>

      <section className="faq-section">
        <h2>{t.faqTitle}</h2>
        <div>{t.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#top"><span>WALL</span>BORN</a><p>{t.footerLine}</p></div>
        <a className="footer-download" href={DOWNLOAD_URL}>↓ {t.download}</a>
        <div className="footer-bottom"><span>ALPHA V4.5 · GODOT 4.7</span><span>{t.inspired}</span></div>
      </footer>

      {activeShot !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.galleryAlts[activeShot]} onClick={() => setActiveShot(null)}><button aria-label="Close">×</button><img src={screenshots[activeShot]} alt={t.galleryAlts[activeShot]} /></div>}
    </main>
  );
}

function Kicker({ children }: { children: React.ReactNode }) { return <p className="kicker"><span />{children}</p>; }
function DownloadButton({ label, meta }: { label: string; meta: string }) {
  return <a className="download" href={DOWNLOAD_URL}><span className="download-icon">↓</span><span>{label}<small>{meta}</small></span></a>;
}
