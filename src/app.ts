import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { routes } from './routes/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(routes);



app.get('/', (request, response) => {
  return response.json({
    message: 'Hello, World'
  })
});

app.listen(4000, () => console.log('Server is running on http://localhost:4000/'));