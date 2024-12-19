import React, {Component, useState} from 'react';

export default class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {
            label: props.label,
            perks: props.perks
        }
    }

    render() {
        return (
            <div>
                {this.state.label}
            </div>
        )
    }
}