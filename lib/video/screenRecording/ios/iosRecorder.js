const log = require('intel').getLogger('browsertime.video');
const path = require('path');
const execa = require('execa');
const util = require('util');
const fs = require('fs');
const rename = util.promisify(fs.rename);

const moduleRootPath = path.resolve(__dirname, '..', '..', '..', '..');
const QVH = path.resolve(moduleRootPath, 'vendor', 'qvh');
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = class IOSRecorder {
  constructor(options) {
    this.options = options;
    this.uuid = options.safari.deviceUDID;
  }

  async start(file) {
    this.filePath = file;
    log.info('Start IOS recorder.');

    this.qvhProcessProcess = execa.command(
      QVH +
        (this.uuid ? ' --udid=' + this.uuid + ' ' : '') +
        ` gstreamer --pipeline "mp4mux name=mux ! filesink location=${this.filePath} queue name=audio_target ! wavparse ignore-length=true ! audioconvert ! faac ! aacparse ! mux. queue name=video_target ! h264parse ! vtdec ! videoconvert ! x264enc  tune=zerolatency !  mux."`,
      { shell: true }
    );
  }

  async stop(destination) {
    log.info('Stop IOS recorder.');

    this.qvhProcessProcess.kill('SIGINT', {
      forceKillAfterTimeout: 2000
    });

    await delay(3000);
    await rename(this.filePath, destination);
    return Promise.resolve(this.qvhProcessProcess);
  }
};
