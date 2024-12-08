import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Note} from "../../entities/note.entity";
import {Repository} from "typeorm";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private readonly notebookRepository: Repository<Note>,
    ) {}

    create(title: string, content: string) {
        const notebook = this.notebookRepository.create({ title, content });
        return this.notebookRepository.save(notebook);
    }

    findAll() {
        return this.notebookRepository.find();
    }

    findOne(id: number) {
        return this.notebookRepository.findOneBy({ id });
    }

    async update(id: number, title: string, content: string) {
        const notebook = await this.notebookRepository.findOneBy({ id });
        if (notebook) {
            notebook.title = title;
            notebook.content = content;
            return this.notebookRepository.save(notebook);
        }
    }

    delete(id: number) {
        return this.notebookRepository.delete(id);
    }
}
