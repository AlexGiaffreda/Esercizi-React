import React from "react";

export default class Login extends React.Component {
    state = {
        username : '',
        password : '',
        check : false
    }

    controlHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const check = event.target.checked

        this.setState({
            [name] : type === 'checkbox' ? check : value
        })
    }

    render(){
        return(
            <form>
                <input type='username' name='username' value={this.state.username} onChange={this.controlHandler}></input>
                <input type='password' name='password' value={this.state.password} onChange={this.controlHandler}></input>
                <input type='checkbox' name='checkbox' onChange={this.controlHandler}></input>
            </form>
        )
    }
}