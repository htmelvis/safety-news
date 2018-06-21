/* eslint no-console:0 */
import express from 'express';
import fs from 'fs';
import compression from 'compression';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path';
import dbConfig from './server/config/db';


const PORT = 8080;
// Named Server if we do static gen, App would be something else
const server = express();

// EJS Views location
server.set('views', path.join(__dirname, 'server/views'));
server.set('view engine', 'ejs');

// SPEED BISH
server.use(compression());
server.use('/public', express.static('./public'));

// NEED ANYTHING SPECIAL FOR DEV?
if(process.env.NODE_ENV === 'development') {

}
// Expose some globals for the EJS templates
server.use((req,res,next) => {
  res.locals.dump = require('./server/utils').dump;
  next();
});

// Require some routes
server.get('/', (req, res) => {
  res.render('index.ejs');
});

server.listen(PORT, (err) => { 
  if(err) console.log(err)
  console.log(`server currently listening at ${PORT}`)
});