/* eslint-disable no-console,global-require,import/no-dynamic-require */

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const fs = require('fs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('react-dev-utils/chalk');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('./config/paths');
const createDevServerConfig = require('./config/webpack-dev-server.config');
const createWebpackConfigForDevelopment = require('./config/create-webpack-config-for-development');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// Whether or not `react-refresh` is enabled, `react-refresh` is not 100% stable at this time,
// which is why it's disabled by default.

const hasWebpackConfig = fs.existsSync(paths.appWebpackConfig);

// Warn and crash if required files are missing
if (!checkRequiredFiles([])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.HTTP_PORT, 10) || 3001;
const HOST = process.env.HOST || '0.0.0.0';

// We attempt to use the default port but if it is busy, we offer the user to
// run on a different port. `detect()` Promise resolves to the next free port.
choosePort(HOST, DEFAULT_PORT)
  .then((port) => {
    if (port == null) {
      // We have not found a port.
      return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    // Get webpack config
    const config = hasWebpackConfig
      ? require(paths.appWebpackConfig)
      : createWebpackConfigForDevelopment();
    const devSocket = {
      warnings: (warnings) =>
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        devServer.sockWrite(devServer.sockets, 'warnings', warnings),
      errors: (errors) =>
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        devServer.sockWrite(devServer.sockets, 'errors', errors),
    };
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler({
      appName,
      config,
      devSocket,
      urls,
      useYarn,
      webpack,
    });
    // Serve webpack assets generated by the compiler over a web sever.
    const serverConfig = createDevServerConfig({
      allowedHost: urls.localUrlForBrowser,
      contentBase: paths.appPublic,
      port,
      publicPath: config.output.publicPath,
    });
    const devServer = new WebpackDevServer(compiler, serverConfig);
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      if (isInteractive) {
        clearConsole();
      }

      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);
    });

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        devServer.close();
        process.exit();
      });
    });

    if (process.env.CI !== 'true') {
      // Gracefully exit when stdin ends
      process.stdin.on('end', function () {
        devServer.close();
        process.exit();
      });
    }
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
