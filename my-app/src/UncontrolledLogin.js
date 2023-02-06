import React from "react";

export default class UncontrolledLogin extends React.Component{

    eventHandler = (event) => {
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const check = event.target.elements.check.checked

        console.log(`${username}, ${password}, ${check}`)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.eventHandler}>
                    <input type='username' name='username' autoFocus></input>
                    <input type='password' name='password'></input>
                    <input type='checkbox' name='check'></input>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}