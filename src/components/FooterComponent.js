import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function FooterComponent() {
    return (
        <section className="footer_section text-center bg-footer-blue">
            <div className="social_links">
                <a href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <hr />
            <div className="footer_text">
                <div className="container">
                    <div className="footer-text-left">
                        <div className="item">
                            <i className="icon-footer fas fa-location"></i>
                            <span className="text-footer">
                                1234 Street Name, City Name
                            </span>
                        </div>
                        <div className="item">
                            <i class="icon-footer fas fa-phone"></i>
                            <span className="text-footer">(+880) 175-000</span>
                        </div>
                        <div className="item">
                            <i class="icon-footer fas fa-envelope"></i>
                            <span className="text-footer">
                                proto.org@gmail.com
                            </span>
                        </div>
                    </div>
                    <span className="text-footer">
                        © Copyright 2021 Galib. All Rights Reserved.
                    </span>
                </div>
            </div>
        </section>
    );
}
