import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {NoteService} from "./note.service";

@Controller('note')
export class NoteController {

    constructor(private readonly noteService: NoteService) {}

    @Post()
    create(@Body() body: { title: string; content: string }) {
        return this.noteService.create(body.title, body.content);
    }

    @Get()
    findAll() {
        return this.noteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.noteService.findOne(+id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() body: { title: string; content: string },
    ) {
        return this.noteService.update(+id, body.title, body.content);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.noteService.delete(+id);
    }
}
