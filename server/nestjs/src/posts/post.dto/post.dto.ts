import { IsNotEmpty, MinLength } from 'class-validator';

export class postDto {
  id: number;
  @IsNotEmpty({ message: 'title is required' })
  @MinLength(1, { message: 'title sould not be empty' })
  title: string;

  @IsNotEmpty({ message: 'body is required' })
  @MinLength(1, { message: 'body sould not be empty' })
  body: string;
}
