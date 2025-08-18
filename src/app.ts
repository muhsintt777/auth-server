import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';

export const createApp = (): Application => {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
};
