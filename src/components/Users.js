import React from 'react';
import axios from 'axios';
import './Users.css';



export default class Users extends React.Component {
    state = {
        users: [{
            
        }]
    }



    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
                // const all = users.all;

            })
    }

    render() {
        return (
            <select className="select-css" >

                {this.state.users.map(user =>
                    <option>{user.name}</option>
                )}
            </select>
        )
    }
}