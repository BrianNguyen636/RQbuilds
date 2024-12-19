import React, {Component, useState} from 'react';
import './category.css'
import perk from './perk';

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
            <div id='category'>
                <div id='categoryLabel'>
                    <h5>{this.state.label}</h5>
                </div>
                <div id='categoryGrid'>
                    {this.state.perks.map(e => {return(
                        <div>
                            {e}
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}