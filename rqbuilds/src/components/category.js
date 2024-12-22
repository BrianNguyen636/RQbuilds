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

    dragOver(e) {        
        e.preventDefault();
    }
    handleDrop(e) {    
        if (e.target.id=="perks" || e.target.className == 'categoryGrid' ) {
            const data = e.dataTransfer.getData("text/plain")
            e.target.appendChild(document.getElementById(data))
        }
        // this.perks = this.perks += perk;
    }

    render() {
        return (
            <div id='category'>
                <button id='categoryLabel' className='btn'>
                    {this.state.label}
                </button>
                <div className='categoryGrid' onDragOver={e => this.dragOver(e)} onDrop={e=>this.handleDrop(e)}>
                    {/* {this.state.perks.map(e => {return(
                        <div>
                            {e}
                        </div>
                    )})} */}
                </div>
            </div>
        )
    }
}