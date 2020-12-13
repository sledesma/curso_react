import React from "react";

import "./home.page.css";

import SearchBar from "../../components/search-bar/searchbar.component";
import ItemsGrid from "../../components/items-grid/itemsgrid.component";


import catalogo from '../../catalogo';


export default class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			sourceItems: [],
		};

		this.changeSearch = this.changeSearch.bind(this);
    }
    
    componentDidMount() {
        this.setState({ sourceItems: catalogo })
    }

	changeSearch(val) {
		this.setState({
			search: val,
		});
	}

	render() {
		const items = this.state.sourceItems.filter((val) =>
			val.nombre.toLowerCase().includes(this.state.search.toLowerCase())
		);
		return (
			<div>
				<SearchBar onSearch={this.changeSearch} />
                <ItemsGrid items={items} />
			</div>
		);
	}
}
