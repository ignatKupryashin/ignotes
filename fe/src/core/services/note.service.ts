import http from "./http.service.ts";
import {Note, NoteDTO} from "../models/Note.ts";

export const getNote = async (): Promise<Note[]> => {
    const response = await http.get('/note');
    return response.data;
};

export const createNote = async (newNote: NoteDTO): Promise<Note> => {
    const response = await http.post('/note', newNote);
    return response.data;
};
//
// const deleteItem = async (id) => {
//     await http.delete(`/items/${id}`);
// };
