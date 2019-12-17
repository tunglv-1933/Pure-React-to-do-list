import React, { Component } from 'react';


class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {listToDo: []}
  }

  UNSAFE_componentWillMount() {
    let listToDo = this.state.listToDo;
    listToDo.push({text: "to do first", done: false});
    listToDo.push({text: "to do seconds", done: false});
    this.setState({listToDo: listToDo});
  }

  render() {

    const removeTodo = (index) => {
      let listToDo = this.state.listToDo;
      listToDo.splice(index, 1);
      this.setState({listToDo: listToDo});
    }

    const toggleToDo = (index) => {
      let listToDo = this.state.listToDo;
      listToDo[index].done = listToDo[index].done ? false : true;
      this.setState({listToDo: listToDo});
    }

    const addToDo = (e) => {
      e.preventDefault();
      let toDo = {text: e.target.to_do.value, done: false}
      let listToDo = this.state.listToDo;
      listToDo.push(toDo);
      this.setState(listToDo);
      e.target.to_do.value = '';
    }

    const toDoRows = this.state.listToDo.map( (toDoData, index) => (
      <li key={index}>
        <button onClick={() => removeTodo(index)}>Remove</button>&nbsp;
        <span className={toDoData.done ? 'done' : ''} onClick={() => toggleToDo(index)}>{toDoData.text}</span>
      </li>
      )
    )

    return (
      <div className="wrap-list-to-do">
        <form onSubmit={event => addToDo(event)}>
          <input type="text" name="to_do" />
          <button type="submit">Add</button>
        </form>
        <ul className="list-to-do">
          {toDoRows}
        </ul>
      </div>
    )
  }
}

export default ListToDo;
