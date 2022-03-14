import React, { Component } from 'react';
import './CourseLevel.css'
import ImagePicker from '../ImagePicker/ImagePicker.js'
import Empty from '../images/empty_resource.png'

export default class CourseLevel extends Component {

    state = {
        index: 0,
        n: []
    }

    render() {

        const {n} = this.state
        const {index} = this.state

        const sub = (j) => {
            var temp = [...n];
            temp.splice(j, 1);
            this.setState({n: temp});
        }

        const add = () => {
            if(n.length < 4) {
                var temp = n;
                temp.push(1);
                this.setState({n: temp})
            }
        }

        return (
            <div class="courseLevel">
                {Array.from({length: n.length}, (_, j) => 
                    <span key={j}>
                    <ImagePicker row={this.props.row} col={j}/>
                    <button name="delete" class="deleteButton" onClick={() => {sub(j)}}>
                        Delete
                    </button>
                    </span>)}
                <button name="plus" class="operatorButton" onClick={add}>
                    <img src={Empty} class={n.length < 4 ? "visibleEmpty" : "hiddenEmpty"} />
                </button>
            </div>
        )
    }
}