const express = require('express');
const path = require('path');

const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'public folder')));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));