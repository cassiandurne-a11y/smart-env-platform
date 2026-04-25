const fs = require('fs');
let c = fs.readFileSync('src/components/catalog/ProductCard.tsx', 'utf8');

c = c.replace(
  '  KIT: "📦",\n};',
  '  KIT: "📦",\n  APP: "📲",\n};'
);

c = c.replace(
  '  KIT: "bg-green-500/10 text-green-400 border-green-500/20",\n};',
  '  KIT: "bg-green-500/10 text-green-400 border-green-500/20",\n  APP: "bg-pink-500/10 text-pink-400 border-pink-500/20",\n};'
);

fs.writeFileSync('src/components/catalog/ProductCard.tsx', c);
