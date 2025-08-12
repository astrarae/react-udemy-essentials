import React from 'react';

function TabButton(props) {
    const {children, onSelect, isSelected=false} = props; // built-in prop by React| component composition

    return (
        <li>
            <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;