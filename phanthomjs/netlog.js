var page = require('webpage').create(),
    system = require('system'),
    fs     = require('fs'),
    address;

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];
    var reqpath = 'reqpath.txt';
    var recpath = 'recpath.txt'

    page.onResourceRequested = function(requestData, networkRequest) {
        //fs.write( reqpath, 'requested: ' + JSON.stringify(req, undefined, 4), 'w');
        console.log( JSON.stringify(requestData)+ ",");
        //console.log('requested:'+requestData.id+":" + JSON.stringify(requestData)+',');
        //console.log("<br/>Requested</br>");
        //console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
    };

    page.onResourceReceived = function (response) {
        //fs.write( recpath, 'received: ' + JSON.stringify(res, undefined, 4), 'w');
        console.log(JSON.stringify(response)+",");
        //console.log('received'+response.id+":"+ JSON.stringify(response)+',');
        //console.log("<br/>Received</br>");
        //console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
    };

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        }
        phantom.exit();
    });
}