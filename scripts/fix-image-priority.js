const fs = require('fs');
const path = require('path');

const files = [
  'components/AboutUs.tsx',
  'components/ConstructionSection.tsx',
  'components/FacilityManagementSection.tsx',
  'components/HvacPlumbingSection.tsx',
  'components/InsuranceSection.tsx',
  'components/LogisticsSection.tsx',
  'components/ManufacturingSection.tsx',
  'components/OilGasSection.tsx',
  'components/RealEstateSection.tsx',
  'components/TelecommunicationSection.tsx',
  'components/UtilitiesSection.tsx',
  'app/blog/best-ui-experience-spacecapture/page.tsx',
  'app/blog/spacecapture-playstore-launch/page.tsx',
  'app/playstore-app-download/page.tsx',
];

const sizes = '(max-width: 1024px) 100vw, 50vw';

for (const f of files) {
  const p = path.resolve(f);
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  // Replace standalone priority prop with sizes + loading lazy, preserving indentation
  s = s.replace(/^(\s+)priority\s*$/gm, (m, indent) => {
    return indent + `sizes="${sizes}"\n` + indent + 'loading="lazy"';
  });
  if (s !== before) {
    fs.writeFileSync(p, s);
    console.log('Updated ' + f);
  } else {
    console.log('No changes ' + f);
  }
}
