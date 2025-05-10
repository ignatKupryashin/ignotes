export interface Note {
    id: number;
    userId: number;
    date: string;
    title: string;
    content: string;
    createdAt: string;
}

export type NoteDTO = Pick<Note, 'title' | 'content'>