program = require('./module.js')

program(process.argv[2],process.argv[3],(err,data)=>{
    if (err) {console.log(err)}
    data.forEach(elem => {
        console.log(elem)
    });
})