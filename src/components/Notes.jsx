import React, {useState, useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"});

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const onChange = (e) => {
    setNote({...note,[e.target.name]: e.target.value})
  }

  return (
    <div className="container mt-3">
    <div className="container" style={{width: "50%"}} >
    <h1 className="text-center">Add A Note</h1>
        <Form className='mt-4'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{marginLeft:"11px",fontWeight:"bold"}}>Title</Form.Label>
      <Form.Control className="rounded-pill" id="title" name="title" type="text" placeholder="Title" onChange={onChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{marginLeft:"11px",fontWeight:"bold"}}>Description</Form.Label>
      <Form.Control style={{ borderRadius: "30px" }} type="text" id="description" name="description" onChange={onChange} placeholder="Description" />
    </Form.Group>
    <Button className="rounded-pill container mt-3" variant="primary" type="submit" onClick={handleClick}>
      Add A Note
    </Button>
  </Form>
  </div>
    <div className="row">
      <h1 className="mt-4 ml-3 text-center">Notes</h1>
      {notes.map((note) => {
        return  <NoteItem key={note._id} note={note}/>;
      })}
    </div>
    </div>
  );
};

export default Notes;
