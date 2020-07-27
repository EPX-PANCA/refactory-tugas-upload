const {program}   = require("@caporal/core");

program
.command("lowercase","to lowercase")
.argument("<word>", "word")
.action(({logger,args})=>{
  logger.info(`Lowercase : ${args.word.toLowerCase()}`)

})

.command("uppercase","to uppercase")
.argument("<word>", "word")
.action(({logger,args})=>{
  logger.info(`Uppercase : ${args.word.toUpperCase()}`)

})


.command("capitalize","to capitalize")
.argument("<word>", "word")
.action(({logger,args})=>{
  logger.info(`Capitalize : ${args.word
          .split(" ")
          .map((value) => value.toLowerCase()
          .replace(value.charAt(0), value.charAt(0).toUpperCase()))
          .join(" ")}`)

})
    

program.run()
