import React from 'react';
import './CoreConcepts.css';

function CoreConcepts(props) {
    const {title, description, image} = props;

    return (
        <li>
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcepts;