fs = require("fs")
fs.readdir(process.argv[2], 'utf8', (err, files) => {
    if (err) throw err;
    const filteredFiles = files.filter(file => file.split('.')[1] === process.argv[3])
    filteredFiles.forEach(elem => {
        console.log(elem)
    });
})

