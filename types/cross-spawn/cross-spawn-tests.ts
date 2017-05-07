
import spawn = require('cross-spawn');

const child = spawn('which', ['cat']);

child.stdout.on('data', data => {
  console.log(data.toString());
});

const path = spawn.sync('which', ['cat']);
console.log(path);
