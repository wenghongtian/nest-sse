import { Module } from '@nestjs/common';
import { WorkflowController } from './app.controller';

@Module({
  imports: [],
  controllers: [WorkflowController],
  providers: [],
})
export class AppModule {}
