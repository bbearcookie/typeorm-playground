import app from '@/configs/express';
import { AppDataSource } from '@/configs/dataSource';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

AppDataSource.initialize()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
