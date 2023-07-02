import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  async getPostsFromDb(): Promise<Posts[]> {
    return await this.postsRepository.find();
  }

  async getPostByIdFromDb(id: number): Promise<Posts[]> {
    return await this.postsRepository.find({ where: [{ id: id }] });
  }

  async deletePostFromDb(post: Posts) {
    return await this.postsRepository.delete(post);
  }

  async addPostToDb(post: Posts) {
    return this.postsRepository.insert(post);
  }
}
