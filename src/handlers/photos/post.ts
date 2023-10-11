import { Handler } from 'express';
import { z } from 'zod';
import { Photo } from '@/models/Photo';
import { AppDataSource } from '@/configs/dataSource';

const requestSchema = z.object({
  // body: z.object({
  //   username: z.string(),
  //   password: z.string(),
  // }),
});

type RequestData = z.infer<typeof requestSchema>;

const handler: Handler = async (req, res) => {
  // const { body } = req as unknown as RequestData;
  // const { username, password } = body;

  const photo = new Photo();
  // photo.name = 'Me and Bears';
  photo.description = 'I am near polar bears';
  // photo.filename = 'photo-with-bears.jpg';
  photo.views = 1;
  photo.isPublished = true;

  await AppDataSource.manager.save(photo);

  res.json('POST /photos 포토 추가 완료');
};

export default handler;
