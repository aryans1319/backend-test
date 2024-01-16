const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

app.get('/', (req, res) => {
    res.send('Server runnning fine!')
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const PORT = 5000;
app.listen(PORT, console.log(`Server Running Successfully on ${PORT}`));