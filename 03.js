const {program}   = require("@caporal/core");

program
.command("palindrome","check palindrome")
.argument("<word>", "word")
.action(({ logger, args }) =>{ 
    const a = args.word.replace(/\W/g, "").toLowerCase()
    const b = a.split("").reverse().join("")
     if(a == b){ 
       logger.info(`String: "${args.word}" Is palindrome? Yes`) 
     }else{
       logger.info(`String: "${args.word}" Is palindrome? No`)
     }

})

program.run()


