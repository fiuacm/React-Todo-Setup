import express from 'express'
import path from 'path'
var app = express();

// We're returning a function which later we can call on the index.js file
var server = () => {
    app.use(express.static('client/public'))

    app.get('/', (req, res) => {
      res.send('hello');
    })
    app.listen(3000, () => {
        console.log('App listening on port 3000!')
    })
}

export default server;
