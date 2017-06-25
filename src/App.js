import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Table from './Table.js';


class App extends Component {

  constructor() {
  super();
  this.state={items: [{id: 0, text: 'Elias Mohammud', email: 'subagg@hotmail.com', phone: '0400127564'},
                      {id : 1, text: 'mohamed Abdi', email: 'subaggeel1232@hotmail.com', phone: '0400127564'},
                      {id: 3, text: 'imani Mohammud', email: 'suba@hotmail.com', phone: '0400127564'},
                      {id: 10, text: 'jukka Jalonen', email: 'subaggeel1@hotmail.com', phone: '0400127564'},

           ],
    edit:false

  }
  this.handleChange = this.handleChange.bind(this);
  this.handleChange2 = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.editing = this.editing.bind(this);
  this.renderNormal = this.renderNormal.bind(this);


}
handleChange(e) {
    this.setState({text: e.target.value});
  }
  handleChange2() {
      this.setState({edit:true});
    }
  editing() {
        alert("hello");

        this.setState({edit: true});

      }
  handleSubmit(e) {
    e.preventDefault();
    var id=Math.floor((Math.random() * 20) + 1);
    var newItem = {
      id: id,
      text: this.refs.in.value,
      email:this.refs.in1.value,
      phone:this.refs.in2.value

    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      //text: '',
      //email: '',
      //phone: ''
    }));
    this.refs.in.value='',
    this.refs.in1.value='',
    this.refs.in2.value=''
  }

  renderNormal(){
    return{

    }
  }


  render() {

    return (
      <div>

        <Header/>
        <div className="todoListMain">
        <div className="header">
        <h2>List of participants</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange.bind(this)} ref="in" />
          <input onChange={this.handleChange.bind(this)} ref="in1" />
          <input onChange={this.handleChange.bind(this)} ref="in2" />
          <button>{'Add New '}</button>
        </form>
        <Table items={this.state.items} chan={this.editing.bind(this)} chan2={this.handleChange2}/>
       
        </div>
        </div>
      </div>
    );
  }
}

export default App;
