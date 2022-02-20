import React from 'react'

const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();

function  Credatetime(){
    return(
        <>
        <h4>current date = {currentdate}</h4>
        <h4>current Time = {currenttime}</h4>
        </>
    )
}

export default Credatetime;