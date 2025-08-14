import React from 'react';

function Tabs(props) {
    const {children, buttons} = props;

    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}

export default Tabs;