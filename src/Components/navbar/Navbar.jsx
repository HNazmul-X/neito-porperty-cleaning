import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import LOGO from "../../Images/loader-truck-svgrepo-com.svg";

const Navbar = () => {
    return (
        <nav id="navbar" className="bg-light">
            <div className="container-fluid shadow-sm">
                <div className="row align-items-center justify-content-center justify-content-lg-evenly">
                    <div className="col-md-6 col-lg-3 col-12 text-center text-md-start">
                        <div className=" d-flex align-items-center justify-content-center">
                            <img width="70px" className="" src={LOGO} alt="" />
                            <h6 className="ps-2">
                                Nieta <br />
                                Property Cleanign
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-6 order-2">
                        <ul class="nav justify-content-evenly">
                            <li class="nav-item">
                                <NavLink activeClassName="active" exact className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink  activeClassName="active" exact className="nav-link" to="/about">
                                    about
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="active" exact className="nav-link" to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="active" exact className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 text-center text-md-end order-1 order-lg-2">
                        <p className="fs-5 theme-color me-4 mb-0">(760)- 698 49438</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
