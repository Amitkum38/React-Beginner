import React from 'react';


const name = "Amit";
const img1  = "https://picsum.photos/id/1/200/300";

function  JSXAttributes(){
  return(
      <>
      <h4 contentEditable="true">My name is {name}</h4>
      <img src= {img1} alt="random images"/>
      </>
  );
}

export default  JSXAttributes