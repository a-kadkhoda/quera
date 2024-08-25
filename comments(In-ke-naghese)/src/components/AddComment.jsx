import React, { forwardRef } from "react";
import SelectBox from "./SelectBox";
const AddComment = forwardRef(function AddComment({name ,setName},refElement) {

  const handleClick = (e)=>{
    e.preventDefault()
    setName("")
    
  }



  return (
    <div ref={refElement} className="ac-wrapper">
      <h2 className="addCommentTitle">{name ?`Write your comment in response to ${name}:` :`Write your comment:`}</h2>
      <form action="" className="form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        {/* SelectBox */}
        {name && <SelectBox />}
        <textarea
          placeholder="message..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
        {/* Cancell Button */}
        {name && <button onClick={handleClick}>Cancel</button> }

      </form>
    </div>
  );
})

export default AddComment;
