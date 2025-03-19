import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app = express();

// Middleware setupd
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  }),
);

app.use(bodyParser.json());

// Route handlers
app.use('/api/v1', router);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hi Arko, welcome to your backend server!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
