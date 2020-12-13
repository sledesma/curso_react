import React from "react";

import "./detalle.page.css";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { setMascotaItem } from "../../store/actions/items/actions";

function DetallePage(props) {
	const id = props.match ? props.match.params.id : null;
	const item = props.getItem(id);
	if (id) {
		const page = (
			<div className="detalle">
				<div className="main-row">
					<div className="image">
						<img src={`${item.imagen}`} alt="Hola" />
					</div>
					<div className="text">{item.nombre}</div>
				</div>
				<div className="button">
					<button onClick={() => props.setMascota(id)}>Quiero conocerlo</button>
				</div>
			</div>
		);
		return page;
	} else {
		return <div></div>;
	}
}

const mapStateToProps = (state) => ({
	getItem: (id) => state.items.sourceItems.find((val) => val.id == id),
});

const mapDispatchToProps = (dispatch) => ({
	setMascota: (id) => dispatch(setMascotaItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetallePage));
