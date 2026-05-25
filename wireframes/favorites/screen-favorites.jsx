// screen-favorites.jsx — Saved items board (light, gallery-aligned)

function FavoriteCard({ item }) {
  return (
    <div style={{
      position: 'relative', borderRadius: 2, overflow: 'hidden',
      background: '#FFFFFF',
      boxShadow: '0 1px 2px rgba(31,14,18,0.04), 0 6px 18px rgba(31,14,18,0.06)',
    }}>
      <div style={{ position: 'relative' }}>
        <Img src={item.image} ratio={4/5} />
        {/* heart */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          width: 32, height: 32, borderRadius: 999,
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#B82D3D',
        }}>
          <IconHeart size={16} filled stroke="#B82D3D" />
        </div>
      </div>
      <div style={{ padding: '10px 12px 14px' }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 9, color: '#8A6B5E',
          letterSpacing: '0.28em', marginBottom: 4,
        }}>{item.code}</div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 13, color: '#1F0E12', fontWeight: 500,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{item.title}</div>
      </div>
    </div>
  );
}

function FavoritesScreen() {
  return (
    <div style={{
      background: '#FAF4EA', minHeight: '100%',
      paddingTop: 56, paddingBottom: 120,
    }}>
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 11, color: '#8A4A55',
          letterSpacing: '0.4em', marginBottom: 8,
        }}>FAVORITES</div>
        <h1 style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 30, color: '#1F0E12', fontWeight: 200,
          margin: 0, letterSpacing: '-0.02em',
        }}>نشان‌شده‌ها</h1>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 13,
          color: '#8A6B5E', marginTop: 6,
        }}>{toFa(FAVORITES.length)} قطعه‌ی برگزیده</div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 12, padding: '0 16px',
      }}>
        {FAVORITES.map(item => <FavoriteCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}

Object.assign(window, { FavoritesScreen });
