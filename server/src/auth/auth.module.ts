import { Module } from '@nestjs/common';
import { AuthService } from '~/auth/services/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from '~/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '~/auth/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
