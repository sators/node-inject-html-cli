#!/usr/bin/env node
const fs = require('fs');
const { exit } = require("process")
const glob = require("glob")
const inject = require('node-inject-html').default
const argv = require('yargs')
    .scriptName("inject-html")
    .usage('Usage: $0 [options]')
    .example('$0 -f index.html --headStart=\'<script src="https://someanalyticsfunction.com"></script>\'', 'Add a script inside the opening <head> tag of index.html')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'File to inject, supports glob patterns')
    .demandOption(['f'])
    .describe('headStart', 'Inject content inside the opening <head>')
    .describe('headEnd', 'Inject content right before the closing </head>')
    .describe('bodyStart', 'Inject content inside the opening <body>')
    .describe('bodyEnd', 'Inject content right before the closing </body>')
    .help()
    .argv

const injectHtml = async () => {
    console.log(argv._, argv.f)
    const files = argv._.length ? argv._ : glob.sync(argv.file)
    files.forEach(file => {
        const html = fs.readFileSync(file, "utf8")
        const newHtml = inject(html, {
            headStart: argv.headStart,
            headEnd: argv.headEnd,
            bodyStart: argv.bodyStart,
            bodyEnd: argv.bodyEnd,
          });
        fs.writeFileSync(file, newHtml, "utf8")
    })
}

injectHtml()
    .then(() => {
        exit(0)
    }).catch(err => {
        console.error(err)
        exit(1)
    })