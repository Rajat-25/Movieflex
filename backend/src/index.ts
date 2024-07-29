import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectToDb from './db';
import indexRouter from './routes';
const app = express();
const PORT = 3000 || process.env.PORT;

connectToDb();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/v1', indexRouter);

// For Testing purpose
app.get('/', (req, res) => {
  return res.status(200).send('hey There 👋');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
