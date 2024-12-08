import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {NoteService} from "./note.service";
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateNoteDto} from "./dto/create-note.dto";

@ApiTags('Notes')
@Controller('note')
export class NoteController {

    constructor(private readonly noteService: NoteService) {
    }

    @Post()
    @ApiOperation({summary: 'Create note'})
    @ApiBody({type: CreateNoteDto})
    create(@Body() body: CreateNoteDto) {
        return this.noteService.create(1, body.title, body.content);
    }

    @Get()
    @ApiOperation({summary: 'Get all notes'})
    findAll() {
        return this.noteService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get note by id'})
    findOne(@Param('id') id: string) {
        return this.noteService.findOne(+id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update note'})
    update(
        @Param('id') id: string,
        @Body() body: { title: string; content: string },
    ) {
        return this.noteService.update(+id, body.title, body.content);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete note'})
    delete(@Param('id') id: string) {
        return this.noteService.delete(+id);
    }
}
