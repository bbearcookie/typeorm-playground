import app from '@/configs/express';
import { AppDataSource } from '@/configs/dataSource';
import postPhoto from '@/handlers/photos/post';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/photos', postPhoto);

AppDataSource.initialize()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
