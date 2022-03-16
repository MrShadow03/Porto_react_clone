import React from "react";
import flora from "../img/custom-divider-1.png";
import productImage1 from "../img/products/product-1.jpg";
import productImage2 from "../img/products/product-2.jpg";
import productImage3 from "../img/products/product-3.jpg";
import productImage4 from "../img/products/product-4.jpg";
import productImage5 from "../img/products/product-5.jpg";

export default function SpecialMenu() {
    return (
        <section className="menu">
            <div className="container text-center">
                <div className="menu_text ">
                    <h1 className="fs-2 fw-bold pb-4">
                        Special <span className="fw-bolder">Menu</span>
                    </h1>
                    <p className="header_sub_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eu pulvinar magna.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit...
                    </p>
                </div>
                <img src={flora} alt="flora" className="flora pt-5" />
                <div className="menu_items">
                    <div className="item">
                        <div className="menu_details">
                            <img
                                src={productImage1}
                                alt="item"
                                className="item_img"
                            />
                            <div className="item_text text-start">
                                <h1 className="menu_header_text">
                                    Saturday{" "}
                                    <span className="menu_sub_text">
                                        Special
                                    </span>
                                </h1>
                                <p className="menu_para_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec eu pulvinar magna.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <span className="menu_price">$29</span>
                    </div>
                    <div className="item">
                        <div className="menu_details">
                            <img
                                src={productImage2}
                                alt="item"
                                className="item_img"
                            />
                            <div className="item_text text-start">
                                <h1 className="menu_header_text">
                                    Sunday{" "}
                                    <span className="menu_sub_text">
                                        Special
                                    </span>
                                </h1>
                                <p className="menu_para_text">
                                    Lorem ips amet, consectetur a. Donec eu
                                    pulvinar magna.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <span className="menu_price">$12</span>
                    </div>
                    <div className="item">
                        <div className="menu_details">
                            <img
                                src={productImage3}
                                alt="item"
                                className="item_img"
                            />
                            <div className="item_text text-start">
                                <h1 className="menu_header_text">
                                    Monday{" "}
                                    <span className="menu_sub_text">
                                        Special
                                    </span>
                                </h1>
                                <p className="menu_para_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscineu pulvinar magna.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <span className="menu_price">$25</span>
                    </div>
                    <div className="item">
                        <div className="menu_details">
                            <img
                                src={productImage4}
                                alt="item"
                                className="item_img"
                            />
                            <div className="item_text text-start">
                                <h1 className="menu_header_text">
                                    Tuesday{" "}
                                    <span className="menu_sub_text">
                                        Special
                                    </span>
                                </h1>
                                <p className="menu_para_text">
                                    Lorem ipsnec eu pulvinar magna.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <span className="menu_price">$39</span>
                    </div>
                    <div className="item">
                        <div className="menu_details">
                            <img
                                src={productImage5}
                                alt="item"
                                className="item_img"
                            />
                            <div className="item_text text-start">
                                <h1 className="menu_header_text">
                                    Wednesday{" "}
                                    <span className="menu_sub_text">
                                        Special
                                    </span>
                                </h1>
                                <p className="menu_para_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <span className="menu_price">$9</span>
                    </div>
                </div>
                <div className="menu-footer text-center py-10">
                    <a href="#" className="custom_button_menu">
                        Full Menu
                    </a>
                </div>
            </div>
        </section>
    );
}
