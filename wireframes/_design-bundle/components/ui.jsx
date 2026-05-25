// ui.jsx — shared icons, placeholders, helpers for Tala

// ─── Persian-numeral conversion ───────────────────────────────
const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const toFa = (n) => String(n).replace(/\d/g, d => FA_DIGITS[d]);

// ─── Icon system (single-stroke, outline) ─────────────────────
const Icon = ({ d, size = 22, stroke = 'currentColor', fill = 'none', sw = 1.6, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {d ? <path d={d} /> : children}
  </svg>
);

const IconHeart = ({ size = 22, filled = false, stroke = 'currentColor' }) => (
  <Icon size={size} stroke={stroke} fill={filled ? stroke : 'none'} sw={1.6}
        d="M12 20.5s-7.5-4.6-7.5-10.3a4.7 4.7 0 0 1 8.3-3 4.7 4.7 0 0 1 8.3 3c0 5.7-7.5 10.3-7.5 10.3-.5.3-1.1.3-1.6 0Z" />
);
const IconShare = ({ size = 22 }) => (
  <Icon size={size} sw={1.5}>
    <path d="M22 2 11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
  </Icon>
);
const IconChat = ({ size = 22 }) => (
  <Icon size={size} sw={1.5}
        d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 21 11.5Z" />
);
const IconExpand = ({ size = 18 }) => (
  <Icon size={size} sw={1.8}>
    <path d="M4 9V4h5" />
    <path d="M20 9V4h-5" />
    <path d="M4 15v5h5" />
    <path d="M20 15v5h-5" />
  </Icon>
);
const IconFilter = ({ size = 20 }) => (
  <Icon size={size} sw={1.6}>
    <circle cx="6" cy="6" r="2" />
    <line x1="9" y1="6" x2="21" y2="6" />
    <line x1="3" y1="6" x2="4" y2="6" />
    <circle cx="14" cy="12" r="2" />
    <line x1="3" y1="12" x2="12" y2="12" />
    <line x1="16" y1="12" x2="21" y2="12" />
    <circle cx="8" cy="18" r="2" />
    <line x1="3" y1="18" x2="6" y2="18" />
    <line x1="10" y1="18" x2="21" y2="18" />
  </Icon>
);
const IconSearch = ({ size = 20 }) => (
  <Icon size={size} sw={1.6}>
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.5" y2="16.5" />
  </Icon>
);
const IconUser = ({ size = 22, filled = false }) => (
  <Icon size={size} fill={filled ? 'currentColor' : 'none'} sw={1.6}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </Icon>
);
const IconGrid = ({ size = 22, filled = false }) => (
  <Icon size={size} fill={filled ? 'currentColor' : 'none'} sw={1.6}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </Icon>
);
const IconHome = ({ size = 22, filled = false }) => (
  <Icon size={size} fill={filled ? 'currentColor' : 'none'} sw={1.6}
        d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" />
);
const IconChart = ({ size = 22, filled = false }) => (
  <Icon size={size} fill={filled ? 'currentColor' : 'none'} sw={1.6}>
    <path d="M3 20h18" />
    <rect x="5" y="11" width="3" height="7" rx="0.5" />
    <rect x="10.5" y="6" width="3" height="12" rx="0.5" />
    <rect x="16" y="13" width="3" height="5" rx="0.5" />
  </Icon>
);
const IconBack = ({ size = 22, dir = 'rtl' }) => (
  <Icon size={size} sw={1.8}
        d={dir === 'rtl' ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
);
const IconMore = ({ size = 22 }) => (
  <Icon size={size} sw={1.6}>
    <circle cx="5" cy="12" r="1.4" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
    <circle cx="19" cy="12" r="1.4" fill="currentColor"/>
  </Icon>
);
const IconUp = ({ size = 14 }) => (
  <Icon size={size} sw={2.2}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </Icon>
);
const IconDown = ({ size = 14 }) => (
  <Icon size={size} sw={2.2}>
    <path d="M7 7 17 17" />
    <path d="M9 17h8v-8" />
  </Icon>
);
const IconLive = ({ size = 8 }) => (
  <svg width={size} height={size} viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3.2" fill="#5DBB87" />
  </svg>
);
const IconRing = ({ size = 22 }) => (
  <Icon size={size} sw={1.5}>
    <circle cx="12" cy="15" r="6" />
    <path d="M8 8l4-4 4 4" />
    <path d="M9.5 7.5 12 6l2.5 1.5" />
  </Icon>
);
const IconCoin = ({ size = 22 }) => (
  <Icon size={size} sw={1.5}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" />
  </Icon>
);
const IconDollar = ({ size = 22 }) => (
  <Icon size={size} sw={1.6}>
    <path d="M12 3v18" />
    <path d="M16 7H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8" />
  </Icon>
);
const IconEuro = ({ size = 22 }) => (
  <Icon size={size} sw={1.6}>
    <path d="M19 5.5A8 8 0 1 0 19 18.5" />
    <path d="M4 10h10" />
    <path d="M4 14h10" />
  </Icon>
);

// ─── Image placeholder ────────────────────────────────────────
// Uses Unsplash URLs (with offline-friendly fallback gradient behind).
const Img = ({ src, alt = '', style = {}, ratio, className = '' }) => {
  const placeholder = 'linear-gradient(135deg, #2A1218 0%, #4A1825 60%, #1A0B11 100%)';
  if (ratio) {
    return (
      <div className={className} style={{
        position: 'relative', width: '100%',
        paddingTop: `${100 / ratio}%`,
        background: placeholder,
        ...style,
      }}>
        <img src={src} alt={alt} loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
      </div>
    );
  }
  return (
    <div className={className} style={{ background: placeholder, ...style }}>
      <img src={src} alt={alt} loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
};

Object.assign(window, {
  toFa, Icon, Img,
  IconHeart, IconShare, IconChat, IconExpand, IconFilter, IconSearch,
  IconUser, IconGrid, IconHome, IconChart, IconBack, IconMore,
  IconUp, IconDown, IconLive, IconRing, IconCoin, IconDollar, IconEuro,
});
