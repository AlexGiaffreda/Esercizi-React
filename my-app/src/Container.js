import React from 'react'

export default class Container extends React.Component{
    render(){
        return(
            <h2 className="container">
                {this.props.children}
            </h2>
        )
    }
}

