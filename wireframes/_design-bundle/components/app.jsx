// app.jsx — Tala main app with bottom nav, Tweaks panel

const TABS = [
  { id: 'showroom',  label: 'ویترین',       Icon: IconHome },
  { id: 'price',     label: 'قیمت روز',     Icon: IconChart },
  { id: 'gallery',   label: 'گالری',        Icon: IconGrid },
  { id: 'favorites', label: 'نشان‌شده',     Icon: IconHeart },
  { id: 'profile',   label: 'حساب',         Icon: IconUser },
];

// Each screen tells the nav whether to render dark or light
const TAB_DARK = {
  showroom: true,
  price: true,
  gallery: false,
  favorites: false,
  profile: false,
};

function BottomNav({ active, onChange }) {
  const dark = TAB_DARK[active];
  // glass nav adapts to bg
  const bg = dark ? 'rgba(20, 10, 16, 0.78)' : 'rgba(250, 244, 234, 0.82)';
  const inactiveColor = dark ? 'rgba(245, 235, 224, 0.42)' : 'rgba(31, 14, 18, 0.42)';
  const activeColor = dark ? '#F0DFC0' : '#1F0E12';
  const accent = '#C9A24C';
  const border = dark ? '0.5px solid rgba(201, 162, 76, 0.15)' : '0.5px solid rgba(31, 14, 18, 0.08)';

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 26, zIndex: 40,
      background: bg,
      backdropFilter: 'blur(28px) saturate(180%)',
      WebkitBackdropFilter: 'blur(28px) saturate(180%)',
      borderTop: border,
    }}>
      {/* gold seam */}
      <div style={{
        position: 'absolute', top: 0, right: 0, left: 0,
        height: 1,
        background: 'linear-gradient(90deg, rgba(201,162,76,0) 0%, rgba(201,162,76,0.4) 50%, rgba(201,162,76,0) 100%)',
        opacity: dark ? 1 : 0.6,
      }} />
      <div style={{
        display: 'flex', alignItems: 'stretch', justifyContent: 'space-between',
        padding: '10px 4px 6px',
      }}>
        {TABS.map(t => {
          const isActive = t.id === active;
          const color = isActive ? activeColor : inactiveColor;
          return (
            <button key={t.id} onClick={() => onChange(t.id)} style={{
              flex: 1, background: 'transparent', border: 'none',
              padding: '6px 0 4px', cursor: 'pointer',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 4, position: 'relative',
              color,
            }}>
              {isActive && (
                <div style={{
                  position: 'absolute', top: 0,
                  width: 18, height: 2, borderRadius: 1,
                  background: accent,
                }} />
              )}
              <t.Icon size={22} filled={isActive && t.id !== 'price'} />
              <span style={{
                fontFamily: 'Vazirmatn, sans-serif',
                fontSize: 10.5, fontWeight: isActive ? 600 : 400,
                letterSpacing: '0.01em',
                color: isActive ? activeColor : inactiveColor,
              }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Status bar overlay — dynamic island always visible
function StatusBar({ dark }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px 0', pointerEvents: 'none',
    }}>
      <div style={{
        fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 600,
        fontSize: 15, color: c,
      }}>۹:۴۱</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c}/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c}/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={c}/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// Dynamic island
function DynamicIsland() {
  return (
    <div style={{
      position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
      width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 55,
    }} />
  );
}

// ─── Phone frame wrapping the app ─────────────────────────────
function PhoneFrame({ children, dark }) {
  return (
    <div style={{
      width: 402, height: 874, borderRadius: 56, overflow: 'hidden',
      position: 'relative', background: dark ? '#0E060A' : '#FAF4EA',
      boxShadow: '0 50px 100px rgba(0,0,0,0.45), 0 0 0 1.5px rgba(255,255,255,0.06)',
      border: '6px solid #0a0608',
    }}>
      <DynamicIsland />
      <StatusBar dark={dark} />
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        {children}
      </div>
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', zIndex: 60,
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 134, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.28)',
        }} />
      </div>
    </div>
  );
}

