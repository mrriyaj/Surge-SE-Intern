import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email.controller';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';



@Module({
  controllers: [AppController, EmailController],
  providers: [AppService],
  imports: [UserModule, AuthModule, NoteModule,
    MongooseModule.forRoot('mongodb://localhost:27017/surge'),
    MailerModule.forRoot({
      transport: {
        service: 'Zoho',
        host: 'smtp.zoho.com',
        port: 465,
        auth: {
          user: 'riyajkafar@zohomail.com',
          pass: '$h.aY.f!C#W8UnV',
        }
      },
    }),
  ],
})
export class AppModule { }
