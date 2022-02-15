import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { authRoutes } from './routes/auth-routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(authRoutes);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!!!!');
});
