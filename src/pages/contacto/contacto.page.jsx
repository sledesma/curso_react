import React from "react";

import "./contacto.page.css";

export default function ContactoPage() {
	return (
		<div className="contacto">
            <h2>Contacto con nosotros</h2>
			<form action="#" className="contacto-form">
				<div className="campo">
					<input type="text" placeholder="Tu nombre aqui..." />
				</div>
				<div className="campo">
					<input type="text" placeholder="Tu email aqui..." />
				</div>
				<div className="campo">
					<input type="text" placeholder="¿Por qué nos consultas?" />
				</div>
				<div className="campo">
					<div className="campo-medio">
						<textarea id="" cols="30" rows="10"></textarea>
					</div>
					<div className="campo-medio">
						<button>Enviar</button>
					</div>
				</div>
			</form>
		</div>
	);
}
