require('dotenv').config();
const express = require('express'),
  massive = require('massive'),
  app = express(),
  { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(dbInstance => {
  app.set('db', dbInstance)  //please explain what this is doing.
}).catch(err => console.log(err));

app.post('/api/products', products_controller.create);

app.get('/api/products', products_controller.getAll);

app.get('/api/products/:id', products_controller.getOne);

app.put('/api/products/:id', products_controller.update);

app.delete('/api/products/:id', products_controller.delete);

app.listen(port, () => console.log(`Server running on ${port}`));