import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000';

    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // GET ALL NOTES
    const getNotes = async () => {
      // API CALL
      const response = await fetch (`${host}/api/notes/fetchnotes`,{
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NGY2MDEwNjE3Y2NhNzA5MDc4NzhlIn0sImlhdCI6MTY4MjI0MjE4Mn0.WMoABsrMehnsQ-jI0D1619-tjeks4pZsP1wN39oQwVI'
        }
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);

    }

        // Add a note
        const addNote = async (title,description,tag) => {
          // API CALL
          const response = await fetch (`${host}/api/notes/addnote`,{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NGY2MDEwNjE3Y2NhNzA5MDc4NzhlIn0sImlhdCI6MTY4MjI0MjE4Mn0.WMoABsrMehnsQ-jI0D1619-tjeks4pZsP1wN39oQwVI'
            },
            body: JSON.stringify({title, description, tag})
          });
          const json = response.json();

          const note = {
            "_id": "644516da679f1e76238b0525963b2",
            "user": "6444f601062317cca70907878e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-04-23T11:30:34.806Z",
            "__v": 0
          }
          setNotes(notes.concat(note));
        }
        // delte a note
        const deleteNote = async (id) => {
          //  API CALL
            const response = await fetch (`${host}/api/notes/deletenote/${id}`,{
              method: 'DELETE',
              headers: {
                'Content-Type' : 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NGY2MDEwNjE3Y2NhNzA5MDc4NzhlIn0sImlhdCI6MTY4MjI0MjE4Mn0.WMoABsrMehnsQ-jI0D1619-tjeks4pZsP1wN39oQwVI'
              }});
            const json = response.json();
          console.log(json);
          const newNotes = notes.filter((note)=> { return note._id !== id })
          setNotes(newNotes);
        }
        // Edit a note
        const editNote = async (id, title, description, tag) => {
          // API CALL
          const response = await fetch (`${host}/api/notes/updatenote/${id}`,{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NGY2MDEwNjE3Y2NhNzA5MDc4NzhlIn0sImlhdCI6MTY4MjI0MjE4Mn0.WMoABsrMehnsQ-jI0D1619-tjeks4pZsP1wN39oQwVI'
            },
            body: JSON.stringify({title, description, tag})
          });
          const json = response.json();
        //  LOGIC to edit in client 
          for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (  element._id === id){
              element.title = title;
              element.description = description;
              element.tag = tag;
            }
          }          
        }


    return (
        <NoteContext.Provider value={{ notes,addNote,deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;







