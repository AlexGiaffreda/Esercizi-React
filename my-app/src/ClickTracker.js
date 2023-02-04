import React from 'react';

export default class ClickTracker extends React.Component {
    state = {
        name :""
    }

    handleButtonSelected(event) {
        this.setState((state) => {
            return{name : event.target.innerText}
        })
    }

    render () {
        return (
            <div>
                <h1>Button Selected: {this.state.name}</h1>
                <button name="1" onClick={this.handleButtonSelected.bind(this)}>1</button>
                <button name="2" onClick={this.handleButtonSelected.bind(this)}>2</button>
                <button name="3" onClick={this.handleButtonSelected.bind(this)}>3</button>
            </div>

        )
    }
   
} 

