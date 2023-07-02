import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  InternalServerErrorException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { postDto } from './post.dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private services: PostsService) {}

  @Get()
  async getposts() {
    const posts = await this.services.getPostsFromDb();
    if (posts.length === 0 || !posts) {
      throw new NotFoundException('posts not found');
    }
    return posts;
  }

  @Get(':id')
  async getPostById(@Param() params) {
    const post = await this.services.getPostByIdFromDb(params.id);
    if (post.length === 0 || !post)
      throw new NotFoundException('post not found ');

    return post;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createPost(@Body() post: postDto) {
    const newPost = await this.services.addPostToDb(post);
    if (newPost.raw.affectedRaws === 0)
      throw new InternalServerErrorException('seomthing went wrong');

    return 'post created successfully';
  }

  @Delete(':id')
  async deletePost(@Param() params) {
    const post = await this.services.deletePostFromDb(params.id);
    if (post.affected === 0)
      throw new NotFoundException('no post was found to delete');

    return 'post deleted sccessfully';
  }
}
