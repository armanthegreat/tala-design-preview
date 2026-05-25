// canvas-app.jsx — Static design-canvas showing all Tala screens

// ─── Static phone frame (no nav state, just chrome) ───────────
function StaticPhone({ dark, children, activeTab }) {
  // Reuse status bar + dynamic island + home indicator + bottom nav,
  // but bottom nav is static (no click handlers needed — visual only).
  return (
    <div style={{
      width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
      position: 'relative', background: dark ? '#0E060A' : '#FAF4EA',
      boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
      border: '6px solid #0a0608',
      direction: 'rtl',
      fontFamily: 'Vazirmatn, system-ui, sans-serif',
    }}>
      <DynamicIsland />
      <StatusBar dark={dark} />
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
        {children}
      </div>
      <BottomNav active={activeTab} onChange={() => {}} />
      <div style={{
        position: 'absolute', bottom: 8, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', zIndex: 60, pointerEvents: 'none',
      }}>
        <div style={{
          width: 134, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.28)',
        }} />
      </div>
    </div>
  );
}

function CanvasApp() {
  return (
    <DesignCanvas
      title="Tala — Screens"
      subtitle="هر صفحه به‌صورت کامل، آماده‌ی بازبینی"
    >
      <DCSection
        id="core"
        title="Core screens"
        subtitle="پنج صفحه‌ی اصلی اپلیکیشن تالا"
      >
        <DCArtboard id="showroom" label="ویترین · Showroom" width={380} height={822}>
          <StaticPhone dark activeTab="showroom">
            <ShowroomScreen layout="editorial" />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="price" label="قیمت روز · Price Board" width={380} height={822}>
          <StaticPhone dark activeTab="price">
            <PriceBoardScreen />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="gallery" label="گالری · Gallery" width={380} height={822}>
          <StaticPhone activeTab="gallery">
            <GalleryScreen />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="favorites" label="نشان‌شده · Favorites" width={380} height={822}>
          <StaticPhone activeTab="favorites">
            <FavoritesScreen />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="profile" label="حساب · Profile" width={380} height={822}>
          <StaticPhone activeTab="profile">
            <ProfileScreen />
          </StaticPhone>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="showroom-variants"
        title="Showroom — editorial variations"
        subtitle="سه روایت از صفحه‌ی ویترین"
      >
        <DCArtboard id="sr-editorial" label="A · Editorial" width={380} height={822}>
          <StaticPhone dark activeTab="showroom">
            <ShowroomScreen layout="editorial" />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="sr-mosaic" label="B · Mosaic" width={380} height={822}>
          <StaticPhone dark activeTab="showroom">
            <ShowroomScreen layout="gallery" />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="sr-magazine" label="C · Magazine" width={380} height={822}>
          <StaticPhone activeTab="showroom">
            <ShowroomScreen layout="magazine" />
          </StaticPhone>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="story-transition"
        title="Story viewer · fullscreen transition"
        subtitle="باز شدن یک پست از گالری به نمای داستان"
      >
        <DCArtboard id="story-0" label="۱ · Gallery (start)" width={380} height={822}>
          <StaticPhone activeTab="gallery">
            <GalleryScreen />
          </StaticPhone>
        </DCArtboard>

        <DCArtboard id="story-1" label="۲ · Lifting" width={380} height={822}>
          <div style={{
            width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
            position: 'relative', background: '#0E060A',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '6px solid #0a0608', direction: 'rtl',
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
          }}>
            <DynamicIsland />
            <StatusBar dark />
            <StoryTransition progress={0.18} />
          </div>
        </DCArtboard>

        <DCArtboard id="story-2" label="۳ · Expanding" width={380} height={822}>
          <div style={{
            width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
            position: 'relative', background: '#0E060A',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '6px solid #0a0608', direction: 'rtl',
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
          }}>
            <DynamicIsland />
            <StatusBar dark />
            <StoryTransition progress={0.62} />
          </div>
        </DCArtboard>

        <DCArtboard id="story-3" label="۴ · Settling" width={380} height={822}>
          <div style={{
            width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
            position: 'relative', background: '#0E060A',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '6px solid #0a0608', direction: 'rtl',
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
          }}>
            <DynamicIsland />
            <StatusBar dark />
            <StoryTransition progress={0.92} />
          </div>
        </DCArtboard>

        <DCArtboard id="story-final" label="۵ · Story viewer" width={380} height={822}>
          <div style={{
            width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
            position: 'relative', background: '#0E060A',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '6px solid #0a0608', direction: 'rtl',
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
          }}>
            <DynamicIsland />
            <StatusBar dark />
            <StoryViewer />
          </div>
        </DCArtboard>

        <DCArtboard id="story-img2" label="۶ · Next image" width={380} height={822}>
          <div style={{
            width: 380, height: 822, borderRadius: 52, overflow: 'hidden',
            position: 'relative', background: '#0E060A',
            boxShadow: '0 30px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
            border: '6px solid #0a0608', direction: 'rtl',
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
          }}>
            <DynamicIsland />
            <StatusBar dark />
            <StoryViewer post={FEED[1]} imageIdx={2} totalImages={4} />
          </div>
        </DCArtboard>
      </DCSection>

      <DCSection
        id="system"
        title="Design system"
        subtitle="مبانی تصویری ـ رنگ، تایپوگرافی، اجزا"
      >
        <DCArtboard id="palette" label="Palette" width={420} height={420}>
          <PaletteSheet />
        </DCArtboard>

        <DCArtboard id="type" label="Typography" width={520} height={420}>
          <TypeSheet />
        </DCArtboard>

        <DCArtboard id="components" label="Components" width={420} height={420}>
          <ComponentsSheet />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

// ─── Design-system reference sheets ───────────────────────────
function PaletteSheet() {
  const swatches = [
    { name: 'Burgundy base',  hex: '#0E060A', light: false },
    { name: 'Burgundy 900',   hex: '#150A10', light: false },
    { name: 'Burgundy 800',   hex: '#2A1218', light: false },
    { name: 'Burgundy 600',   hex: '#4A1825', light: false },
    { name: 'Gold',           hex: '#C9A24C', light: false },
    { name: 'Gold soft',      hex: '#E8D5A0', light: false },
    { name: 'Champagne',      hex: '#F0DFC0', light: false },
    { name: 'Cream',          hex: '#FAF4EA', light: true },
    { name: 'Text dark',      hex: '#1F0E12', light: false },
    { name: 'Text muted',     hex: '#8A6B5E', light: false },
    { name: 'Up · green',     hex: '#5DBB87', light: false },
    { name: 'Down · red',     hex: '#E07474', light: false },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: '#FAF4EA',
      padding: 24, boxSizing: 'border-box',
      fontFamily: 'Vazirmatn, sans-serif',
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8, alignContent: 'start',
    }}>
      {swatches.map(s => (
        <div key={s.hex} style={{
          background: s.hex, borderRadius: 4,
          aspectRatio: '1 / 1',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 10,
          color: s.light ? '#1F0E12' : '#F0DFC0',
          fontFamily: '"Bebas Neue", sans-serif',
          letterSpacing: '0.04em',
          border: s.light ? '0.5px solid rgba(31,14,18,0.1)' : 'none',
        }}>
          <div style={{ fontSize: 11, opacity: 0.7 }}>{s.name}</div>
          <div style={{ fontSize: 13, marginTop: 2 }}>{s.hex}</div>
        </div>
      ))}
    </div>
  );
}

