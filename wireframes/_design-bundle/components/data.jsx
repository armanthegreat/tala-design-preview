// data.jsx — placeholder content for Tala

// Curated Unsplash jewelry photo IDs. We pass &w=800&q=80 in Img helper if needed.
const PHOTOS = {
  // hero-y showroom shots
  heroNecklace:   'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80',
  heroDiamond:    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80',
  goldChain:      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
  pearls:         'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=80',
  earringsGold:   'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=80',
  ringBox:        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80',
  bracelet:       'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=80',
  diamondRing:    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80',
  goldRing:       'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=900&q=80',
  necklaceVelvet: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=80',
  earrings2:      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=80',
  bracelet2:      'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=900&q=80',
  ringHand:       'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=900&q=80',
  pendant:        'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=80',
  sapphire:       'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=900&q=80',
  emerald:        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80',
  ringPair:       'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=900&q=80',
  goldBangle:     'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=900&q=80',
  modelEarring:   'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80',
  modelNecklace:  'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80',
};

// Gallery feed posts
const FEED = [
  {
    id: 'p1',
    image: PHOTOS.diamondRing,
    title: 'حلقه الماس سولیتر',
    subtitle: 'مجموعه‌ی برلیان · ۱۸ عیار',
    caption: 'تک‌نگین برلیان با تراش رویال در زمینه‌ی طلای سفید.',
    likes: 248,
    tag: 'انگشتر',
    date: 'دیروز',
  },
  {
    id: 'p2',
    image: PHOTOS.necklaceVelvet,
    title: 'گردنبند یاقوت کبود',
    subtitle: 'مجموعه‌ی شبانه',
    caption: 'یاقوت کبود سیلانی، نشانده در طلای زرد ۱۸ عیار.',
    likes: 412,
    tag: 'گردنبند',
    date: '۲ روز پیش',
  },
  {
    id: 'p3',
    image: PHOTOS.goldBangle,
    title: 'دستبند طلای زرد',
    subtitle: 'مجموعه‌ی روز',
    caption: 'دستبند پیچ‌خورده، طرحی به الهام از ریسمان‌های کهن پارسی.',
    likes: 156,
    tag: 'دستبند',
    date: '۳ روز پیش',
  },
  {
    id: 'p4',
    image: PHOTOS.modelEarring,
    title: 'گوشواره‌ی برلیان آویزدار',
    subtitle: 'مجموعه‌ی خاص',
    caption: 'آویزی از چندین برلیان ریز، در طلای رز.',
    likes: 521,
    tag: 'گوشواره',
    date: 'هفته‌ی پیش',
  },
];

// Showroom collections
const COLLECTIONS = [
  { id: 'c1', title: 'رویای یاقوت', subtitle: 'مجموعه‌ی شبانه', image: PHOTOS.necklaceVelvet, badge: 'مجموعه‌ی برتر' },
  { id: 'c2', title: 'برلیان روز', subtitle: 'مجموعه‌ی نشان', image: PHOTOS.diamondRing, badge: 'تازه' },
  { id: 'c3', title: 'طلای زرد', subtitle: 'مجموعه‌ی روز', image: PHOTOS.goldBangle, badge: '' },
];

const FEATURED = [
  { id: 'f1', title: 'انگشتر سولیتر', code: 'TL-۲۴۰۱', price: '۸۲٫۵', image: PHOTOS.diamondRing },
  { id: 'f2', title: 'گردنبند یاقوت', code: 'TL-۲۴۰۲', price: '۱۴۶٫۸', image: PHOTOS.pendant },
  { id: 'f3', title: 'گوشواره‌ی برلیان', code: 'TL-۲۴۰۳', price: '۶۸٫۲', image: PHOTOS.earringsGold },
  { id: 'f4', title: 'دستبند پیچ', code: 'TL-۲۴۰۴', price: '۹۲٫۰', image: PHOTOS.bracelet2 },
];

// Price board items
const PRICES = [
  { key: 'gold18', label: 'طلای ۱۸ عیار', unit: 'هر گرم', value: '۳٬۸۲۴٬۵۰۰', change: +1.85, icon: 'gold' },
  { key: 'gold24', label: 'طلای ۲۴ عیار', unit: 'هر گرم', value: '۵٬۰۹۸٬۲۰۰', change: +1.62, icon: 'gold' },
  { key: 'silver', label: 'نقره',         unit: 'هر گرم', value: '۲۸٬۴۲۰',    change: -0.34, icon: 'silver' },
  { key: 'usd',    label: 'دلار آمریکا',  unit: 'تومان', value: '۸۵٬۲۴۰',    change: +0.12, icon: 'usd' },
  { key: 'eur',    label: 'یورو',         unit: 'تومان', value: '۹۲٬۸۱۰',    change: -0.28, icon: 'eur' },
];

// Favorites — subset + small variations of feed
const FAVORITES = [
  { id: 'f1', image: PHOTOS.diamondRing,   title: 'حلقه‌ی سولیتر',     code: 'TL-۲۴۰۱' },
  { id: 'f2', image: PHOTOS.necklaceVelvet,title: 'گردنبند یاقوت',     code: 'TL-۲۴۰۲' },
  { id: 'f3', image: PHOTOS.earringsGold,  title: 'گوشواره‌ی برلیان',  code: 'TL-۲۴۰۳' },
  { id: 'f4', image: PHOTOS.goldBangle,    title: 'دستبند پیچ',        code: 'TL-۲۴۰۴' },
  { id: 'f5', image: PHOTOS.pearls,        title: 'گردنبند مروارید',   code: 'TL-۲۴۰۵' },
  { id: 'f6', image: PHOTOS.modelNecklace, title: 'گردنبند آویز',      code: 'TL-۲۴۰۶' },
];

const TAGS = ['همه', 'انگشتر', 'گردنبند', 'گوشواره', 'دستبند', 'مدال', 'سرویس'];

Object.assign(window, { PHOTOS, FEED, COLLECTIONS, FEATURED, PRICES, FAVORITES, TAGS });
