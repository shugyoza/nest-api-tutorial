import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
