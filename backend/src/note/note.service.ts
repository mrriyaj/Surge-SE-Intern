import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteDecument } from './schemas/note.schema';

@Injectable()
export class NoteService {
    constructor(@InjectModel('Note')private readonly NoteModel:
    Model<NoteDecument>) {}

    async create(title: string, description: string): Promise<NoteDecument>{
        const newNote = new this.NoteModel({title, description});
        return newNote.save();
    }
}
