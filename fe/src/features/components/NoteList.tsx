import {createNote, getNote} from "../../core/services/note.service.ts";
import {useEffect, useState} from "react";
import {Note} from "../../core/models/Note.ts";

const NoteList = () => {
    const [noteList, setNoteList] = useState<Note[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getNoteList();
    }, [])

    const getNoteList = async () => {
        setLoading(true);
        try {
            const data = await getNote();
            setNoteList(data);
        } catch (error) {
            console.error('Ошибка при загрузке заметок:', error);
        } finally {
            setLoading(false);
        }
    }

    const createStandartNote = async () => {
        setLoading(true);
        try {
            const newNote = await createNote({
                title: 'Новый заголовок' + String(noteList.length),
                content: 'Текст заметки'
            })
            setNoteList([...noteList, newNote]);
        } catch (error) {
            console.error('Ошибка при создании заметки:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={() => createStandartNote()}>Создать заметку</button>
            {loading
                ? <p>Loading...</p>
                : <div>
                    {
                        noteList.length === 0 && <p>Нет данных</p>
                    }
                    {noteList.map((note) =>
                        <div key={note.id}>
                            {note.title} - {note.content}
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default NoteList;