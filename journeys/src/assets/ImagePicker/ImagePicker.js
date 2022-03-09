import React, { Component } from 'react';
import blank from '../images/plus.png';
import './ImagePicker.css';


export default class ImagePicker extends Component {

    state = {
        imagePicked: blank,
        editMode: false
    }

    render() {
        
        const {imagePicked} = this.state

        const {editMode} = this.state

        const imageHandler = (e) => {
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2) {
                    this.setState({imagePicked: reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }

        const editHandler = () => {
            this.setState({editMode: !editMode})
        }
    
        return (
            <div class="imagePickerContainer">
                <input type={editMode ? "file" : ""} class="imageInput" name="image-upload" id={"input " + this.props.row + " " + this.props.col} accept="image/*" onChange={imageHandler}/>
                <div>
                    <label for={"input " + this.props.row + " " + this.props.col}>
                        <img src={imagePicked} class="image" alt="image"/>
                    </label>
                </div>
                <div>
                    {editMode ?
                        <input type="text" class="textInput"/>
                        :
                        <input type="text" class="textInput" disabled/>
                    }
                </div>
                <button onClick={editHandler} class={editMode ? "saveButton" : "editButton"}>
                    {editMode ? "Save" : "Edit"}
                </button>
                <button class="resourcesButton">
                    Manage Resources
                </button>
            </div>
        )
    }

    
}