import { Body, Controller, Post } from '@nestjs/common';
import { NoteService } from './note.service';

//title description
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}

    @Post()
    createNote(
        @Body('title') title : string,
        @Body('description') description?: string, ){
        return this.noteService.create(title , description);
    }
}
