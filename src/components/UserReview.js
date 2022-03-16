import React from "react";
import flora from "../img/custom-divider-1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function UserReview() {
    return (
        <section className="banner2">
            <div className="container text-center">
                <img src={flora} alt="flora" className="flora" />
                <div>
                    <OwlCarousel
                        items={1}
                        className="comment_slider slider owl-carousel owl-theme"
                    >
                        <div className="slider01">
                            <div className="slide1">
                                <p className="comment_text">
                                    The best place in town! Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                    <br />
                                    Sed eget risus porta, tincidunt turpis at,
                                    interdum tortor. Suspendisse potenti.
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sociis natoque penatibus
                                    <br />
                                    et magnis dis parturient montes, nascetur
                                    ridiculus mus. Fusce ante tellus,
                                    <br />
                                    convallis non consectetur sed, pharetra nec
                                    ex.
                                </p>
                                <h1 className="header_text fs-3 fw-bold ">
                                    John Doe <br />
                                    <span className="fs-5 text-secondary">
                                        Executive Director
                                    </span>{" "}
                                </h1>
                            </div>
                        </div>
                        <div className="slider02">
                            <div className="slide1">
                                <p className="comment_text">
                                    The best place in town! Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.
                                    <br />
                                    Sed eget risus porta, tincidunt turpis at,
                                    interdum tortor. Suspendisse potenti.
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sociis natoque penatibus
                                    <br />
                                    et magnis dis parturient montes, nascetur
                                    ridiculus mus. Fusce ante tellus,
                                    <br />
                                    convallis non consectetur sed, pharetra nec
                                    ex.
                                </p>
                                <h1 className="header_text fs-3 fw-bold ">
                                    Jessica Doe <br />
                                    <span className="fs-5 text-secondary">
                                        Executive Director
                                    </span>{" "}
                                </h1>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}
