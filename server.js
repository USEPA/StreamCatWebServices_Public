const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// Define routes and middleware here
// ...

app.get('/',(req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});