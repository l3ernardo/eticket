import express from 'express';
import { json } from 'body-parser';

import { authRoutes } from './routes/auth-routes';

const app = express();
app.use(json());

app.use(authRoutes);

app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!!!!');
});
