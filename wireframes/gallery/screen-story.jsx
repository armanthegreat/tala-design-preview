// screen-story.jsx — Fullscreen story-style post viewer + transition snapshots

// ─── Story progress bars ──────────────────────────────────────
function StoryBars({ total = 4, active = 1, progress = 0.6 }) {
  return (
    <div style={{
      display: 'flex', gap: 4, padding: '14px 16px 0',
      direction: 'ltr', // bars fill left-to-right
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 2.5, borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.28)',
          overflow: 'hidden',
        }}>
          {i < active && (
            <div style={{ height: '100%', width: '100%', background: '#F5EBE0' }} />
          )}
          {i === active && (
            <div style={{ height: '100%', width: `${progress * 100}%`, background: '#F5EBE0' }} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Story viewer (fullscreen, final state) ───────────────────
function StoryViewer({ post = FEED[1], imageIdx: startIdx = 0, totalImages = 4, onClose }) {
  const carousel = [PHOTOS.necklaceVelvet, PHOTOS.pendant, PHOTOS.modelNecklace, PHOTOS.sapphire];
  const [imageIdx, setImageIdx] = React.useState(startIdx);
  const src = carousel[imageIdx % carousel.length];

  const next = () => setImageIdx(i => Math.min(totalImages - 1, i + 1));
  const prev = () => setImageIdx(i => Math.max(0, i - 1));

  return (
    <div className="tala-story-enter" style={{
      position: 'absolute', inset: 0,
      background: '#0A0508',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 100,
    }}>
      {/* Full-bleed image */}
      <img src={src}
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* dark gradient overlays for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 18%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* TOP: status bar slot + story chrome */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: 44 }}>
        <StoryBars total={totalImages} active={imageIdx} progress={0.62} />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 16px 0',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 999,
            background: 'linear-gradient(135deg, #C9A24C, #6B2D40)', padding: 2,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: 999,
              background: '#0A0508',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 12, letterSpacing: '0.08em', color: '#F0DFC0',
            }}>T</div>
          </div>
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{
              fontFamily: 'Vazirmatn, sans-serif', fontSize: 13,
              color: '#F5EBE0', fontWeight: 600,
            }}>تالا</div>
            <div style={{
              fontFamily: 'Vazirmatn, sans-serif', fontSize: 10.5,
              color: 'rgba(245, 235, 224, 0.6)', marginTop: 2,
            }}>{post.tag} · {post.date}</div>
          </div>
          {/* close button */}
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', padding: 0,
            color: '#F5EBE0', cursor: 'pointer',
            width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* tap zones — invisible, navigate stories */}
      <div onClick={prev} style={{
        position: 'absolute', top: 100, bottom: 180, left: 0, width: '35%',
        zIndex: 5, cursor: 'pointer',
      }} />
      <div onClick={next} style={{
        position: 'absolute', top: 100, bottom: 180, right: 0, width: '35%',
        zIndex: 5, cursor: 'pointer',
      }} />

      {/* tap-zone hints (subtle, left/right edges) */}
      <div style={{
        position: 'absolute', top: 80, bottom: 140, left: 0, width: 60,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0))',
        zIndex: 4, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 80, bottom: 140, right: 0, width: 60,
        background: 'linear-gradient(270deg, rgba(255,255,255,0.04), rgba(255,255,255,0))',
        zIndex: 4, pointerEvents: 'none',
      }} />

      {/* spacer */}
      <div style={{ flex: 1 }} />

      {/* BOTTOM: caption + actions */}
      <div style={{
        position: 'relative', zIndex: 10,
        padding: '0 22px 28px',
      }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 10.5,
          color: '#E8C872', letterSpacing: '0.38em', marginBottom: 10,
        }}>{post.subtitle.replace('مجموعه‌ی', '').trim().toUpperCase().replace(/[^\x00-\x7F\s]/g, '')} · COLLECTION</div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 26,
          color: '#F5EBE0', fontWeight: 200, letterSpacing: '-0.02em',
          lineHeight: 1.25,
        }}>{post.title}</div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 13,
          color: 'rgba(245, 235, 224, 0.78)', marginTop: 10,
          lineHeight: 1.7, fontWeight: 300,
        }}>{post.caption}</div>

        {/* action row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          marginTop: 22, color: '#F5EBE0',
        }}>
          <button style={storyBtn}>
            <IconHeart size={22} filled stroke="#E07474" />
          </button>
          <button style={storyBtn}><IconShare size={22} /></button>
          <button style={storyBtn}><IconChat size={20} /></button>
          <div style={{ flex: 1 }} />
          <div style={{
            padding: '8px 14px', borderRadius: 999,
            background: 'rgba(245, 235, 224, 0.14)',
            border: '0.5px solid rgba(245, 235, 224, 0.3)',
            backdropFilter: 'blur(10px)',
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 12,
            color: '#F5EBE0', fontWeight: 500,
          }}>{toFa(imageIdx + 1)} از {toFa(totalImages)}</div>
        </div>
      </div>
    </div>
  );
}

const storyBtn = {
  background: 'transparent', border: 'none', padding: 0,
  width: 36, height: 36, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  color: '#F5EBE0', cursor: 'pointer',
};

// ─── Mid-transition snapshot (gallery zooming into story) ─────
// progress: 0 = full gallery, 1 = fullscreen story
function StoryTransition({ progress = 0.5 }) {
  // The hero post lifts and grows; surrounding feed dims + scales.
  const scale = 0.94 + progress * 0.06; // 0.94 → 1.0
  const dim = 0.35 + progress * 0.55;
  const radius = 14 - progress * 14;
  const inset = (1 - progress) * 20;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#0A0508',
      overflow: 'hidden',
    }}>
      {/* Behind: dimmed gallery */}
      <div style={{
        position: 'absolute', inset: 0,
        transform: `scale(${1 - progress * 0.06})`,
        transformOrigin: 'center 30%',
        opacity: 1 - progress * 0.5,
        filter: `blur(${progress * 6}px)`,
      }}>
        <div style={{ background: '#FAF4EA', minHeight: '100%' }}>
          <GalleryHeader />
          <FeedPost post={FEED[0]} idx={0} />
          <FeedPost post={FEED[1]} idx={1} />
        </div>
      </div>
      {/* Dim layer */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `rgba(10, 5, 8, ${dim})`,
      }} />

      {/* Hero post zooming up */}
      <div style={{
        position: 'absolute',
        top: inset + 60, left: inset, right: inset,
        bottom: inset + 30,
        borderRadius: radius,
        overflow: 'hidden',
        boxShadow: `0 ${20 + progress * 20}px ${40 + progress * 40}px rgba(0,0,0,${0.35 + progress * 0.25})`,
        background: '#0A0508',
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}>
        <img src={PHOTOS.necklaceVelvet}
          onError={(e) => { e.target.style.display = 'none'; }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
          }}
        />
        {/* Emerging story chrome (fades in) */}
        <div style={{
          position: 'absolute', inset: 0,
          opacity: progress,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)',
        }} />
        {/* progress bars emerging */}
        <div style={{
          position: 'absolute', top: 40, left: 0, right: 0,
          opacity: progress, pointerEvents: 'none',
        }}>
          <StoryBars total={4} active={1} progress={0.05} />
        </div>
        {/* caption emerging */}
        <div style={{
          position: 'absolute', bottom: 18, left: 22, right: 22,
          opacity: progress,
        }}>
          <div style={{
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 22,
            color: '#F5EBE0', fontWeight: 200, letterSpacing: '-0.02em',
          }}>گردنبند یاقوت کبود</div>
        </div>
      </div>
    </div>
  );
}

// Wrap as fullscreen-screen-component for canvas
function StoryViewerScreen() { return <StoryViewer />; }
function StoryStartScreen()  { return <StoryTransition progress={0.18} />; }
function StoryMidScreen()    { return <StoryTransition progress={0.55} />; }
function StoryEndScreen()    { return <StoryTransition progress={0.9} />; }

Object.assign(window, {
  StoryViewer, StoryTransition,
  StoryViewerScreen, StoryStartScreen, StoryMidScreen, StoryEndScreen,
});
