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
  { year: '2025 —', role: '個人作品開發', org: 'Independent', note: '互動工具 · 網站 · 線上 demo' },
  { year: '2024',   role: '攝影創作持續累積', org: 'Instagram @ansonhui6040', note: '街頭 · 旅行 · 自然' },
  { year: '2023',   role: '設計與影像實作', org: 'Personal projects', note: '簡報 · 平面 · 影像後製' },
  { year: '2021',   role: '開始公開作品集', org: 'Adobe Portfolio', note: '建立作品發表節奏' },
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
  sans: 'Figtree, "Noto Sans TC", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
  serif: '"Instrument Serif", Georgia, serif',
};

// Top nav, reused across all pages.
function PageNav({ active }) {
  return (
    <header style={{
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
      padding: '22px 44px', gap: 20, alignItems: 'center',
      borderBottom: `1px solid ${T.rule}`,
      position: 'relative', zIndex: 2,
    }}>
      <a href="index.html" style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: T.ink }}>
        <div style={{
          width: 22, height: 22, background: T.accent,
          display: 'grid', placeItems: 'center',
          color: T.bg, fontFamily: T.mono, fontSize: 11, fontWeight: 700,
          boxShadow: `0 0 12px rgba(232,169,98,0.35)`,
        }}>A</div>
        <div style={{ fontFamily: T.mono, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
          AnsonHui
        </div>
      </a>
      <nav style={{
        gridColumn: 'span 7',
        display: 'flex', gap: 28, justifyContent: 'center',
        fontFamily: T.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        {PAGES.filter((p) => p.id !== 'home').map((p) => {
          const on = p.id === active;
          return (
            <a key={p.id} href={p.href} style={{
              color: on ? T.accent : T.ink,
              textDecoration: 'none', display: 'flex', gap: 6, opacity: on ? 1 : 0.85,
              borderBottom: on ? `1px solid ${T.accent}` : '1px solid transparent',
              paddingBottom: 3,
            }}>
              <span style={{ color: on ? T.accent : T.muted }}>{p.n}</span><span>{p.label}</span>
            </a>
          );
        })}
      </nav>
      <div style={{ gridColumn: 'span 2', textAlign: 'right', fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '0.1em' }}>
        2026 · TPE
      </div>
    </header>
  );
}

// Reusable footer (compact).
function PageFooter() {
  return (
    <footer style={{
      marginTop: 'auto',
      background: '#050504',
      color: T.ink,
      padding: '32px 44px',
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20,
      alignItems: 'center',
      borderTop: `1px solid ${T.rule}`,
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ gridColumn: 'span 3', fontFamily: T.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.accent }}>
        Contact
      </div>
      <div style={{ gridColumn: 'span 6', display: 'flex', flexWrap: 'wrap', gap: 22, fontSize: 13 }}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.url} style={{ color: T.ink, textDecoration: 'none', borderBottom: `1px solid ${T.rule}`, paddingBottom: 2 }}>
            <strong style={{ fontWeight: 600 }}>{l.label}</strong> <span style={{ color: T.muted }}>/ {l.handle}</span>
          </a>
        ))}
      </div>
      <div style={{ gridColumn: 'span 3', textAlign: 'right', fontFamily: T.mono, fontSize: 11, color: T.muted, letterSpacing: '0.1em' }}>
        © {PROFILE.years}
      </div>
    </footer>
  );
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
function useTyper(phrases, { typeMs = 55, eraseMs = 28, holdMs = 1400 } = {}) {
  const [text, setText] = React.useState('');
  const [i, setI] = React.useState(0);
  const [mode, setMode] = React.useState('type'); // 'type' | 'hold' | 'erase'
  React.useEffect(() => {
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
  }, [text, mode, i, phrases, typeMs, eraseMs, holdMs]);
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
          fontFamily: 'JetBrains Mono, monospace',
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
  PageNav, PageFooter, SectionHead,
});
