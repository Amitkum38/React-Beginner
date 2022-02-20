import React from 'react'

const firstname = "Trisha";
const lastname = "Vishwakarma";

function ExpressionsJSX(){
    return(
     <>
     <h4>My Name is {firstname} {lastname}</h4>
     <h4>My Name is {firstname + ' ' + lastname}</h4>
     <p>Total Number of Sum {2+3}</p>
     </>

    )
}
export default ExpressionsJSX