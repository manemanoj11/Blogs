import { useState } from "react";
import { firestore } from '../firebase';
import { useFormInput } from "./hooks";
import PostDetails from "./PostDetails";

export default function CreatePost() {
  const title = useFormInput();
  const subTitle = useFormInput();
  const Content = useFormInput();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('titel :', title)
    console.log('subTitle :', subTitle)
    console.log('Content :', Content)

    firestore.collection('posts').add({
      title: title.value,
      subTitle: subTitle.value,
      Content: Content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...Content} />
        </div>

        <button className="create-post-btn">Create Post </button>
        
      </form>
    </div>
  )
}
