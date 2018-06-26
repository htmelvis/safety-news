
import { ObjectID } from 'mongodb';
export default (server, db) => {
  server.get('/api/posts', (req, res) => {
    db.collection('posts').find({}).toArray((err, posts) => {
      res.send(posts);
    });
  });

  server.post('/api/posts', (req, res) => {
    // look for a post with duplicate url
    db.collection('posts').findOne({ url: req.body.url }, (err, result) => {
      if (result) {
        res.status(500).send({ error: 'A post to this url already exists. Duplicate posts are not allowed' });
      } else {
        // ok none found, insert
        db.collection('posts').insertOne({
          title: req.body.title,
          url: req.body.url,
          desc: req.body.desc
        }, (err, result) => {
          if (err) {
            res.status(500).send({ status: 'error', error: err });
          } else {
            res.status(201).send({ status: 'success' });
          }
        });
      }
    });
  });

  server.patch('/api/posts/:id', (req, res) => {
    let postId = req.params.id;
    console.log(postId);
    let updatedValues = { $set: {}};
    Object.keys(req.body).forEach(key => {
      updatedValues.$set[key] = req.body[key];
    });
    console.log(updatedValues);
    db.collection('posts').updateOne({_id: ObjectID(postId)}, updatedValues, (err, result) => {
      if(err) {
        res.status(500).send({error:err});
      } else {
        res.status(201).send({status: 'success'});
      }
    })
  })


}