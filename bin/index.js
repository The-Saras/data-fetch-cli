#! /usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
const { fetchjoke, fetchweather } = require("./utils.js");
const utils = require('./utils.js')

const usage = "\nUsage: tran <command>"; const options = yargs
    .usage(usage)
    .option("l", {
        alias: "available commands", describe: "fetchnews , fetchjoke", demandOption
            : false
    })
    .help(true)
    .argv;

if (yargs.argv._[0] == 'fetchnews') {

    const fetchnews = utils.fetchnews(yargs.argv._);
}

else if (yargs.argv._[0] == 'fetchjoke') {
    const fetchjoke1 = fetchjoke()


}

else if (yargs.argv._[0] == null) {
    console.log(chalk.white.bgRed.bold('You have to give a command...'));
    console.log(chalk.green.bgCyan.italic("Try tran --help command to see available commands"))
}