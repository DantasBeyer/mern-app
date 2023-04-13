const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


//telling express were to find statioc files like css and other "src" like an IMG thath we will use in the server
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));