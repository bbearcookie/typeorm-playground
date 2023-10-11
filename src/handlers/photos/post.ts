import { Handler } from 'express';
import { z } from 'zod';
import { Photo } from '@/models/Photo';
import { AppDataSource } from '@/configs/dataSource';
import { zodValidator } from '@/utils/zod';

const requestSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    filename: z.string(),
    views: z.number(),
    isPublished: z.boolean(),
  }),
});

type RequestData = z.infer<typeof requestSchema>;

const handler: Handler = async (req, res) => {
  const { body } = req as unknown as RequestData;
  const { name, description, filename, views, isPublished } = body;

  const photo = new Photo();
  photo.name = name;
  photo.description = description;
  photo.filename = filename;
  photo.views = views;
  photo.isPublished = isPublished;

  await AppDataSource.manager.save(photo);

  res.json('POST /photos 포토 추가 완료');
};

export default [zodValidator(requestSchema), handler];
