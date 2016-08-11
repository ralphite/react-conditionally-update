# react-conditionally-update

A high order function to decorate a react component to conditionally update the rendered component based on the rendered result.

Example:

```js

import React, { Component } from 'react';
import conditionallyUpdate from 'react-conditionally-update';

class DemoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 200,
            height: 100,
            backgroundColor: 'red'
        };
    }
    
    // method required to check the condition and update the component with setState
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

export default conditionallyUpdate(DemoComponent);

```
