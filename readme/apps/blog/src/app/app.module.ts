import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [PrismaModule,  PostModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
