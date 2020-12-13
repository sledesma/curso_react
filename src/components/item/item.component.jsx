import React from "react";

import "./item.styles.css";

import { Link } from 'react-router-dom';

export default function Item(props) {
	return (
		<div className="item">
			<img src={props.imagen} alt=""/>
			<div className="item-name">
				 <Link to={`/detalle/${props.id}`}>{props.nombre}</Link>
			</div>
		</div>
	);
}
