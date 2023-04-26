import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "644516da679f1eb0234525963b2",
            "user": "6444f6010617cca70907878e",
            "title": "Madhur sharma",
            "description": "This is Madhur description",
            "tag": "this is Madhur tag",
            "date": "2023-04-23T11:30:34.806Z",
            "__v": 0
          },
          {
            "_id": "644516d234a56679f1eb0525963b2",
            "user": "6444f6010617cca70907878e",
            "title": "Samosa sharma",
            "description": "This is samosa description",
            "tag": "this is samosa tag",
            "date": "2023-04-23T11:30:34.806Z",
            "__v": 0
          },
          {
            "_id": "644516da6795464f1eb0525963b2",
            "user": "6444f6010617cca70907878e",
            "title": "Samosa sharma",
            "description": "This is samosa description",
            "tag": "this is samosa tag",
            "date": "2023-04-23T11:30:34.806Z",
            "__v": 0
          },
          {
            "_id": "644516da679f168eb0525963b2",
            "user": "6444f6010617cca70907878e",
            "title": "Samosa sharma",
            "description": "This is samosa description",
            "tag": "this is samosa tag",
            "date": "2023-04-23T11:30:34.806Z",
            "__v": 0
          }
        ];

        const [notes, setNotes] = useState(notesInitial);

        // Add a note
        const addNote =(title,description,tag) => {
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
        const deleteNote = (id) => {
          console.log("this is user id" + id)
          const newNotes = notes.filter((note)=> {return note._id !== id })
          setNotes(newNotes);
        }
        // update a note
        const updateNote = () => {
          
        }


    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;