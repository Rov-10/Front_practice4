import React from 'react';
import "../style/header.css"
const Header = (props) => {
    const {title} = props
    return (
        <header>
            <p>{title}</p>
        </header>
    );
}

export default Header;
