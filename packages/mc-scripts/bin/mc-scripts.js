#!/usr/bin/env node

/* eslint-disable no-console */

const mri = require('mri');
const spawn = require('react-dev-utils/crossSpawn');

const flags = mri(process.argv.slice(2), { alias: { help: ['h'] } });
const commands = flags._;

if (commands.length === 0 || (flags.help && commands.length === 0)) {
  console.log(`
  Usage: mc-scripts [command] [options]

  Commands:
  build            Bundles the application in production mode
  compile-html     Compiles index.html.template into index.html, with all the related runtime configuration applied as well as the properly security headers (requires "mc-scripts build" to run before)
  start            Starts the application using webpack dev server
  serve            Serves previously built and compiled application from the public folder
  `);
  process.exit(0);
}

const command = commands[0];

switch (command) {
  case 'build':
  case 'compile-html':
  case 'start':
  case 'serve': {
    const commandArgs = process.argv.slice(2).filter((arg) => command !== arg);
    const result = spawn.sync(
      'node',
      [require.resolve(`../build/${command}`)].concat(commandArgs),
      {
        stdio: 'inherit',
      }
    );
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        );
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default:
    console.log(`Unknown script "${command}".`);
    console.log('Perhaps you need to update mc-scripts?');
    console.log(
      'See: https://www.npmjs.com/package/@commercetools-frontend/mc-scripts'
    );
    break;
}
