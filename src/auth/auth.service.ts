import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    signin() {
        return { msg: 'signed up' };
    }

    signup() {
        return { msg: 'signed in' };
    }

}
