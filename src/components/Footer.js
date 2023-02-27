import React from "react";
import logo from "../logo.svg";

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="#"
                       className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img width="30" height="24" src={logo} className="App-logo" alt="logo"/>
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="src/components/Footer#">
                        <img width="24" height="24" src={logo} className="App-logo" alt="logo"/>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="src/components/Footer#">
                        <img width="24" height="24" src={logo} className="App-logo" alt="logo"/>
                    </a></li>
                    <li className="ms-3"><a className="text-muted" href="src/components/Footer#">
                        <img width="24" height="24" src={logo} className="App-logo" alt="logo"/>
                    </a></li>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;