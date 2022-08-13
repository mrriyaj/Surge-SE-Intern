import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Res,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { UserService } from './user.service';
  
  
  @Controller('users')
  export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }

    @Get('user/:email')
    async findOne(@Param('email') email: string){
      return await this.service.findByEmail(email);
    }
  
    @Get('user/:id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      return await this.service.createDetails(createUserDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.service.update(id, updateUserDto);
    }
  
    @Delete('user/:id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }

  }