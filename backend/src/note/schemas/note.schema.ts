import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type NoteDecument = Note & Document;

@Schema()
export class Note{
    @Prop({required: true})
    title: String;
    @Prop({required: false})
    description: String;
}

export const NoteSchema = SchemaFactory.createForClass(Note);