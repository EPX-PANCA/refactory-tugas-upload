const {program}   = require("@caporal/core");

program.command('obfuscate', 'convert to obfuscate')
    .argument('<word>', 'args word')
    .action(({ logger, args }) => {
        logger.info([...args.word].map(fun => '&#'+fun.charCodeAt(0)).join(";"))
    })

program.run()