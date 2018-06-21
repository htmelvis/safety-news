let dbConfig = {};


let dev = {
  'url': 'mongodb://localhost/safety-news' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
};

// let prod = {
//   'url': 'mongodb://*****@127.0.0.1:27017/safety-views' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
// };

if (process.env.NODE_ENV == 'production') {
  dbConfig = prod;
} else {
  dbConfig = dev;
}

export default dbConfig;