const fs = require('fs');
var path = require('path');

function duplicate(filename) {

    const firt = path.basename(filename);
    const ext = path.extname(filename)
    console.log(firt, ext)

    const copie = `${firt}${ext}`;

    const readstream = fs.createReadStream(filename) // lecture
    const writestream = fs.createWriteStream(copie) // ecriture

    readstream.pipe(writestream); // le pipe envois les données de un a autre

}

module.exports = {
    duplicate
}