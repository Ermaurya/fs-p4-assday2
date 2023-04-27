import React, { Component } from "react";
// import { render } from "react-dom";
import axios from "axios";
import DidUpdate from './DidUpdate'

class Usingdidmount extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount(props) {
    this.getTodos();
  }

  async getTodos() {
    let data = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(function(response) {
        console.log(response)
        return response;

      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({ todos: data.data });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>componentDidMount for initial data render</h2>
        <hr />
        {todos &&
          todos.map(todo => {
            return (
              <table>
                <tr>
                  <td>{todo.id}</td>
                  <td>
                    <p key={todo.id}>{todo.title}</p>
                  </td>
                </tr>
              </table>
            );
          })}
      </div>
    );
  }
}

export default Usingdidmount;