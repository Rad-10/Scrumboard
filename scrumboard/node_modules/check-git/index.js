const fs = require('fs');
const path = require('path');

function checkGit(dir) {
  return fs.existsSync(path.join(dir, '.git'));
}

module.exports = checkGit;