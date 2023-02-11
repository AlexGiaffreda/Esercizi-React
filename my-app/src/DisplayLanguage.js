import react from 'react';

export default class DisplayLanguage extends react.Component {
    render(){
        return (
            <div>
                {this.props.children}
                </div>
        )
    }
}