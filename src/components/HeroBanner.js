import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function HeroBanner() {
    return (
        <section>
            <OwlCarousel
                items={1}
                loop={true}
                autoplay={true}
                delay={1000}
                animateIn={"fadeIn"}
                animateOut={"fadeOut"}
                dots={false}
                mouseDrag={false}
                className="banner_slider owl-carousel owl-theme"
            >
                <section className="banner">
                    <div className="container">
                        <div className="content">
                            <span className="banner_top_text">WELCOME TO</span>
                            <h1 className="banner_main_text">THE PROTO</h1>
                            <p className="banner_sub_text">
                                The best place to eat in downtown Proto!
                            </p>
                            <a href="#" className="banner_button">
                                Our Menu
                            </a>
                        </div>
                    </div>
                </section>
                <section className="banner_two">
                    <div className="container">
                        <div className="content">
                            <span className="banner_top_text">
                                Best ingredients, fresh prepared
                            </span>
                            <h1 className="banner_main_text">DELICIOUS</h1>
                            <p className="banner_sub_text">
                                The best place to eat in downtown Proto!
                            </p>
                            <a href="#" className="banner_button">
                                Our Menu
                            </a>
                        </div>
                    </div>
                </section>
            </OwlCarousel>
        </section>
    );
}
