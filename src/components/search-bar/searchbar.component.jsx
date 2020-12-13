import React from 'react';

import "./searchbar.styles.css";

export default function SearchBar(props) {

    return (
        <div className="searchbar">
            <input placeholder="Introduce tu búsqueda aquí..." type="search" onChange={(e) => props.onSearch(e.target.value)} />
        </div>
    );

}