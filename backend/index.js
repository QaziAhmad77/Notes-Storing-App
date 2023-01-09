// npm i express validator
// mongoose.set('strictQuery', true);
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const port = process.env.port || 4000;
app.use(express.json());
require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).send('Welcome');
});
app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
  return res.status(404).send('Router Not Found');
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database connected Successfully');
  })
  .catch((error) => {
    console.log('Some error while connecting to database', error);
  });
