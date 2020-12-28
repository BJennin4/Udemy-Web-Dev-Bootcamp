const fs = require('fs');
const folderName = process.argv[2] || 'Project';
// console.log(fs);

// ASYNC
// fs.mkdir('TEST', { recursive: true}, (err) => {
//     console.log('In the callback!')
//     if (err) throw err;
// });

// Sync version
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,'')
    fs.writeFileSync(`${folderName}/app.js`,'')
    fs.writeFileSync(`${folderName}/app.css`,'')
} catch(e) {
    console.log('Something went wrong');
    console.log(e);
}
// console.log('I COME AFTER MKDIR IN THE FILE!');