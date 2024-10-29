#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Use command-line arguments or default to specific folders
const assetFolders = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['src/assets/images', 'src/assets/icons'];

// Set the output directory
const outputDir = path.resolve('src/constants');

// Ensure the constants directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

assetFolders.forEach(folder => {
  const folderPath = path.resolve(folder);
  const fileName = `${path.basename(folder)}.js`; // e.g., images.js, icons.js
  const exportFilePath = path.join(outputDir, fileName); // Save in constants folder

  // Check if the folder exists
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder not found: ${folderPath}`);
    return;
  }

  let imports = '';
  let exports = 'export default {\n';

  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  files.forEach(file => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);

    if (['.jpg', '.jpeg', '.png', '.svg', '.vue'].includes(ext.toLowerCase())) {
      // Create import statement
      imports += `import ${name} from '../assets/${path.basename(folder)}/${file}';\n`;
      exports += `  ${name},\n`; // Add to the export object
    }
  });

  exports += '};\n';

  // Write to the JavaScript file in the constants directory
  const content = `${imports}\n${exports}`;
  fs.writeFileSync(exportFilePath, content);

  console.log(`Generated file: ${exportFilePath}`);
});
