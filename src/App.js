import React, { Component } from 'react';
import './App.css';
import Jsx from './components/Jsx' ;
import  Fragment  from './components/Fragment';
import ExpressionsJSX from './components/ExpressionsJSX';
import Literals from './components/Literals';
import Credatetime from './components/Credatetime';
import JSXAttributes from './components/JSXAttributes';
import Styling from './components/Styling';
import facebookuser, {favmovie , myname, mybrothername} from './components/ImportExport';
import {add, mult, divd} from './components/Calculator';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Jsx/>
        <Fragment />
        <ExpressionsJSX/>
        <Literals/>
        <Credatetime/>
        <JSXAttributes/>
        <Styling/>
         <ul>
           <li>{facebookuser}</li>
           <li>{favmovie}</li>
           <li>{myname()}</li>
           <li>{mybrothername()}</li>
           <li>{add(10,10)}</li>
           <li>{mult(10,50)}</li>
           <li>{divd(100,10)}</li>

         </ul>
      </div>
    );
  }
}
export default App;
