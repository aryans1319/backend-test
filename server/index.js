const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const apiRoutes = require('./routes/index');
const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', apiRoutes)
app.get('/', (req, res) => {
    res.send('Server runnning fine!')
});


const PORT = 5000;
app.listen(PORT, console.log(`Server Running Successfully on ${PORT}`));