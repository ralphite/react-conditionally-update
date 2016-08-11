import React, { Component } from 'react';
import conditionallyUpdate from './conditionallyUpdate';

class DemoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 200,
            height: 100,
            backgroundColor: 'red'
        };
    }

    conditionallyUpdateCallback() {
        if (this.state.height === 100) {
            this.setState({
                height: 200
            });
        }
    }

    render() {
        return (
            <div style={this.state}></div>
        );
    }
}

export const OriginalDemoComponent = DemoComponent;

export default conditionallyUpdate(DemoComponent);