function TypeSheet() {
  return (
    <div style={{
      width: '100%', height: '100%', background: '#FAF4EA',
      padding: 32, boxSizing: 'border-box',
      direction: 'rtl', textAlign: 'right',
    }}>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif', fontSize: 56,
        letterSpacing: '0.4em', color: '#1F0E12', direction: 'ltr',
        textAlign: 'right',
      }}>TALA</div>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
        letterSpacing: '0.3em', color: '#8A4A55', marginTop: 4,
        direction: 'ltr', textAlign: 'right',
      }}>BEBAS NEUE · DISPLAY</div>

      <hr style={{ border: 0, borderTop: '0.5px solid rgba(31,14,18,0.15)', margin: '20px 0' }} />

      <div style={{
        fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic',
        fontSize: 36, color: '#1F0E12', lineHeight: 1.1,
      }}>“Crafted with passion.”</div>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
        letterSpacing: '0.3em', color: '#8A4A55', marginTop: 4,
        direction: 'ltr',
      }}>CORMORANT · EDITORIAL ACCENTS</div>

      <hr style={{ border: 0, borderTop: '0.5px solid rgba(31,14,18,0.15)', margin: '20px 0' }} />

      <div style={{
        fontFamily: 'Vazirmatn, sans-serif', fontSize: 26, fontWeight: 200,
        color: '#1F0E12', letterSpacing: '-0.02em',
      }}>به ویترین تالا خوش آمدید</div>
      <div style={{
        fontFamily: 'Vazirmatn, sans-serif', fontSize: 14, color: '#3D2026',
        marginTop: 6, lineHeight: 1.7, fontWeight: 300,
      }}>گزیده‌ای از زیورآلات دست‌ساز ایرانی، که هر یک روایتی از ذوق و هنر است.</div>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
        letterSpacing: '0.3em', color: '#8A4A55', marginTop: 8,
        direction: 'ltr', textAlign: 'right',
      }}>VAZIRMATN · PERSIAN BODY</div>
    </div>
  );
}

