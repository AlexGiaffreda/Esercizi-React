import React from 'react'

export default class Container extends React.Component{
    render(){
        return(
            <h2 className="container">
                <div className='container-title'>{this.props.title}</div>
                {this.props.children}
            </h2>
        )
    }
}

