// screen-showroom.jsx — Editorial showroom with 3 layout variations

// ─── Brand mark ───────────────────────────────────────────────
function TalaWordmark({ color = '#F0DFC0', size = 1 }) {
  return (
    <div style={{ textAlign: 'center', lineHeight: 1 }}>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: 44 * size, letterSpacing: '0.42em',
        color, fontWeight: 400,
        paddingRight: '0.42em', // optical centering for tracked text
      }}>TALA</div>
      <div style={{
        fontFamily: 'Vazirmatn, sans-serif',
        fontSize: 9 * size, letterSpacing: '0.5em',
        color, opacity: 0.7, marginTop: 6 * size,
        paddingRight: '0.5em',
        direction: 'ltr',
      }}>FINE JEWELRY</div>
    </div>
  );
}

// ─── Layout A: Editorial (centered hero + story) ──────────────
function ShowroomEditorial() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', background: '#150A10' }}>
        <Img src={PHOTOS.heroNecklace} ratio={3/4} />
        {/* gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(20,10,16,0.55) 0%, rgba(20,10,16,0.05) 32%, rgba(20,10,16,0.1) 62%, rgba(20,10,16,0.92) 100%)',
        }} />
        {/* wordmark top */}
        <div style={{
          position: 'absolute', top: 70, left: 0, right: 0,
          display: 'flex', justifyContent: 'center',
        }}>
          <TalaWordmark color="#F0DFC0" />
        </div>
        {/* bottom title */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 24px 36px', textAlign: 'center',
        }}>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            color: '#C9A24C', fontSize: 11, letterSpacing: '0.4em',
            marginBottom: 12,
          }}>SIGNATURE COLLECTION</div>
          <h1 style={{
            fontFamily: 'Vazirmatn, sans-serif',
            color: '#F5EBE0', fontSize: 30, fontWeight: 200,
            margin: 0, lineHeight: 1.25, letterSpacing: '-0.02em',
          }}>به ویترین تالا<br/>خوش آمدید</h1>
          <p style={{
            fontFamily: 'Vazirmatn, sans-serif',
            color: 'rgba(245, 235, 224, 0.66)', fontSize: 13.5,
            margin: '14px auto 0', maxWidth: 290, lineHeight: 1.7, fontWeight: 300,
          }}>گزیده‌ای از زیورآلات دست‌ساز ایرانی،<br/>که هر یک، روایتی از ذوق و هنر است.</p>
        </div>
      </section>

      {/* COLLECTIONS — vertical featured */}
      <section style={{ background: '#1A0E12', padding: '36px 0 8px' }}>
        <SectionHeader eyebrow="COLLECTIONS" title="مجموعه‌های روز" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '0 20px' }}>
          {COLLECTIONS.map((c, i) => (
            <div key={c.id} style={{
              position: 'relative', borderRadius: 4,
              overflow: 'hidden', background: '#0A0508',
            }}>
              <Img src={c.image} ratio={4/5} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(20,10,16,0.92) 100%)',
              }} />
              {c.badge && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  padding: '6px 12px', borderRadius: 999,
                  background: 'rgba(245, 235, 224, 0.12)',
                  border: '0.5px solid rgba(245, 235, 224, 0.3)',
                  backdropFilter: 'blur(10px)',
                  fontFamily: 'Vazirmatn, sans-serif',
                  fontSize: 10.5, color: '#F0DFC0', fontWeight: 500,
                }}>{c.badge}</div>
              )}
              <div style={{
                position: 'absolute', bottom: 0, right: 0, left: 0,
                padding: '0 22px 22px',
              }}>
                <div style={{
                  fontFamily: 'Vazirmatn, sans-serif', fontSize: 10.5,
                  color: '#C9A24C', letterSpacing: '0.18em',
                  marginBottom: 8, fontWeight: 500,
                }}>{c.subtitle}</div>
                <div style={{
                  fontFamily: 'Vazirmatn, sans-serif',
                  fontSize: 26, color: '#F5EBE0', fontWeight: 300,
                  letterSpacing: '-0.02em',
                }}>{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrandStory />
      <FeaturedRow />
      <Footer />
    </div>
  );
}

