// use the same component to change the fontSize
// change the text color of the header
// change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div
style={{fontSize:fontSize, color:color}}
className="custom_header"
onMouseOver={onMouseOver}
>
    {text}
</div>

function MouseOver() {
    alert("mouse is over");
}

Header.defaultProps = {
    text: "default button",
    fontSize:28,
    color: "#2b825f",
    onMouseOver:MouseOver
}

export default Header;