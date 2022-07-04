const path = require('path');
const rootDir = process.cwd();

module.exports = {
  packagerConfig: {
    asar: true,
    executableName: 'Awesome Music Player',
    appCopyright: 'Copyright (C) 2022 MHP, Steffen Dielmann',
  },
  makers: [
    {
      // Squirrel.Windows is a no-prompt, no-hassle, no-admin method of installing
      // Windows applications and is therefore the most user friendly you can get.
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-typescript-webpack-2022',
      },
    },
    {
      // The Zip target builds basic .zip files containing your packaged application.
      // There are no platform specific dependencies for using this maker and it will run on any platform.
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      // The deb target builds .deb packages, which are the standard package format for Debian-based
      // Linux distributions such as Ubuntu.
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      // The RPM target builds .rpm files, which is the standard package format for
      // RedHat-based Linux distributions such as Fedora.
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    [
      // The Webpack plugin allows you to use standard Webpack tooling to compile both your main process code
      // and your renderer process code, with built in support for Hot Module Reloading in the renderer
      // process and support for multiple renderers.
      '@electron-forge/plugin-webpack',
      {
        // fix content-security-policy error when image or video src isn't same origin
        devContentSecurityPolicy: '',
        port: 3000, // Webpack Dev Server port
        mainConfig: path.join(rootDir, 'tools/webpack/webpack.main.js'),
        renderer: {
          config: path.join(rootDir, 'tools/webpack/webpack.renderer.js'),
          entryPoints: [
            {
              // Window process name
              name: 'app_window',
              // React Hot Module Replacement (HMR)
              rhmr: 'react-hot-loader/patch',
              html: path.join(rootDir, 'src/renderer/app.html'),
              js: path.join(rootDir, 'src/renderer/renderer.tsx'),
              preload: {
                js: path.join(rootDir, 'src/renderer/preload.tsx'),
              },
            },
          ],
        },
        devServer: {
          liveReload: false,
        },
      },
    ],
  ],
};
