import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../index.css";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };

  return (
    <>
      {/* MODAL */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              marginTop: "150px",
              borderRadius: "30px",
              backgroundColor: "rgba(255, 255, 255, 0.20)",
              backdropFilter: "blur(50px)",
              border: "5px solid white"
            }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ marginLeft: "11px", fontWeight: "bold" }}
                  >
                    Title
                  </Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    name="etitle"
                    type="text"
                    placeholder="Title"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{ marginLeft: "11px", fontWeight: "bold" }}
                  >
                    Description
                  </Form.Label>
                  <Form.Control
                    style={{ borderRadius: "30px" }}
                    type="text"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    placeholder="Description"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label
                    style={{ marginLeft: "11px", fontWeight: "bold" }}
                  >
                    Tag
                  </Form.Label>
                  <Form.Control
                    className="rounded-pill"
                    name="etag"
                    type="text"
                    placeholder="Tag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary rounded-pill" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="container" style={{ width: "50%" }}>
          <h1 className="text-center">Add A Note</h1>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ marginLeft: "11px", fontWeight: "bold" }}>
                Title
              </Form.Label>
              <Form.Control
                className="rounded-pill"
                name="title"
                type="text"
                placeholder="Title"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: "11px", fontWeight: "bold" }}>
                Description
              </Form.Label>
              <Form.Control
                style={{ borderRadius: "30px" }}
                type="text"
                name="description"
                onChange={onChange}
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label style={{ marginLeft: "11px", fontWeight: "bold" }}>
                Tag
              </Form.Label>
              <Form.Control
                className="rounded-pill"
                name="tag"
                type="tag"
                placeholder="Tag"
                onChange={onChange}
              />
            </Form.Group>

            <Button
              className="rounded-pill container mt-3"
              variant="primary"
              type="submit"
              onClick={handleClick}
            >
              Add A Note
            </Button>
          </Form>
        </div>

        {/* NOTES MAP */}
        <div className="row">
          <h1 className="mt-4 ml-3 text-center">Notes</h1>
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
