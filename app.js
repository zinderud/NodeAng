import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';


const port = parseInt(process.env.PORT, 10) || 8000;

// Set up the express app
const app = express();