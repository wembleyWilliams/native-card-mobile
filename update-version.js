const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

const version = packageJson.version;
const versionFilePath = path.join(__dirname, 'version.txt');

fs.writeFileSync(versionFilePath, version, 'utf8');
console.log(`Version ${version} written to version.txt`);
