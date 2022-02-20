
import React from 'react'


const img  = "https://picsum.photos/id/1/200/300";
const img2  = "https://picsum.photos/id/1/200/300";
const img3  = "https://picsum.photos/id/1/200/300";
const img4  = "https://picsum.photos/id/1/200/300";

const heading = {
    fontFamily: '"Josefin Sans", sans-serif', color:'red', fontSize:'24px', FontWeight:' bold', textAlign:'center',
}

function Styling(){
    return(
     <>
     <h1 style={heading}>Photo Galary</h1>
    <div className="img_div">
    <img src= {img} alt="random images"/>
    <img src= {img2} alt="random images"/>
    <img src= {img3} alt="random images"/>
    <img src= {img4} alt="random images"/>

    </div>
     </>
    );
}

export default Styling