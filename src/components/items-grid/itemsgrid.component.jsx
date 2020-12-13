import React from "react";

import "./itemsgrid.styles.css";

import Item from "../item/item.component";

export default function ItemsGrid(props) {
	return (
		<div className="items-grid">
			{props.items.map((item) => (
				<Item key={item.id} id={item.id} imagen={item.imagen} nombre={item.nombre} />
			))}
		</div>
	);
}
