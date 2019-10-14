import React from 'react';
import axios from 'axios';
import './Todos.css';




export default class Todos extends React.Component {
    state = {
        todos: [{
            "all": "All"
        }]
    }



    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
                // const all = users.all;

            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.todos.map(todos =>
                        <li><span>{todos.id} :</span> {todos.title}</li>)

                }
            </ul>


        )
    }
}