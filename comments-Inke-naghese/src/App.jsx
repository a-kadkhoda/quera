import React, { useRef, useState } from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
function App() {

  const refElement = useRef()
  const[name,setName]=useState()


  return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment ref={refElement} name={name} setName={setName} />
      <Comments refElement={refElement} setName={setName}/>
    </div>
  );
}

export default App;
