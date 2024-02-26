const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let savedRolls = [];

app.get('/roll', (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1;
    res.json({ result });
});

app.post('/saveRoll', (req, res) => {
    const roll = req.body.roll;
    savedRolls.push(roll);
    res.json({ message: 'Roll saved!', rolls: savedRolls });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});