import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
    @ApiProperty({
        description: 'The title of the note',
        type: String,
    })
    title: string;

    @ApiProperty({
        description: 'The content of the note',
        type: String,
    })
    content: string;
}
