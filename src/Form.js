import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component {
  render() {
    return (


     <div className="todoListMain">
     <div className="header">

       <form >
         <input placeholder="enter firstname" >
         </input>
           <input placeholder="enter lastname" ref="in" ></input>
           <input placeholder="enter email" name="input2"></input>
         <button type="submit" onClick={this.props.t3}>add New</button>

       </form>

     </div>
   </div>



    );
  }
}

export default Form;
