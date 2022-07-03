import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// '/auth
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    // /auth/signup
    @Post('signup')
    signup() {
        return 'signed up';
    }

    // /auth/signin
    @Post('signin')
    signin() {
        return 'signed in';
    }
}
