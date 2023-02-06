import React from 'react'
import Welcome from './Welcome'

export default class InteractiveWelcome extends React.Component{

    state = {
        name: ''
    }

        eventinputChange = (event) => {
            this.setState((state) => {
                return {name: state.name = event.target.value }
            })
        }
        
        render(){
            return(
                <form>
                    <input type='text' value={this.state.name} onChange={this.eventinputChange}></input>
                    <Welcome name={this.state.name}/>
                </form>
            )
        }
    }
