import React from "react";
import PortoLogo from "./../img/logo-restaurant.png";

export default function Navbar() {
    return (
        <div>
            <header className="top_header">
                <div className="container">
                    <p className="top_header_left header_top_text">
                        {" "}
                        The best place to eat in downtown
                    </p>
                    <div className="top_header_right">
                        <i className="fas fa-phone-alt"></i>
                        <p className="header_top_text">123-5454-8952</p>
                    </div>
                </div>
            </header>
            <nav>
                <div className="container">
                    <a href="#" className="logo">
                        <img src={PortoLogo} alt="proto" />
                    </a>
                    <div className="nav_links">
                        <a href="#" className="nav_text">
                            Home
                        </a>
                        <a href="#" className="nav_text">
                            Menu
                        </a>
                        <a href="#" className="nav_text">
                            About
                        </a>
                        <a href="#" className="nav_text">
                            Press
                        </a>
                        <a href="#" className="nav_text">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
