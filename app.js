const express = require('express')
// const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;
const db = require('./config/db')


const { errorHandler } = require('./middleware/error-middleware')

// routes
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')

db.connect((err) => {
    if (err) console.log("Connection Error");
    else console.log('Database connected')
})

app.use(cors())

// app.use(cookieParser())
app.use(bodyParser.json());
// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});
