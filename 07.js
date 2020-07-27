const {program}   = require("@caporal/core");
const ifaces = require('os').networkInterfaces();

program
.command("ip-external","check ip-external")
.action(({logger})=>{
    const http = require('http');
    http.get('http://bot.whatismyipaddress.com', function(res){
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            logger.info(chunk)
        });
    });

})



   program.run()