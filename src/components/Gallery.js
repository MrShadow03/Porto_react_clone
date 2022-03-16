import React from "react";
import flora from "../img/custom-divider-1.png";
import foodImg1 from "../img/gallery/restaurant-gallery-1.jpg";
import foodImg2 from "../img/gallery/restaurant-gallery-2.jpg";
import foodImg3 from "../img/gallery/restaurant-gallery-3.jpg";
import foodImg4 from "../img/gallery/restaurant-gallery-4.jpg";
import foodImg5 from "../img/gallery/restaurant-gallery-5.jpg";

export default function Gallery() {
    return (
        <section className="gallery text-center">
            <div className="gallery_text">
                <h1 className="fs-2 fw-bold pb-4 opacity-75">
                    Our <span className="fw-bolder">Gallery</span>
                </h1>
                <p className="header_sub_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec eu pulvinar magna.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
            </div>
            <img src={flora} alt="flora" className="flora pt-5" />
            <div className="container d-flex justify-content-center">
                <div className="gallery_box">
                    <div className="item item-1">
                        <img src={foodImg1} alt="food_img" />
                    </div>
                    <div className="item item-featured item-2">
                        <img src={foodImg2} alt="food_img" />
                    </div>
                    <div className="item item-3">
                        <img src={foodImg3} alt="food_img" />
                    </div>
                    <div className="item item-4">
                        <img src={foodImg4} alt="food_img" />
                    </div>
                    <div className="item item-5">
                        <img src={foodImg5} alt="food_img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
