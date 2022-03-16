import React from "react";
import flora from "../img/custom-divider-1.png";
import blogRestaurant1 from "../img/blog/blog-restaurant-1.png";
import blogRestaurant2 from "../img/blog/blog-restaurant-2.png";
import blogRestaurant3 from "../img/blog/blog-restaurant-3.png";
import restaurantIcon1 from "../img/icons/restaurant-icon-1.png";
import restaurantIcon2 from "../img/icons/restaurant-icon-2.png";
import restaurantIcon3 from "../img/icons/restaurant-icon-3.png";

export default function MainContent() {
    return (
        <section className="meal">
            <div className="container">
                <div className="meal_text text-center">
                    <h1 className="header_text pb-3">
                        Enjoy <span className="header_text2">Your Meal</span>{" "}
                    </h1>
                    <p className="header_sub_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eu pulvinar magna. <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit...
                    </p>
                    <img src={flora} alt="" className="flora pt-5" />
                </div>
                <div className="e-cards">
                    <div className="e-card text-center">
                        <div className="img1">
                            <img
                                src={blogRestaurant1}
                                alt="food_image"
                                className="e-card-img1"
                            />
                        </div>
                        <img
                            src={restaurantIcon1}
                            alt="food_image"
                            className="e-card-img2"
                        />
                        <div className="e-card-text">
                            <h1 className="card_header_text">Sweets</h1>
                            <p className="card_para_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu pulvinar magna. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit...
                            </p>
                        </div>
                        <a href="#" className="custom_button">
                            View More
                        </a>
                    </div>
                    <div className="e-card text-center">
                        <div className="img1">
                            <img
                                src={blogRestaurant2}
                                alt="food_image"
                                className="e-card-img1"
                            />
                        </div>
                        <img
                            src={restaurantIcon2}
                            alt="food_image"
                            className="e-card-img2"
                        />
                        <div className="e-card-text">
                            <h1 className="card_header_text">Sweets</h1>
                            <p className="card_para_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu pulvinar magna. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit...
                            </p>
                        </div>
                        <a href="#" className="custom_button">
                            View More
                        </a>
                    </div>
                    <div className="e-card text-center">
                        <div className="img1">
                            <img
                                src={blogRestaurant3}
                                alt="food_image"
                                className="e-card-img1"
                            />
                        </div>
                        <img
                            src={restaurantIcon3}
                            alt="food_image"
                            className="e-card-img2"
                        />
                        <div className="e-card-text">
                            <h1 className="card_header_text">Sweets</h1>
                            <p className="card_para_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec eu pulvinar magna. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit...
                            </p>
                        </div>
                        <a href="#" className="custom_button">
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
