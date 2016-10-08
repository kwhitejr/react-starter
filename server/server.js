import path from 'path';

import compression from 'compression';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import config from '../config';
import dummyData from './dummyData';

import reactMiddleware from './middleware/reactMiddleware';
import {webpackMiddleware, webpackHotMiddleware} from './middleware/webpackMiddleware';

const isProduction = config.env === 'production';
const app = express();

if (!isProduction) {
  app.use(webpackMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(compression());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(reactMiddleware);

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(config.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  dummyData();
});

app.listen(config.server.port, () =>
  console.info(`Server running in ${app.get('env')} on port ${config.server.port}`) // eslint-disable-line no-console
);
