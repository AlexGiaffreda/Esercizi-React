import React from 'react';

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
            <h1>count: {this.state.count}</h1>
        </div>
    }


}