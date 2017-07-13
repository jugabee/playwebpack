import * as React from 'react';

class Greeter extends React.Component<any, any> {
    render() {
        return (<p>Hello, {this.props.name}</p>)
    }
}

export default Greeter;
