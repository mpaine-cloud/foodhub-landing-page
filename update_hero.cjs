const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');
content = content.replace(
  'Control total de tu rentabilidad',
  'Software de Costeo FoodHub by Rubika'
);
fs.writeFileSync('src/components/Hero.tsx', content);
