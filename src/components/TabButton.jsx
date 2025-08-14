import React from 'react';

function TabButton(props) {
    const {children, isSelected=false, ...otherProps} = props; // built-in prop by React| component composition

    return (
        <li>
            <button className={isSelected ? "active" : ""} {...otherProps}>{children}</button>
        </li>
    );
}

export default TabButton;