import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Table extends Component {

constructor(props){
  super(props)
 this.state={edit:false}
  this.renderEdit = this.renderEdit.bind(this);
  this.onEdit = this.onEdit.bind(this);
  this.save = this.save.bind(this);
  this.handleremove = this.handleremove.bind(this);


}
onEdit(){
  this.setState({edit: true});
}
save(){
  this.setState({edit: false});
}
renderEdit(){
  if(this.state.edit){
    return(
        <td>
          <button onClick={this.save} id="tablebutton">Save</button>
       </td>

    );
  }else
  return(
    <td>

    <button onClick={this.onEdit} id="tablebutton">Edit</button>
    </td>
  );
}
saveEdit(){
  if(this.state.edit){
    return(

        <button onClick={this.onEdit} id="tablebutton">Edit</button>


    );
  }else
  return(
    <td>

    <button onClick={this.save} id="tablebutton">save</button>
    </td>
  );
}

handleremove(e) {
  e.preventDefault();
  var array = this.props.items;

  var index = array.id;
  array.splice(index, 1);

  this.setState({items: array });


}
  render() {

    return (

      <table className="table table-bordered table-responsive">
      <tr><th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        </tr>
    <tbody>

        {this.props.items.map(item => (
        <tr>  <td key={item.i}>{item.text}</td>
          <td key={item.i}>{item.email}</td>
          <td key={item.i}>{item.phone}</td>
           <td>{this.renderEdit()}</td>
           <td><button onClick={this.handleremove} >remove</button></td>
          </tr>
        ))}

  </tbody>
</table>
    );
  }
}

export default Table;
