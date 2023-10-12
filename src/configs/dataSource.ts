import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Photo } from '@/models/Photo';
import { User } from '@/models/User';
import { Post } from '@/models/Post';
import { Comment } from '@/models/Comment';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'testuser',
  password: '1234',
  database: 'typeorm_study',
  synchronize: true,
  // logging: true,
  entities: [Photo, User, Post, Comment],
  subscribers: [],
  migrations: [],
  namingStrategy: new SnakeNamingStrategy(),
});
