import { Handler } from 'express';
import { Photo } from '@/models/Photo';
import { AppDataSource } from '@/configs/dataSource';

const handler: Handler = async (req, res) => {
  const photoRepository = AppDataSource.getRepository(Photo);

  const photos = await photoRepository.find();

  res.json(photos);
};

export default handler;
