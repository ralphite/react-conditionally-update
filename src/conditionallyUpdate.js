import React, { Component } from 'react';

function conditionallyUpdate(WrappedComponent) {
    class ConditionalUpdater extends Component {
        constructor(props) {
            super(props);

            this.callWrappedComponentCallback = this.callWrappedComponentCallback.bind(this);
        }

        callWrappedComponentCallback(wrappedComponentInstance) {
            if (!wrappedComponentInstance.conditionallyUpdateCallback) {
                console.error(`${WrappedComponent.name} doesn't have a required conditionallyUpdateCallback method.`);
            } else {
                wrappedComponentInstance.conditionallyUpdateCallback();
            }
        }

        render() {
            const props = {
                ref: this.callWrappedComponentCallback,
                ...this.props
            };
            return (
                <WrappedComponent {...props}/>
            );
        }
    }

    return ConditionalUpdater;
}

export default conditionallyUpdate;
