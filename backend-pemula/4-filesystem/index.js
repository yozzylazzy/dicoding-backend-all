const fs = require('fs');

// callback version
const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
}
fs.readFile('notes.txt', 'UTF-8', fileReadCallback);

// async version
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);