const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../site')));

const server = app.listen(8080, () => {
	console.log('Server listening on port 8080');
});
