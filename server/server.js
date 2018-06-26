/* eslint no-console:0 */
import express from 'express';
import fs from 'fs';
import compression from 'compression';
// import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path';
import dbConfig from './config/db';
import {MongoClient} from 'mongodb';
import appRoutes from './routes/appRoutes';
import apiRoutes from './routes/apiRoutes';

const PORT = 8080;
// Named Server if we do static gen, App would be something else
const server = express();
var db;

MongoClient.connect(dbConfig.url, (err, client) => {
  if(err) throw err;

  db = client.db();
  db.createCollection("posts", function(err, res) {
    if (err) throw err;
    console.log("Posts collection created!");
  });
  db.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Users collection created!");
  });
  server.listen(PORT, (err) => { 
    if(err) { 
      console.log(err);
      throw err;
    };
    console.log(`server currently listening at ${PORT}`)
  });

  apiRoutes(server, db);
  appRoutes(server);
});

// EJS Views location
server.set('views', path.join(__dirname, '/views'));
server.set('view engine', 'ejs');

// SPEED BISH
server.use(compression());
server.use(bodyParser.json());
server.use('/public', express.static(path.join(__dirname, '../public')));

// NEED ANYTHING SPECIAL FOR DEV?
if(process.env.NODE_ENV === 'development') {

}
// Expose some globals for the EJS templates
server.use((req,res,next) => {
  res.locals.dump = require('./utils').dump;
  next();
});



