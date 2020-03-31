import React from 'react';
import './cb.css';

//made the UI
const CustomButton = ({text, color, onClick}) => <div
    style={{backgroundColor:color, boxShadow: "3px 3px 5px "+color}}
    className="custom_button_box"
    onClick={onClick}
    >
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick() {
    alert("clicked");
}

CustomButton.defaultProps = {
    text: "default button",
    color: "#63858f",
    onClick:ButtonClick
}

export default CustomButton;