// ─── Layout B: Gallery Wall (asymmetric grid) ─────────────────
function ShowroomGallery() {
  return (
    <div>
      {/* HERO — full bleed brand */}
      <section style={{ position: 'relative', background: '#150A10', paddingTop: 56 }}>
        <div style={{ padding: '32px 24px 24px' }}>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 11, color: '#C9A24C',
            letterSpacing: '0.4em', marginBottom: 14,
          }}>SHOWROOM · از ۱۳۸۰</div>
          <h1 style={{
            fontFamily: 'Vazirmatn, sans-serif',
            fontSize: 38, color: '#F5EBE0', fontWeight: 200,
            margin: 0, lineHeight: 1.15, letterSpacing: '-0.03em',
          }}>
            نقره و طلا،<br/>
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 400, color: '#C9A24C' }}>ساخته‌ی</span> دست انسان.
          </h1>
        </div>
        {/* Asymmetric mosaic */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gridTemplateRows: '180px 140px 180px',
          gap: 4, padding: '0 4px',
        }}>
          <div style={{ gridRow: 'span 2', position: 'relative', overflow: 'hidden' }}>
            <Img src={PHOTOS.heroDiamond} ratio={undefined} style={{ height: '100%' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Img src={PHOTOS.necklaceVelvet} style={{ height: '100%' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Img src={PHOTOS.bracelet} style={{ height: '100%' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Img src={PHOTOS.earringsGold} style={{ height: '100%' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Img src={PHOTOS.goldRing} style={{ height: '100%' }} />
          </div>
        </div>
        {/* caption strip */}
        <div style={{
          padding: '20px 24px 28px',
          fontFamily: 'Vazirmatn, sans-serif',
          color: 'rgba(245, 235, 224, 0.72)',
          fontSize: 13.5, lineHeight: 1.75, fontWeight: 300,
        }}>
          هر قطعه، روایتی است از ذوق و هنرِ استادکارانی که چهار دهه پشت میز کار، نشانده و صیقل داده‌اند.
        </div>
      </section>

      <BrandStory dark="#221218" />
      <FeaturedRow />
      <ShowroomVisit />
      <Footer />
    </div>
  );
}

// ─── Layout C: Magazine (large type, single column) ───────────
function ShowroomMagazine() {
  return (
    <div>
      <section style={{ background: '#FBF5EB', paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ padding: '0 24px' }}>
          <div style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 11, color: '#8A4A55',
            letterSpacing: '0.5em', marginBottom: 16,
          }}>ISSUE 02 · ۱۴۰۴</div>
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic', fontWeight: 400,
            fontSize: 64, color: '#1F0E12', lineHeight: 0.95,
            margin: 0, letterSpacing: '-0.02em',
          }}>Tala</h1>
          <div style={{
            fontFamily: 'Vazirmatn, sans-serif',
            fontSize: 30, color: '#1F0E12', fontWeight: 200,
            margin: '6px 0 0', letterSpacing: '-0.02em',
          }}>کارگاهِ گوهر و طلا</div>
          <div style={{
            width: 60, height: 1, background: '#1F0E12',
            margin: '24px 0', opacity: 0.4,
          }} />
        </div>
        <Img src={PHOTOS.modelNecklace} ratio={3/4} />
        <div style={{ padding: '24px 24px 0' }}>
          <div style={{
            fontFamily: 'Vazirmatn, sans-serif',
            fontSize: 11, color: '#8A4A55',
            letterSpacing: '0.3em', marginBottom: 10,
          }}>ویژه‌نامه</div>
          <h2 style={{
            fontFamily: 'Vazirmatn, sans-serif',
            fontSize: 26, color: '#1F0E12', fontWeight: 300,
            margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em',
          }}>
            رویای یاقوت ـ
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 500 }}> Sapphire Dreams</span>
          </h2>
          <p style={{
            fontFamily: 'Vazirmatn, sans-serif',
            fontSize: 14, color: '#3D2026', lineHeight: 1.8,
            margin: '14px 0 0', fontWeight: 300,
          }}>
            مجموعه‌ای نو از یاقوت‌های کبود سیلانی، نشانده در طلای زرد ۱۸ عیار. هر قطعه به‌دستِ یکی از استادکاران ما در کارگاهِ خیابانِ سی‌تیر ساخته شده.
          </p>
        </div>
      </section>

      <BrandStory dark="#1A0E12" />
      <FeaturedRow />
      <Footer />
    </div>
  );
}

// ─── Shared sub-sections ──────────────────────────────────────
function SectionHeader({ eyebrow, title, light = false }) {
  return (
    <div style={{ padding: '0 20px 18px' }}>
      <div style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: 10.5, color: '#C9A24C',
        letterSpacing: '0.4em', marginBottom: 8,
      }}>{eyebrow}</div>
      <div style={{
        fontFamily: 'Vazirmatn, sans-serif',
        fontSize: 22, color: light ? '#1F0E12' : '#F5EBE0',
        fontWeight: 300, letterSpacing: '-0.01em',
      }}>{title}</div>
    </div>
  );
}

