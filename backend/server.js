import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', (req, res, next) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});

app.get('/api/products/', (req, res, next) => {
  res.send(data.products);
});

app.get('/', (req, res, next) => {
  res.send('Server is running');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is rruning on ${port}`);
});
