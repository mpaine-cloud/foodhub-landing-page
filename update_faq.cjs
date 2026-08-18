const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');
content = content.replace(
  '<div className="py-24 bg-[#1e1b4b]">',
  '<section id="faq" className="py-24 bg-[#1e1b4b]">'
);
content = content.replace(
  '</div>\n    </div>\n  );\n}',
  '</div>\n    </section>\n  );\n}'
);
fs.writeFileSync('src/components/FAQ.tsx', content);
