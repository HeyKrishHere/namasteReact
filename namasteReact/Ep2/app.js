import React from "react";
import ReactDOM from "react-dom/client";

const elemnet = React.createElement('div',{id:"p"},React.createElement('div',{id:"c"},[React.createElement('h1',{},'Nested tag creation in React'),React.createElement('h2',{},'Nested tag creation in React')]));
// if we want add multiple child we can pass array of child elements as third argument of React.createElement function.
ReactDOM.createRoot(document.getElementById('root')).render(elemnet);