import React from "react";
import logo from "../logo.svg";

const Menu = () => {
    return (
        <div className="flex-shrink-0 p-3 bg-white" style="width: 280px;">
            <a href="/Users/olexi/IdeaProjects/react/lr1/public" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                <img width="30" height="24" src={logo} className="App-logo" alt="logo"/>
                <span className="fs-5 fw-semibold">Collapsible</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        Home
                    </button>
                    <div className="collapse show" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a>
                            </li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                            data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                        Dashboard
                    </button>
                    <div className="collapse show" id="dashboard-collapse" style="">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Weekly</a>
                            </li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Monthly</a>
                            </li>
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                            data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                        Orders
                    </button>
                    <div className="collapse show" id="orders-collapse" style="">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">New</a>
                            </li>
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a>
                            </li>
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                            data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                        Account
                    </button>
                    <div className="collapse show" id="account-collapse" style="">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">New...</a>
                            </li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a>
                            </li>
                            <li><a href="src/components/Menu#"
                                   className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                            <li><a href="src/components/Menu#" className="link-dark d-inline-flex text-decoration-none rounded">Sign
                                out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;