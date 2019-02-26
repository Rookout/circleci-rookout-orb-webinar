//server.js
const app = require('./app')
const rook = require('rookout');

rook.start({
    token: process.env.ROOKOUT_TOKEN,
    tags: ['adding-rookout-to-server']
})
app.listen(5678, () => {
    console.log('Example app listening on port http://localhost:5678!');
})
