import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { url } from "inspector";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
  },
  { title: "Redux", url: "https://redux.js.org/" },
  { title: "React Router", url: "https://reacttraining.com/react-router/" },
];

function App() {
  return <div className="App">
    <ul>
      {list.map(item=><li key={item.title}>{item.url}</li>)}
    </ul>
  </div>; 
}

export default App;
