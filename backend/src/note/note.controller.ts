import { JwtGuard } from './../auth/guards/jwt.guard';
import { NoteService } from './note.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { NoteDocument } from './schemas/note.schema';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  createNote(
    @Body('title') title: string,
    @Body('description') description?: string,
  ): Promise<NoteDocument> {
    return this.noteService.create(title, description);
  }

  @Get()
  findAllNotes(): Promise<NoteDocument[]> {
    return this.noteService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findNote(@Param('id') id: string): Promise<NoteDocument> {
    return this.noteService.find(id);
  }

}