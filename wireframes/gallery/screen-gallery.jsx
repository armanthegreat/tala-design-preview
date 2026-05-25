// screen-gallery.jsx — Instagram-style RTL gallery feed

function GalleryHeader({ onFilter }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'rgba(250, 244, 234, 0.86)',
      backdropFilter: 'blur(20px) saturate(160%)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      borderBottom: '0.5px solid rgba(92, 31, 46, 0.12)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '52px 20px 8px',
      }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 28, letterSpacing: '0.12em',
          color: '#1F0E12', fontWeight: 400,
        }}>TALA</div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <button style={iconBtn}><IconSearch size={20} /></button>
          <button style={iconBtn} onClick={onFilter}><IconFilter size={20} /></button>
        </div>
      </div>
      {/* tag chips */}
      <div style={{
        display: 'flex', gap: 8, padding: '4px 16px 12px',
        overflowX: 'auto', WebkitOverflowScrolling: 'touch',
      }}>
        {TAGS.map((t, i) => (
          <div key={t} style={{
            padding: '8px 16px', borderRadius: 999,
            background: i === 0 ? '#1F0E12' : 'transparent',
            color: i === 0 ? '#F0DFC0' : '#1F0E12',
            border: i === 0 ? 'none' : '0.5px solid rgba(31,14,18,0.22)',
            fontSize: 13, fontFamily: 'Vazirmatn, sans-serif',
            fontWeight: i === 0 ? 600 : 400,
            whiteSpace: 'nowrap', flexShrink: 0,
            letterSpacing: '0.01em',
          }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

const iconBtn = {
  background: 'transparent', border: 'none', padding: 0,
  width: 32, height: 32, display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  color: '#1F0E12', cursor: 'pointer',
};

function FeedPost({ post, idx, onExpand }) {
  return (
    <article style={{ borderBottom: '0.5px solid rgba(92, 31, 46, 0.08)', paddingBottom: 16 }}>
      {/* shop row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px 10px',
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 999,
          background: 'linear-gradient(135deg, #C9A24C, #6B2D40)',
          padding: 2,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: 999,
            background: '#FAF4EA',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 14, letterSpacing: '0.08em', color: '#1F0E12',
          }}>T</div>
        </div>
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontFamily: 'Vazirmatn, sans-serif', fontSize: 13.5, fontWeight: 600, color: '#1F0E12' }}>
            تالا
          </div>
          <div style={{ fontFamily: 'Vazirmatn, sans-serif', fontSize: 11, color: '#8A6B5E', marginTop: 2 }}>
            {post.tag} · {post.date}
          </div>
        </div>
        <button style={iconBtn}><IconMore size={20} /></button>
      </div>

      {/* image */}
      <div style={{ position: 'relative', background: '#2A1218' }}
           onClick={() => onExpand && onExpand(post)}>
        <Img src={post.image} alt={post.title} ratio={1} />
        {/* fullscreen / story icon — corner */}
        <button onClick={(e) => { e.stopPropagation(); onExpand && onExpand(post); }} style={{
          position: 'absolute', top: 14, left: 14,
          width: 36, height: 36, borderRadius: 999,
          background: 'rgba(20, 10, 12, 0.55)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#F0DFC0',
          border: 'none', padding: 0, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <IconExpand size={16} />
        </button>
        {/* image counter */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          padding: '5px 10px', borderRadius: 999,
          background: 'rgba(20, 10, 12, 0.55)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#F0DFC0',
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 11, fontWeight: 500,
        }}>
          ۱ / ۴
        </div>
      </div>

      {/* action row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '12px 16px 6px', color: '#1F0E12',
      }}>
        <button style={iconBtn}>
          <IconHeart size={24} filled={idx === 1} stroke={idx === 1 ? '#B82D3D' : '#1F0E12'} />
        </button>
        <button style={iconBtn}><IconChat size={22} /></button>
        <button style={iconBtn}><IconShare size={22} /></button>
      </div>

      {/* meta */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 12.5,
          color: '#1F0E12', fontWeight: 600, marginBottom: 6,
        }}>
          {toFa(post.likes)} پسند
        </div>
        <div style={{ fontFamily: 'Vazirmatn, sans-serif', fontSize: 14, color: '#1F0E12', lineHeight: 1.55 }}>
          <span style={{ fontWeight: 700 }}>{post.title}</span>
          <span style={{ color: '#8A6B5E' }}> — </span>
          <span style={{ color: '#3D2026' }}>{post.caption}</span>
        </div>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif', fontSize: 11,
          color: '#8A6B5E', letterSpacing: '0.18em', marginTop: 6,
        }}>
          {post.subtitle}
        </div>
      </div>
    </article>
  );
}

function GalleryScreen({ onOpenPost }) {
  return (
    <div style={{
      background: '#FAF4EA', minHeight: '100%',
      paddingBottom: 100,
    }}>
      <GalleryHeader />
      <div>
        {FEED.map((p, i) => <FeedPost key={p.id} post={p} idx={i} onExpand={onOpenPost} />)}
      </div>
    </div>
  );
}

Object.assign(window, { GalleryScreen, GalleryHeader, FeedPost });
