const keysym = require('keysym');
const mac = require('./mac.js');
const windows = require('./windows.js');

function keycodeToKeysym(keyCode) {
    if(process.platform === 'win32') {
        return windows[keyCode];
    } else if(process.platform === 'darwin') {
        return mac[keyCode]
    } else if(process.platform === 'linux') {
        return keyCode;
    } else {
        // Safer
        return undefined;
    }
}

module.exports = keycodeToKeysym;
