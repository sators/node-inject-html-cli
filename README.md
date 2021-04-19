# node-inject-html-cli

A CLI interface for the [node-inject-html](https://www.npmjs.com/package/node-inject-html) library

## Usage via global install

```
// Install Globally
$ npm install -g node-inject-html-cli
```
Then...
```
// Inject a script to index.html
$ inject-html -f index.html --headStart='<script src="https://someanalyticsfunction.com"></script>'
```
```
// Add a meta tag to all .html files
$ inject-html -f **/*.html --headEnd='<meta name="viewport" content="width=device-width, initial-scale=1">'
```

## Usage via npx

```
// Inject a script to index.html
$ npx node-inject-html-cli -f index.html --headStart='<script src="https://someanalyticsfunction.com"></script>'
```
```
// Add a meta tag to all .html files
$ npx node-inject-html-cli -f **/*.html --headEnd='<meta name="viewport" content="width=device-width, initial-scale=1">'
```

## Options

```
$ inject-html
Usage: inject-html [options]

Options:
      --version    Show version number                                 [boolean]
  -f, --file       File to inject, supports glob patterns             [required]
      --headStart  Inject content inside the opening <head>
      --headEnd    Inject content right before the closing </head>
      --bodyStart  Inject content inside the opening <body>
      --bodyEnd    Inject content right before the closing </body>
      --help       Show help                                           [boolean]

```