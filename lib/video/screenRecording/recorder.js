'use strict';
const { isAndroidConfigured } = require('../../android');
const AndroidRecorder = require('./android/recorder');
const DesktopRecorder = require('./desktop/desktopRecorder');
const FirefoxWindowRecorder = require('./firefox/firefoxWindowRecorder');
const IOSRecorder = require('./ios/iosRecorder');
const IOSSimulatorRecorder = require('./iosSimulator/recorder');

module.exports = function getRecorder(options, browser, baseDir) {
  if (
    options.browser === 'firefox' &&
    options.firefox &&
    options.firefox.windowRecorder
  ) {
    return new FirefoxWindowRecorder(options, browser, baseDir);
  } else if (isAndroidConfigured(options)) {
    return new AndroidRecorder(options);
  } else if (
    options.browser === 'safari' &&
    options.safari &&
    options.safari.ios
  ) {
    return new IOSRecorder(options, baseDir);
  } else if (
    options.browser === 'safari' &&
    options.safari &&
    options.safari.useSimulator
  ) {
    return new IOSSimulatorRecorder(options, baseDir);
  } else {
    return new DesktopRecorder(options);
  }
};
