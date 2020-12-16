fs = require("fs")
const txt = fs.readFileSync(process.argv[2])
console.log(txt.split(/\n/).length - 1)