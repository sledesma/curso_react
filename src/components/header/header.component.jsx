import React from 'react';

import "./header.styles.css";

import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ddMascotasVisible: false
        }

        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState(prevState => ({
            ddMascotasVisible: !(prevState.ddMascotasVisible)
        }));
    }

    render() {
        const mascotasClassName = this.state.ddMascotasVisible ? 'dropdown' : 'hidden-dropdown';
        return (
            <div className="header">
                <div className="header-logo">Adopta.Me</div>
                <div className="header-menu-wrapper">
                    <Link to="/" className="header-menu-item">Home</Link>
                    <a href="#" onClick={this.toggleDropDown} className="header-menu-item header-menu-dropdown">
                        Tu mascota
                        <div className={mascotasClassName}>
                            {this.props.item.nombre}

                            <img src={this.props.item.imagen} alt=""/>
                        </div>
                    </a>
                    <Link to="/contacto" className="header-menu-item">Contacto</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.items.mascotaItem
})

export default connect(mapStateToProps)(Header);