import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {NoteService} from "./note.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Notes')
@Controller('note')
export class NoteController {

    constructor(private readonly noteService: NoteService) {
    }

    @Post()
    @ApiOperation({summary: 'Create note'})
    create(@Body() body: { title: string; content: string }) {
        return this.noteService.create(body.title, body.content);
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