function ComponentsSheet() {
  return (
    <div style={{
      width: '100%', height: '100%', background: '#FAF4EA',
      padding: 24, boxSizing: 'border-box', direction: 'rtl',
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      {/* Tag chips */}
      <div>
        <Label>Tag chips</Label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 6 }}>
          {['همه', 'انگشتر', 'گردنبند'].map((t, i) => (
            <div key={t} style={{
              padding: '7px 14px', borderRadius: 999,
              background: i === 0 ? '#1F0E12' : 'transparent',
              color: i === 0 ? '#F0DFC0' : '#1F0E12',
              border: i === 0 ? 'none' : '0.5px solid rgba(31,14,18,0.22)',
              fontSize: 12, fontFamily: 'Vazirmatn, sans-serif',
              fontWeight: i === 0 ? 600 : 400,
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Change pills */}
      <div>
        <Label>Change pills</Label>
        <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
          <Pill up>+۱.۸۵٪</Pill>
          <Pill>-۰.۳۴٪</Pill>
        </div>
      </div>

      {/* Badge */}
      <div>
        <Label>Eyebrow</Label>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
          color: '#C9A24C', letterSpacing: '0.4em', marginTop: 6,
        }}>SIGNATURE COLLECTION</div>
      </div>

      {/* Avatar */}
      <div>
        <Label>Story avatar</Label>
        <div style={{
          width: 44, height: 44, borderRadius: 999, marginTop: 6,
          background: 'linear-gradient(135deg, #C9A24C, #6B2D40)', padding: 2,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 999,
            background: '#FAF4EA',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 16, letterSpacing: '0.08em', color: '#1F0E12',
          }}>T</div>
        </div>
      </div>

      {/* Live indicator */}
      <div>
        <Label>Live indicator</Label>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 6,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(93, 187, 135, 0.12)',
          border: '0.5px solid rgba(93, 187, 135, 0.3)',
        }}>
          <IconLive />
          <span style={{
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 11,
            color: '#3E8559', fontWeight: 500,
          }}>زنده ـ ۱۴:۰۳</span>
        </div>
      </div>
    </div>
  );
}

const Label = ({ children }) => (
  <div style={{
    fontFamily: '"Bebas Neue", sans-serif', fontSize: 10,
    color: '#8A4A55', letterSpacing: '0.3em', direction: 'ltr',
    textAlign: 'right',
  }}>{children}</div>
);

const Pill = ({ children, up }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '5px 9px', borderRadius: 999,
    background: up ? 'rgba(93, 187, 135, 0.14)' : 'rgba(207, 64, 64, 0.14)',
    color: up ? '#3E8559' : '#B83434',
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: 12, letterSpacing: '0.04em',
  }}>
    {up ? <IconUp size={12} /> : <IconDown size={12} />}
    {children}
  </div>
);

window.CanvasApp = CanvasApp;
