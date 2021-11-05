import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { ifoodRoutes } from './modules/ifood/routes/ifood.routes';
import { uberRoutes } from './modules/uber/routes/uber.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(ifoodRoutes);
app.use(uberRoutes);



app.get('/', (request, response) => {
  return response.json({
    message: 'Hello, World'
  })
});

app.listen(4000, () => console.log('Server is running on http://localhost:4000/'));