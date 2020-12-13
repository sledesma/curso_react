import React from 'react';

import Header from '../header/header.component';

export default function Layout(props) {
    return (
        <div>

            <Header></Header>

            <div>
                { props.children }
            </div>
        </div>
    );
}