const fs = require('fs')

const readDir = new Promise((resolve, reject) => {
    fs.readdir('/', (error, response) => {
        if (error) {
            reject(error)
        }
        resolve(response)
    })
})
    readDir.then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })