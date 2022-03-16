import React from "react";
import flora from "../img/custom-divider-1.png";
import blogImage1 from "../img/blog/blog-restaurant-4.jpg";
import blogImage5 from "../img/blog/blog-restaurant-5.jpg";
import blogImage6 from "../img/blog/blog-restaurant-6.jpg";
import teamImage26 from "../img/team/team-26.jpg";
import teamImage27 from "../img/team/team-27.jpg";
import teamImage28 from "../img/team/team-28.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function NewsSection() {
    return (
        <section className="info row w-100">
            <div className="blog col-lg-6 color-blog">
                <div className="blog_block text-center">
                    <div className="blog_text ">
                        <h1 className="fs-2 opacity-75 fw-bold">
                            Our <span className="fw-bolder">Blog</span>{" "}
                        </h1>
                        <p className="header_sub_text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit...
                        </p>
                    </div>
                    <img src={flora} alt="sev" className="flora" />
                    <div className="slider">
                        <OwlCarousel
                            items={1}
                            loop={true}
                            autoplay={true}
                            delay={1000}
                            animateIn={"slideInUp"}
                            animateOut={"slideOutUp"}
                            mouseDrag={false}
                            className="news_slider slider owl-carousel owl-theme"
                        >
                            <div className="slide1">
                                <div className="news1">
                                    <div className="img">
                                        <img
                                            src={blogImage1}
                                            alt="img"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="blog-text text-start d-flex flex-column justify-content-between">
                                        <h1 className="article_header_text">
                                            Lorem ipsum dolor sit
                                        </h1>
                                        <p className="header_sub_text">
                                            Lorem ipsum dolor sit, amet cons
                                            ectetur adipis icing elit. Reici
                                            endis max ime cons equatur deleniti
                                            fugit quo magnam?
                                        </p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                                <div className="news1">
                                    <div className="img">
                                        <img
                                            src={blogImage5}
                                            alt="img"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="blog-text text-start d-flex flex-column justify-content-between">
                                        <h1 className="article_header_text">
                                            Lorem ipsum dolor sit
                                        </h1>
                                        <p className="header_sub_text">
                                            Lorem ipsum dolor sit, amet cons
                                            ectetur adipis icing elit. Reici
                                            endis max ime cons equatur deleniti
                                            fugit quo magnam?
                                        </p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="slide1">
                                <div className="news1">
                                    <div className="img">
                                        <img
                                            src={blogImage5}
                                            alt="img"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="blog-text text-start d-flex flex-column justify-content-between">
                                        <h1 className="article_header_text">
                                            Lorem ipsum dolor sit
                                        </h1>
                                        <p className="header_sub_text">
                                            Lorem ipsum dolor sit, amet cons
                                            ectetur adipis icing elit. Reici
                                            endis max ime cons equatur deleniti
                                            fugit quo magnam?
                                        </p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                                <div className="news1">
                                    <div className="img">
                                        <img
                                            src={blogImage6}
                                            alt="img"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="blog-text text-start d-flex flex-column justify-content-between">
                                        <h1 className="article_header_text">
                                            Lorem ipsum dolor sit
                                        </h1>
                                        <p className="header_sub_text">
                                            Lorem ipsum dolor sit, amet cons
                                            ectetur adipis icing elit. Reici
                                            endis max ime cons equatur deleniti
                                            fugit quo magnam?
                                        </p>
                                        <a href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="team col-lg-6 color-team">
                <div className="blog_block text-center">
                    <div className="blog_text ">
                        <h1 className="fs-2 opacity-75 fw-bold">
                            Our <span className="fw-bolder">Team</span>{" "}
                        </h1>
                        <p className="header_sub_text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing
                            elit...
                        </p>
                    </div>
                    <img src={flora} alt="sev" className="flora" />
                    <div className="slider">
                        <OwlCarousel
                            items={1}
                            loop={true}
                            className="team_slider slider owl-carousel owl-theme"
                        >
                            <div className="slide1">
                                <div className="news1 ">
                                    <img
                                        src={teamImage26}
                                        alt="img"
                                        className="w-100"
                                    />
                                    <div className="blog-text text-start d-flex flex-column justify-content-between text-center">
                                        <h1 className="article_header_text">
                                            Jessica Doe
                                        </h1>
                                        <p className="header_sub_text">Chef</p>
                                    </div>
                                </div>
                                <div className="news1 ">
                                    <img
                                        src={teamImage27}
                                        alt="img"
                                        className="w-100"
                                    />
                                    <div className="blog-text text-start d-flex flex-column justify-content-between text-center">
                                        <h1 className="article_header_text">
                                            John Doe
                                        </h1>
                                        <p className="header_sub_text">Chef</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide1">
                                <div className="news1 ">
                                    <img
                                        src={teamImage27}
                                        alt="img"
                                        className="w-100"
                                    />
                                    <div className="blog-text text-start d-flex flex-column justify-content-between text-center">
                                        <h1 className="article_header_text">
                                            Jessica Doe
                                        </h1>
                                        <p className="header_sub_text">Chef</p>
                                    </div>
                                </div>
                                <div className="news1 ">
                                    <img
                                        src={teamImage28}
                                        alt="img"
                                        className="w-100"
                                    />
                                    <div className="blog-text text-start d-flex flex-column justify-content-between text-center">
                                        <h1 className="article_header_text">
                                            John Doe
                                        </h1>
                                        <p className="header_sub_text">Chef</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
