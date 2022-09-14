const fs = require('fs');
const path = require('path');

function installPostCommit() {
  const hook = path.join(__dirname, './hooks/post-commit');
  const destinyPath = path.join(__dirname, '../../.git/hooks/post-commit');
  fs.copyFileSync(hook, destinyPath);
}

function main() {
  installPostCommit();
  console.log(`
  '+-----------+'
  '| H O O K S |'
  '+-----------+'
  `);
}

main();
