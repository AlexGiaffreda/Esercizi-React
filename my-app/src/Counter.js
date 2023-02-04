import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {
    state = { count : this.props.starting }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.increment
            })

        }, this.props.interval)
    }

    render(){
        return <div>
            <CounterDisplay count = {this.state.count}/>
        </div>
    }


}