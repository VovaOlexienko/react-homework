import React, {Component} from "react";
import logo from "../logo.svg";
import cart from "../cart.png";
import {Dropdown} from "react-bootstrap";
import Auth from "./Auth";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="#"
                       className="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img width="40" height="32" src={logo} className="App-logo" alt="logo"/>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="src/components/Header#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="src/components/Header#" className="nav-link px-2 link-dark">Features</a></li>
                        <li><a href="src/components/Header#" className="nav-link px-2 link-dark">Pricing</a></li>
                        <li><a href="src/components/Header#" className="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="src/components/Header#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <Dropdown className="col-md-1">
                        <Dropdown.Toggle variant="nav-link px-2" id="dropdown-basic">
                            Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.props.categories
                                .map(category => <Dropdown.Item key={category.id} onClick={() => this.props.selectCategory(category.id)}>{category.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="col-md-2 text-end justify-content-evenly d-flex">
                        <Auth/>
                    </div>

                    <div className="col-md-1">
                        <img width="33" height="33" src={cart} className="App-logo" alt="logo"/>
                        <span>{this.props.basket.length}</span>
                    </div>
                </header>
            </div>
        );
    }
};

export default Header;