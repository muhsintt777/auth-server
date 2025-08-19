import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json } from 'express';
import morgan from 'morgan';

import { corsOptions } from 'configs/cors';

import { errorHandler } from './error-handler';
import { healthHandler } from './health-handler';
import { metaDataHandler } from './meta-data';
import { notFoundHandler } from './not-found-handler';
import { appRouter } from './router';

const app = express();

app.use(morgan(':method :url :status'));
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use('/api', appRouter);
app.use('/metadata', metaDataHandler);
app.use('/health', healthHandler);
app.use('/*', notFoundHandler);
app.use(errorHandler);

export { app };