function BrandStory({ dark = '#150A10' }) {
  return (
    <section style={{ background: dark, padding: '40px 0 36px', position: 'relative' }}>
      <div style={{ padding: '0 28px', textAlign: 'center' }}>
        <div style={{
          width: 24, height: 1, background: '#C9A24C',
          margin: '0 auto 24px',
        }} />
        <div style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic', fontSize: 24,
          color: '#C9A24C', fontWeight: 400,
          marginBottom: 18, lineHeight: 1.4,
        }}>“Crafted with passion,<br/>since 1380.”</div>
        <p style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 13.5, color: 'rgba(245, 235, 224, 0.72)',
          lineHeight: 1.85, margin: 0, fontWeight: 300,
        }}>
          چهار دهه است که در کارگاهِ کوچکمان در بازارِ تهران، با همان دقت و عشقِ روزِ اول، طلا و گوهر را شکل می‌دهیم. هر قطعه‌ی تالا، اثرِ دست‌های انسانی‌ست که نسل به نسل، هنر را آموخته‌اند.
        </p>
      </div>
    </section>
  );
}

function FeaturedRow() {
  return (
    <section style={{ background: '#1A0E12', padding: '8px 0 36px' }}>
      <SectionHeader eyebrow="FEATURED PIECES" title="قطعه‌های برگزیده" />
      <div style={{
        display: 'flex', gap: 12, padding: '0 20px',
        overflowX: 'auto', WebkitOverflowScrolling: 'touch',
      }}>
        {FEATURED.map(p => (
          <div key={p.id} style={{
            flexShrink: 0, width: 150,
            background: '#221218',
            borderRadius: 2, overflow: 'hidden',
            border: '0.5px solid rgba(201, 162, 76, 0.16)',
          }}>
            <Img src={p.image} ratio={1} />
            <div style={{ padding: '12px 12px 14px' }}>
              <div style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 9.5, color: '#C9A24C',
                letterSpacing: '0.24em', marginBottom: 6,
              }}>{p.code}</div>
              <div style={{
                fontFamily: 'Vazirmatn, sans-serif', fontSize: 13,
                color: '#F5EBE0', fontWeight: 500, marginBottom: 4,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{p.title}</div>
              <div style={{
                fontFamily: 'Vazirmatn, sans-serif', fontSize: 11,
                color: 'rgba(245, 235, 224, 0.5)',
              }}>وزن: {p.price} گرم</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShowroomVisit() {
  return (
    <section style={{ background: '#150A10', padding: '8px 20px 32px' }}>
      <div style={{
        border: '0.5px solid rgba(201, 162, 76, 0.3)',
        borderRadius: 2, padding: '22px 22px 24px',
        background: 'linear-gradient(180deg, rgba(74,24,37,0.18) 0%, rgba(20,10,16,0) 100%)',
      }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 10.5, color: '#C9A24C',
          letterSpacing: '0.4em', marginBottom: 10,
        }}>VISIT US</div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 18,
          color: '#F5EBE0', fontWeight: 300, lineHeight: 1.5,
        }}>تهران، بازارِ بزرگ،<br/>پاسازِ گوهرفروشان، پلاکِ ۲۲</div>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginTop: 22, paddingTop: 18,
          borderTop: '0.5px solid rgba(201, 162, 76, 0.18)',
          fontFamily: 'Vazirmatn, sans-serif',
        }}>
          <div>
            <div style={{ fontSize: 10, color: 'rgba(245,235,224,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>شنبه ـ پنج‌شنبه</div>
            <div style={{ fontSize: 14, color: '#F5EBE0', fontWeight: 500 }}>۱۰:۰۰ ـ ۲۰:۰۰</div>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, color: 'rgba(245,235,224,0.5)', letterSpacing: '0.1em', marginBottom: 4 }}>تماس</div>
            <div style={{ fontSize: 14, color: '#F5EBE0', fontWeight: 500, fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.08em' }}>۰۲۱ ۵۵ ۸۸ ۲۲ ۴۴</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section style={{
      background: '#0E060A', padding: '32px 24px 120px',
      textAlign: 'center',
    }}>
      <TalaWordmark color="#C9A24C" size={0.7} />
      <div style={{
        fontFamily: 'Vazirmatn, sans-serif', fontSize: 10.5,
        color: 'rgba(245, 235, 224, 0.36)', marginTop: 22,
        letterSpacing: '0.08em',
      }}>© تالا ۱۴۰۴ ـ تمام حقوق محفوظ است</div>
    </section>
  );
}

function ShowroomScreen({ layout = 'editorial' }) {
  return (
    <div style={{ background: '#150A10', minHeight: '100%' }}>
      {layout === 'editorial' && <ShowroomEditorial />}
      {layout === 'gallery' && <ShowroomGallery />}
      {layout === 'magazine' && <ShowroomMagazine />}
    </div>
  );
}

Object.assign(window, { ShowroomScreen });
