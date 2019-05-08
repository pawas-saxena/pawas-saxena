const express = require('express');
const app = express();
const path = require('path');


app.get('/', (request, response) => {
   response.sendFile(path.join(__dirname, '/index.html'))
});


app.listen('3000', () => {
    console.log('success app listening on port 3000')
});