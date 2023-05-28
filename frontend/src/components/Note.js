import React from "react";

export default function Note(props) {
    return (
        <div className="note">
            <h1 className="note--title">{props.title}</h1>
            <p className="note--text">{props.text}</p>
            <p>{props.completed}</p>
            <button onClick={() => props.delete(props.id)}>Delete Note {props.id}</button>
            <button onClick={() => props.update(props.id)}>Update Note {props.id}</button>
        </div>
    )
}