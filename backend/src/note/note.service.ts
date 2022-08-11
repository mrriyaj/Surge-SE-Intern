import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { NoteDocument } from './schemas/note.schema';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel('Note')
    private readonly noteModel: Model<NoteDocument>,
  ) {}

  async create(
    title: string,
    description: string,
  ): Promise<NoteDocument> {
    const newNote = new this.noteModel({ title, description });
    return newNote.save();
  }

  async findAll(): Promise<NoteDocument[]> {
    return this.noteModel.find().exec();
  }

  async find(id: string): Promise<NoteDocument> {
    return this.noteModel.findById(id).exec();
  }


}