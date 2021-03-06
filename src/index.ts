import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.json({
    message: "Api is running"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is runnig port ${process.env.LOCAL_HOST}`)
})