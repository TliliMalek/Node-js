var fs = require('fs')

fs.readFile('welcome.txt', 'utf8', function(error, data) {
    console.log(data)
})
