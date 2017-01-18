import express from 'express'
import path from 'path'
var app = express();

/*
  Here is where we're going put most of the serve logic
*/
var server = () => {
    // We do this can send our html and js static files to the browser through the server
    app.use(express.static('client/public'))


    // 3000 is the port number, this could be any number from  0 to 9999
    app.listen(3000, () => {
        console.log('App listening on port 3000!')
    })
}

export default server;
