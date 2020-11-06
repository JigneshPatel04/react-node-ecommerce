import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res, next) => {
  res.send('Server is running');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is rruning on ${port}`);
});
