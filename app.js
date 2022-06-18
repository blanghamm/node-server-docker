const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello is this working</h1>
  `);
});
app.use('/users', usersRouter);

app.listen('3000', () => {
  console.log('Running on port 3000')
})
