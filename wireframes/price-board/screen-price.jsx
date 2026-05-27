// screen-price.jsx — Price board (dark, calm, premium)

const PriceIcon = ({ kind, size = 22 }) => {
  const stroke = '#C9A24C';
  switch (kind) {
    case 'gold': return (
      <Icon size={size} stroke={stroke} fill="none" sw={1.4}>
        <circle cx="12" cy="12" r="8" stroke={stroke} />
        <circle cx="12" cy="12" r="5" stroke={stroke} opacity="0.5" />
      </Icon>
    );
    case 'silver': return (
      <Icon size={size} stroke="#C0BFBF" fill="none" sw={1.4}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="5" opacity="0.5" />
      </Icon>
    );
    case 'usd': return <IconDollar size={size} />;
    case 'eur': return <IconEuro size={size} />;
    default: return null;
  }
};

function PriceRow({ item }) {
  const isUp = item.change > 0;
  return (
    <div style={{
      background: 'linear-gradient(180deg, #221218 0%, #1A0E12 100%)',
      borderRadius: 4,
      padding: '20px 22px 22px',
      border: '0.5px solid rgba(201, 162, 76, 0.14)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle gold seam at top */}
      <div style={{
        position: 'absolute', top: 0, right: 0, left: 0,
        height: 1, background: 'linear-gradient(90deg, rgba(201,162,76,0) 0%, rgba(201,162,76,0.35) 50%, rgba(201,162,76,0) 100%)',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 999,
          background: 'rgba(201, 162, 76, 0.08)',
          border: '0.5px solid rgba(201, 162, 76, 0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#C9A24C',
        }}>
          <PriceIcon kind={item.icon} size={20} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 15,
            color: '#F5EBE0', fontWeight: 500, lineHeight: 1.3,
          }}>{item.label}</div>
          <div style={{
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 11,
            color: 'rgba(245, 235, 224, 0.45)', marginTop: 2,
          }}>{item.unit}</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          padding: '5px 9px 5px 7px', borderRadius: 999,
          background: isUp ? 'rgba(93, 187, 135, 0.14)' : 'rgba(207, 64, 64, 0.14)',
          color: isUp ? '#5DBB87' : '#E07474',
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 12, fontWeight: 500, letterSpacing: '0.04em',
        }}>
          {isUp ? <IconUp size={12} /> : <IconDown size={12} />}
          <span>{toFa(Math.abs(item.change).toFixed(2))}٪</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 32, color: '#F5EBE0', fontWeight: 300,
          letterSpacing: '0.01em', lineHeight: 1,
        }}>{item.value}</span>
        <span style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 11,
          color: 'rgba(245, 235, 224, 0.5)', marginRight: 2,
        }}>تومان</span>
      </div>

      {/* mini sparkline */}
      <div style={{ marginTop: 14, opacity: 0.5 }}>
        <svg viewBox="0 0 200 24" width="100%" height="24" preserveAspectRatio="none">
          <path
            d={sparkPath(item.key)}
            fill="none"
            stroke={isUp ? '#5DBB87' : '#E07474'}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

// Deterministic faux sparklines
function sparkPath(seed) {
  const seeds = {
    gold18: [14, 16, 13, 17, 15, 18, 16, 19, 18, 21, 22, 20],
    gold24: [15, 14, 16, 15, 18, 17, 19, 18, 20, 19, 22, 21],
    silver: [20, 18, 19, 17, 18, 16, 15, 14, 15, 13, 14, 12],
    usd:    [16, 17, 16, 18, 17, 19, 18, 19, 20, 19, 20, 21],
    eur:    [18, 17, 19, 17, 16, 17, 15, 16, 14, 15, 13, 14],
  };
  const arr = seeds[seed] || seeds.gold18;
  const step = 200 / (arr.length - 1);
  return arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i * step).toFixed(1)} ${v}`).join(' ');
}

function PriceBoardScreen() {
  return (
    <div style={{
      background: '#0E060A', minHeight: '100%',
      paddingTop: 56, paddingBottom: 120,
    }}>
      {/* HEADER */}
      <div style={{ padding: '20px 22px 16px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(93, 187, 135, 0.12)',
          border: '0.5px solid rgba(93, 187, 135, 0.3)',
        }}>
          <IconLive />
          <span style={{
            fontFamily: 'Vazirmatn, sans-serif', fontSize: 11,
            color: '#5DBB87', fontWeight: 500,
          }}>زنده ـ به‌روزرسانی ۱۴:۰۳</span>
        </div>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 11, color: '#C9A24C',
          letterSpacing: '0.4em', marginTop: 22,
        }}>قیمت روز · بازار</div>
        <h1 style={{
          fontFamily: 'Vazirmatn, sans-serif',
          fontSize: 28, color: '#F5EBE0', fontWeight: 200,
          margin: '10px 0 4px', letterSpacing: '-0.02em',
        }}>پنج‌شنبه، ۲۴ اردیبهشت</h1>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 12.5,
          color: 'rgba(245, 235, 224, 0.4)', fontWeight: 300,
        }}>نرخ‌های امروز بازار تهران</div>
      </div>

      {/* PRICE LIST */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 10,
        padding: '12px 16px 24px',
      }}>
        {PRICES.map(p => <PriceRow key={p.key} item={p} />)}
      </div>

      {/* Note */}
      <div style={{
        margin: '8px 24px 0', padding: '14px 16px',
        border: '0.5px dashed rgba(201, 162, 76, 0.25)',
        borderRadius: 2, textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'Vazirmatn, sans-serif', fontSize: 11.5,
          color: 'rgba(245, 235, 224, 0.55)', lineHeight: 1.7,
        }}>قیمت‌های اعلام‌شده تنها جنبه‌ی اطلاع‌رسانی دارند<br/>و مبنای خرید یا فروش نیستند.</div>
      </div>
    </div>
  );
}

Object.assign(window, { PriceBoardScreen });
