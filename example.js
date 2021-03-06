const FileSystem = require('fs');
const smart = require('./SchellenbergApi');

let myConfig = {
    debugConfig: {
        debugLog: true
    },
    sessionConfig: {
        username: 'UserGoesHERE',
        password: 'PASSWORDgoesHERE',
        cSymbol: 'D19015', //found in decompiled app
        cSymbolAddon: 'i', //same as above
        shcVersion: '2.14.5', //same
        shApiVersion: '2.13' //^
    },
    smartSocketConfig: {
        host: '10.10.80.150', //ip goes here
        port: '4300', //my port was 430 maybe different, may use portcan
        certificate: FileSystem.readFileSync('./Comunication/CA.pem') //extracted cert from app
    }
};
var example = new smart(myConfig, console.log);

example.on('newDV', (deviceID) => {
    console.log('new DeviceValue for' + JSON.stringify(deviceID));
});

example.on('newDI', (deviceID) => {
    console.log('new DeviceInfo for ' + JSON.stringify(deviceID));
});
