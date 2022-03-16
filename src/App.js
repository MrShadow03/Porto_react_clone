import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MainContent from "./components/MainContent";
import UserReview from "./components/UserReview";
import Gallery from "./components/Gallery";
import NewsSection from "./components/NewsSection";
import SpecialMenu from "./components/SpecialMenu";
import FooterComponent from "./components/FooterComponent";

export default function App() {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <MainContent />
            <UserReview />
            <Gallery />
            <NewsSection />
            <SpecialMenu />
            <FooterComponent />
        </div>
    );
}
