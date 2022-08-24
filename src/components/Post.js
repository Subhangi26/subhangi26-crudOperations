import React, { useState } from "react";
import './Post.css';

export const Post = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <input placeholder="Body" name="body" defaultValue={body} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="post">
          <span className="post-title">{title}</span>
          <span className="post-body">{body}</span>
          <div>
            <button className='btns' onClick={handleEdit}>Edit</button>
            <button className='btns' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
