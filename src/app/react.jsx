
import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello,React!
            </div>
        );
    }
}

ReactDom.render(
    <Hello/>, document.getElementById('root'));