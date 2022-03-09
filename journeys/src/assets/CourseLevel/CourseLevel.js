import React, { Component } from 'react';
import './CourseLevel.css'
import ImagePicker from '../ImagePicker/ImagePicker.js'
import Minus from '../images/minus_sign.png'
import Plus from '../images/plus_sign.png'

export default class CourseLevel extends Component {

    state = {
        n: 1
    }

    render() {

        const {n} = this.state

        const sub = () => {
            if(n > 1) {
                this.setState({n: n - 1})
            }
        }

        const add = () => {
            if(n < 4) {
                this.setState({n: n + 1})
            }
        }

        return (
            <div class="courseLevel">
                <button name="minus" class="operatorButton" onClick={sub}>
                    <img src={Minus} class="operatorSign"/>
                </button>
                {Array.from({length: n}, (_, j) => 
                    <span key={j}>
                    <ImagePicker row={this.props.row} col={j}/>
                    </span>)}
                <button name="plus" class="operatorButton" onClick={add}>
                    <img src={Plus} class="operatorSign"/>
                </button>
            </div>
        )
    }
}