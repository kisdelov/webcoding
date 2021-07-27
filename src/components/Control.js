import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <dl>
                <dt><a
                    href="/create"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}
                    >create</a>
                </dt>
                <dt><a
                    href="/update"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}
                    >update</a>
                </dt>
                <dt>
                    <input 
                    type="button" 
                    value="delete"
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}
                    >
                    </input>
                </dt>
            </dl>
        )
    }
}

export default Control;