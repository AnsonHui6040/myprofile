// Shared data + primitives for all 4 variations.

const PROFILE = {
  name: 'AnsonHui',
  handle: '@ansonhui6040',
  role: '攝影創作者 ／ 數位作品開發者',
  roleEn: 'Photographer · Developer',
  bio: '專注於把想法轉化成可展示、可操作的數位成果，包含網站、互動工具、簡報企劃與影像作品。',
  bioEn: 'I turn ideas into things you can see and touch — websites, interactive tools, presentations, and photographs.',
  location: 'Taiwan',
  years: '2021 — 2026',
};

const PROJECTS = [
  {
    name: 'ramen-style-finder',
    tag: 'Web · React',
    desc: '依口味、湯頭、配料找到最適合你的拉麵流派的互動工具。',
    descEn: 'Find your perfect ramen style by flavour, broth and toppings.',
    url: 'https://github.com/AnsonHui6040/ramen-style-finder',
    year: '2026',
    color: '#c94b2a',
  },
  {
    name: 'ramen-shop-finder',
    tag: 'Web · Map',
    desc: '拉麵店地圖與篩選器——讓找店變成一件愉快的事。',
    descEn: 'A filterable map of ramen shops — because hunting dinner should be fun.',
    url: 'https://github.com/AnsonHui6040/ramen-shop-finder',
    year: '2026',
    color: '#d89a3a',
  },


];

// Photo placeholders — labelled SVG stripes standing in for real shots.
// Each has a subject, dominant tone, and format hint so each variation
// can style them differently.
// Real photos from AnsonHui6040/myprofile · photo/
const PHOTOS = [
  { id: 'p1',  src: 'photo/p1.jpeg',  ratio: 1.50, orient: 'landscape', subject: 'Frame · 01' },
  { id: 'p2',  src: 'photo/p2.jpeg',  ratio: 1.50, orient: 'landscape', subject: 'Frame · 02' },
  { id: 'p3',  src: 'photo/p3.jpeg',  ratio: 1.48, orient: 'landscape', subject: 'Frame · 03' },
  { id: 'p4',  src: 'photo/p4.jpeg',  ratio: 1.50, orient: 'landscape', subject: 'Frame · 04' },
  { id: 'p5',  src: 'photo/p5.jpeg',  ratio: 1.50, orient: 'landscape', subject: 'Frame · 05' },
  { id: 'p6',  src: 'photo/p6.jpeg',  ratio: 0.67, orient: 'portrait',  subject: 'Frame · 06' },
  { id: 'p7',  src: 'photo/p7.jpeg',  ratio: 0.80, orient: 'portrait',  subject: 'Frame · 07' },
  { id: 'p8',  src: 'photo/p8.jpeg',  ratio: 1.50, orient: 'landscape', subject: 'Frame · 08' },
  { id: 'p9',  src: 'photo/p9.jpeg',  ratio: 1.33, orient: 'landscape', subject: 'Frame · 09' },
  { id: 'p10', src: 'photo/p10.jpeg', ratio: 1.33, orient: 'landscape', subject: 'Frame · 10' },
];

const CV = [
  { year: '2026 —', role: '個人作品與產品開發', org: 'Independent', note: '結合攝影與科技，投入個人作品與產品開發' },
  { year: '2025',   role: '發散與推廣', org: '攝影社社長', note: '推動攝影社品牌發展與影響力擴散' },
  { year: '2024',   role: '持續創作與組織經驗累積', org: '攝影社副社長', note: '累積社團經營與活動協作經驗' },
  { year: '2023',   role: '沉澱與突破', org: 'Personal projects', note: '精進影像後製能力，並獲攝影比賽金獎肯定' },
  { year: '2020',   role: '中學時期的起點', org: '攝影社社長', note: '開始累積創作與管理能力' },
];

