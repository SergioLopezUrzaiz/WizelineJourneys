import React, { Component } from 'react';
import Navbar from '../assets/Navbar/Navbar.js'
import Minus from '../assets/images/minus_sign.png'
import Plus from '../assets/images/plus_sign.png'
import CourseLevel from '../assets/CourseLevel/CourseLevel.js';
import './App.css';

export default class App extends Component {

  state = {
    m: 1
  }

  render() {

      const {m} = this.state

      const sub = () => {
        if(m > 1) {
          this.setState({m: m - 1})
        }
      }

      const add = () => {
        if(m < 4) {
          this.setState({m: m + 1})
        }
      }

      return (
        <div className="df flex-col vh-100">
            <Navbar />
            <body>
              <p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="fullCourse">
                  <button name="minus" class="operatorButton" onClick={sub}>
                    <img src={Minus} class="mSign"/>
                  </button>
                  {Array.from({length: m}, (_, i) =>
                    <span key={i}>
                      <CourseLevel row={i}/>
                    </span>
                  )}
                  <button name="plus" class="operatorButton" onClick={add}>
                      <img src={Plus} class="mSign"/>
                  </button>
                </div>
                <br/>
                <br/>
              </p>
            </body>
        </div>
      )
  }
}
