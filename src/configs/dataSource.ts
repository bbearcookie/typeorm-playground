import { DataSource } from 'typeorm';
import { Photo } from '@/models/Photo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'testuser',
  password: '1234',
  database: 'typeorm_study',
  synchronize: true,
  logging: true,
  entities: [Photo],
  subscribers: [],
  migrations: [],
});
