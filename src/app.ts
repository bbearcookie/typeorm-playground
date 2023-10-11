import express, { Request, Response, NextFunction } from 'express';
import app from '@/configs/express';
import { AppDataSource } from '@/configs/dataSource';
import postPhoto from '@/handlers/photos/post';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/photos', postPhoto);

/**
 * 앞선 미들웨어에서 처리되지 않은 오류는 이 미들웨어에서 처리합니다.
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 문제로 오류가 발생했어요.');
});

AppDataSource.initialize()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