const LINKS = [
  { label: 'GitHub',     url: 'https://github.com/ansonhui6040',                       handle: 'ansonhui6040' },
  { label: 'Instagram',  url: 'https://instagram.com/ansonhui6040',                    handle: '@ansonhui6040' },
  { label: 'Portfolio',  url: 'https://ansonhui6040.myportfolio.com/',                 handle: 'adobe' },
  { label: 'Linktree',   url: 'https://linktr.ee/ansonhui6040',                        handle: 'all links' },
  { label: 'LinkedIn',   url: 'https://www.linkedin.com/in/anson-hui-40328b301/',      handle: 'anson-hui' },
];

// Cross-page nav. id maps to filename. Order matches the home page.
const PAGES = [
  { id: 'home',        n: '00', label: 'Home',         href: 'index.html' },
  { id: 'photography', n: '01', label: 'Photography',  href: 'photography.html' },
  { id: 'projects',    n: '02', label: 'Projects',     href: 'projects.html' },
  { id: 'awards',      n: '03', label: 'Awards',       href: 'awards.html' },
];

// Awards / certificates — placeholder structure. User can swap copy/images.
const AWARDS = [
  {
    id: 'a1',
    title: '周年攝影大賽 — 金獎',
    org: '上‧文化',
    year: '2023',
    category: 'Photography',
    note: '金獎得獎作品。',
    color: '#e8a962',
    img: 'photo/award-moon.jpeg',
  },
  {
    id: 'a2',
    title: '周年攝影大賽 — 金獎',
    org: '上‧文化',
    year: '2023',
    category: 'Photography',
    note: '金獎得獎作品。',
    color: '#e8a962',
    img: 'photo/award-002.jpeg',
  },
  { id: 'a3', title: '—', org: '—', year: '—', category: 'TBD', note: '', color: '#555' },
  { id: 'a4', title: '—', org: '—', year: '—', category: 'TBD', note: '', color: '#555' },
  { id: 'a5', title: '—', org: '—', year: '—', category: 'TBD', note: '', color: '#555' },
  { id: 'a6', title: '—', org: '—', year: '—', category: 'TBD', note: '', color: '#555' },
];

// Shared dark/swiss design tokens — matches V5.
const T = {
  bg: '#0e0d0b',
  card: '#151310',
  cardAlt: '#1b1814',
  ink: '#ede4d0',
  inkSoft: 'rgba(237,228,208,0.78)',
  muted: 'rgba(237,228,208,0.55)',
  rule: 'rgba(237,228,208,0.14)',
  accent: '#e8a962',
  sans: 'var(--sans)',
  mono: 'var(--mono)',
  serif: 'var(--serif)',
};

// One brand and navigation system across every page.
function BrandLogo({ className = '', full = false }) {
  return <img className={`brand-logo ${className}`} src={`assets/brand/anson-logo${full ? '' : '-cropped'}.svg`} alt="Anson Photo HUI6040" width={full ? 1254 : 1025} height={full ? 1254 : 742} />;
}

function PageNav({ active }) {
  const [open, setOpen] = React.useState(false);
  const menuButton = React.useRef(null);
  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">跳至主要內容</a>
    <header className="site-nav">
      <a className="brand-home" href="index.html" aria-label="Anson Hui — 首頁"><BrandLogo /><span className="brand-name">ANSON HUI 6040<span>PHOTOGRAPHY & DEVELOPMENT</span></span></a>
      <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="site-links" onClick={() => setOpen(!open)}>{open ? 'Close 關閉 −' : 'Menu 選單 +'}</button>
      <nav id="site-links" aria-label="主要導航" className={open ? 'site-links is-open' : 'site-links'}>
        {PAGES.filter(p => p.id !== 'home').map(p => <a key={p.id} href={p.href} aria-current={active === p.id ? 'page' : undefined} onClick={() => setOpen(false)}>{p.label}<span>{({photography:'攝影', projects:'專案', awards:'獎項'})[p.id]}</span></a>)}
        <a className="nav-contact" href="#ct" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  </>;
}

