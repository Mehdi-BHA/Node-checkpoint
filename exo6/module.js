fs = require("fs")

module.exports = (dirPath, extension, callback) =>{
    fs.readdir(dirPath, 'utf8', (err, data) => {
        if (err) {return callback(err)}
        data = data.filter(file => file.split('.')[1] === extension)
        callback(null,data)
        })
    }
    
