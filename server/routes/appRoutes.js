import { isAdmin } from '../utils/auth';

export default (server) => {
  server.get('/', (req, res) => {
    res.render('index.ejs',  {
      test: 'Some Test Var'
    });
  });
  server.use(function (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
      res.render('404.ejs', { url: req.url });
      return;
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
};