function PageFooter() {
  return <footer id="ct" className="site-footer">
    <div className="footer-intro"><a href="index.html" aria-label="Anson Hui — 首頁"><BrandLogo /></a><div><span className="eyebrow">LET’S CONNECT</span><p>故事，從交流開始。</p></div></div>
    <div className="footer-links">{LINKS.map(l => <a key={l.label} href={l.url}>{l.label}<span aria-hidden="true">↗</span></a>)}</div>
    <div className="footer-bottom"><span>© {PROFILE.years} Anson Hui</span><span>PHOTOGRAPHY · DEVELOPMENT · EXPLORATION</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}

// Section header — `[03] — Title (right meta)`
function SectionHead({ num, kicker, title, meta }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20, alignItems: 'baseline', marginBottom: 18 }}>
      <div style={{ gridColumn: 'span 3', fontFamily: T.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.muted }}>
        {num} — {kicker}
      </div>
      <h2 style={{ gridColumn: 'span 6', margin: 0, fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: T.ink }}>
        {title}
      </h2>
      {meta && (
        <div style={{ gridColumn: 'span 3', textAlign: 'right', fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          {meta}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Typing animation hook. Loops through an array of phrases,
// typing each one and then deleting. Pauses on full strings.
// ──────────────────────────────────────────────────────────────
function useTyper(phrases, { typeMs = 55, eraseMs = 28, holdMs = 1400, enabled = true } = {}) {
  const [text, setText] = React.useState('');
  const [i, setI] = React.useState(0);
  const [mode, setMode] = React.useState('type'); // 'type' | 'hold' | 'erase'
  React.useEffect(() => {
    if (!enabled) return;
    const full = phrases[i % phrases.length];
    let t;
    if (mode === 'type') {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setMode('erase'), holdMs);
      }
    } else if (mode === 'erase') {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), eraseMs);
      } else {
        setI((v) => v + 1);
        setMode('type');
      }
    }
    return () => clearTimeout(t);
  }, [text, mode, i, phrases, typeMs, eraseMs, holdMs, enabled]);
  return text;
}

// Blinking caret component
function Caret({ color = 'currentColor', width = 2, height = '1em' }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block', width, height,
        background: color, marginLeft: 2, verticalAlign: '-0.15em',
        animation: 'ah-blink 1s steps(2) infinite',
      }}
    />
  );
}

// ──────────────────────────────────────────────────────────────
// PhotoTile — striped SVG placeholder tagged with the subject.
// Consistent signature so every variation can call it the same way.
// ──────────────────────────────────────────────────────────────
function PhotoTile({ photo, style, labelColor, showLabel = false, radius = 0, fit = 'cover' }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: radius, background: '#0e0d0b', ...style }}>
      <img
        src={photo.src}
        alt={photo.subject}
        loading="lazy"
        style={{
          width: '100%', height: '100%',
          objectFit: fit, display: 'block',
        }}
      />
      {showLabel && (
        <div style={{
          position: 'absolute', left: 10, bottom: 8,
          fontFamily: 'var(--mono)',
          fontSize: 10, letterSpacing: '0.04em',
          color: labelColor || '#fff', opacity: 0.92,
          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
        }}>
          {photo.subject}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Common keyframes injected once — blink, fade, grain overlay.
// ──────────────────────────────────────────────────────────────
(function injectSharedStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('ah-shared-styles')) return;
  const s = document.createElement('style');
  s.id = 'ah-shared-styles';
  s.textContent = `
    @keyframes ah-blink { 50% { opacity: 0; } }
    @keyframes ah-fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes ah-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .ah-grain::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: 0.5; mix-blend-mode: overlay;
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  PROFILE, PROJECTS, PHOTOS, CV, LINKS, PAGES, AWARDS, T,
  useTyper, Caret, PhotoTile,
  PageNav, PageFooter, SectionHead, BrandLogo,
});
