var page = require('webpage').create();
page.open('http://www.cisco.com/', function () {
    page.render('cisco.png');
    phantom.exit();
});