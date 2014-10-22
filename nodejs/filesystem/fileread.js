var fs = require('fs');

fs.watchFile('hello.txt', function (curr, prev) {
    console.log('the current mtime is: ' + curr.mtime);
    console.log('the previous mtime was: ' + prev.mtime);
});

/**
fs.readFile('/Users/chetanbala/github/nodejs/filesystem/hello.txt',function(err,data){
    if(err) throw err;
    console.log(data);
});
*/

/**
fs.unlink('/Users/chetanbala/github/nodejs/filesystem/hello',function(err){
    if(err) throw err;
    console.log( 'Successfully deleted hello' );
});
*/