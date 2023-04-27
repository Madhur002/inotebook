import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noteContext from "../Context/notes/noteContext";
import "../index.css";
const NoteItem = (props) => {
  
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;


  return (
    <div className="col my-3">
      <Card className="card-note container" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text style={{ color: "grey" }}>{note.description}</Card.Text>
          <Card.Text style={{ color: "grey" }}>
            <span style={{ color: "#0275d8" }}>Tag :</span> {note.tag}
          </Card.Text>
          <div className="d-flex justify-content-evenly">
            <Button
              className="rounded-pill btn-1 d-flex justify-content-evenly"
              variant="primary"
              onClick={()=>{updateNote(note)}}
            >
              Edit
              <i className="bi bi-trash3-fill mx-2 rounded-circle btn-icon1"></i>
            </Button>
            <Button
              className="rounded-pill btn-2 d-flex justify-content-evenly"
              variant="primary"
              onClick={() => {
                deleteNote(note._id);
              }}
            >
              Delete
              <i className="bi bi-pen-fill mx-2 rounded-circle btn-icon2"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>

  );
};

export default NoteItem;
