import React from 'react';
import reactLogo from '../assets/react-core-concepts.png' with { type: "url"};
import './Header.css';

const reactDescriptions = [
    'Fundamental',
    'Crucial',
    'Core'
]

function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1))
}

function Header() {
    const description = reactDescriptions[getRandomInt(2)]

    return (
        <header>
            <img src={reactLogo} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

export default Header;