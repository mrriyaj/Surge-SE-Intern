import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { exisitingUserDTO } from 'src/user/dto/existing_user.dto';
import { NewUserDTO } from 'src/user/dto/new-user.dto';
import { UserDetails } from '../user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() user: NewUserDTO): Promise<UserDetails | null | string> {
        return this.authService.register(user);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: exisitingUserDTO): Promise<{token: string} | null | string> {
        return this.authService.login(user);
    }
}

