import express, { Request, Response, NextFunction } from 'express';
import app from '@/configs/express';
import { AppDataSource } from '@/configs/dataSource';
import getPhotos from '@/handlers/photos/get';
import postPhoto from '@/handlers/photos/post';
import { Post } from './models/Post';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/photos', getPhotos);
app.post('/photos', postPhoto);

/**
 * 앞선 미들웨어에서 처리되지 않은 오류는 이 미들웨어에서 처리합니다.
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 문제로 오류가 발생했어요.');
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected!');

    const postRepository = AppDataSource.getRepository(Post);

    const post = new Post();
    post.title = 'Hello';
    post.content = 'World';
    await postRepository.save(post);
  })
  .catch((err) => console.log(err));

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
