const {program}   = require("@caporal/core");
const ifaces = require('os').networkInterfaces();

program
.command("ip","cek lokal ip")
.action(({logger})=>{
    let address;
    Object.keys(ifaces).forEach(dev => {
      ifaces[dev].filter(details => {
        if (details.family === 'IPv4' && details.internal === false) {
          address = details.address;
        }
      });
    });
    logger.info(address)
})

  program.run()