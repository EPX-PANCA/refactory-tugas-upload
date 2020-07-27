const { program } = require("@caporal/core");

program
    .command("add", "add all")
    .argument("<add...>", "args add")
    .action(({ logger, args }) => {
        logger.info(`Add Result : ${args.add.reduce((a, b) => a + b)}`)
    })

    .command("substract", "substract all")
    .argument("<substract...>", "args substract")
    .action(({ logger, args }) => {
        logger.info(`Substract Result : ${args.substract.reduce((a, b) => a - b)}`)
    })

    .command("multiply", "multiply all")
    .argument("<multi...>", "args multiply")
    .action(({ logger, args }) => {
        logger.info(`Multiply Result : ${args.multi.reduce((a, b) => a * b)}`)
    })

    .command("divide", "divide all")
    .argument("<div...>", "args divide")
    .action(({ logger, args }) => {
        logger.info(`Divide Result : ${args.div.reduce((a, b) => a / b)}`)
    })

program.run();