// ─── Default tweaks ────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "startTab": "showroom",
  "showroomLayout": "editorial"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(t.startTab || 'showroom');
  const [openPost, setOpenPost] = React.useState(null);

  // when tweak changes the start tab, jump there
  React.useEffect(() => { if (t.startTab) setActive(t.startTab); }, [t.startTab]);

  const dark = TAB_DARK[active] || !!openPost;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 0%, #2a1620 0%, #150A10 50%, #0a0608 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'Vazirmatn, system-ui, sans-serif',
    }}>
      <PhoneFrame dark={dark}>
        <div style={{ minHeight: '100%' }}>
          {active === 'showroom'  && <ShowroomScreen layout={t.showroomLayout} />}
          {active === 'price'     && <PriceBoardScreen />}
          {active === 'gallery'   && <GalleryScreen onOpenPost={setOpenPost} />}
          {active === 'favorites' && <FavoritesScreen />}
          {active === 'profile'   && <ProfileScreen />}
        </div>
        {!openPost && <BottomNav active={active} onChange={setActive} />}
        {openPost && (
          <StoryViewer
            post={openPost}
            imageIdx={1}
            totalImages={4}
            onClose={() => setOpenPost(null)}
          />
        )}
      </PhoneFrame>

      <TweaksPanel>
        <TweakSection label="Showroom layout" />
        <TweakRadio
          label="Style"
          value={t.showroomLayout}
          options={[
            { value: 'editorial', label: 'Editorial' },
            { value: 'gallery',   label: 'Mosaic' },
            { value: 'magazine',  label: 'Magazine' },
          ]}
          onChange={(v) => setTweak('showroomLayout', v)}
        />
        <TweakSection label="Navigation" />
        <TweakSelect
          label="Start tab"
          value={t.startTab}
          options={[
            { value: 'showroom',  label: 'ویترین · Showroom' },
            { value: 'gallery',   label: 'گالری · Gallery' },
            { value: 'price',     label: 'قیمت روز · Price' },
            { value: 'favorites', label: 'نشان‌شده · Favorites' },
            { value: 'profile',   label: 'حساب · Profile' },
          ]}
          onChange={(v) => setTweak('startTab', v)}
        />
      </TweaksPanel>
    </div>
  );
}

// Simple profile screen
function ProfileScreen() {
  return (
    <div style={{
      background: '#FAF4EA', minHeight: '100%',
      paddingTop: 56, paddingBottom: 120,
    }}>
      <div style={{ padding: '24px 22px 28px', textAlign: 'center' }}>
        <div style={{
          width: 88, height: 88, borderRadius: 999, margin: '12px auto 18px',
          background: 'linear-gradient(135deg, #C9A24C 0%, #6B2D40 100%)',
          padding: 3,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 999,
            background: '#FAF4EA',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 32, letterSpacing: '0.06em', color: '#1F0E12',
          }}>س</div>
        </div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 22,
          color: '#1F0E12', fontWeight: 300, letterSpacing: '-0.01em',
        }}>سحر مرادی</div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 12.5,
          color: '#8A6B5E', marginTop: 4, letterSpacing: '0.04em',
        }}>۰۹۱۲ ۸۸۲ ۴۴ ۲۰</div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {[
          { label: 'نشان‌شده‌ها', meta: `${toFa(FAVORITES.length)} قطعه` },
          { label: 'مشاهده‌های اخیر', meta: 'دوازده قطعه' },
          { label: 'یادداشت‌های من', meta: '' },
          { label: 'تماس با ویترین', meta: '' },
          { label: 'تنظیمات', meta: '' },
          { label: 'درباره‌ی تالا', meta: '' },
        ].map((row, i, a) => (
          <div key={row.label} style={{
            background: '#fff',
            borderTopRightRadius: i === 0 ? 14 : 0,
            borderTopLeftRadius: i === 0 ? 14 : 0,
            borderBottomRightRadius: i === a.length - 1 ? 14 : 0,
            borderBottomLeftRadius: i === a.length - 1 ? 14 : 0,
            padding: '16px 18px',
            borderBottom: i === a.length - 1 ? 'none' : '0.5px solid rgba(31,14,18,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{
              fontFamily: 'Vazirmatn, sans-serif', fontSize: 15,
              color: '#1F0E12', fontWeight: 500,
            }}>{row.label}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {row.meta && (
                <span style={{
                  fontFamily: 'Vazirmatn, sans-serif', fontSize: 12.5,
                  color: '#8A6B5E',
                }}>{row.meta}</span>
              )}
              <span style={{ color: 'rgba(31,14,18,0.3)' }}>
                <IconBack size={14} dir="ltr" />
              </span>
            </span>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: 'center', marginTop: 38,
        fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
        color: '#8A6B5E', letterSpacing: '0.4em',
      }}>TALA · از ۱۳۸۰</div>
    </div>
  );
}

Object.assign(window, { App, BottomNav, StatusBar, DynamicIsland, ProfileScreen, PhoneFrame });
