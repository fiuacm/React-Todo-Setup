import express from 'express'
import path from 'path'
import moongose from 'moongose'
var app = express();

/*

*/
var server = () => {
    app.use(express.static('client/public'))

    app.listen(3000, () => {
        console.log('App listening on port 3000!')
    })
}

export default server;
