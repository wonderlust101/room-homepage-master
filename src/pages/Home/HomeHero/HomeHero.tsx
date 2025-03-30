import leftArrow from "@/assets/images/icon-angle-left.svg";
import rightArrow from "@/assets/images/icon-angle-right.svg";
import arrow from "@/assets/images/icon-arrow.svg";
import Picture from "@/components/Picture";
import "./HomeHero.scss";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const carouselVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

export default function HomeHero() {
    const [imageNumber, setImageNumber] = useState(1);

    const handleNextImage = () => {
        if (imageNumber >= 3) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    };

    const handlePreviousImage = () => {
        if (imageNumber <= 1) {
            setImageNumber(3);
        } else {
            setImageNumber(imageNumber - 1);
        }
    };

    return (
        <section className="home-hero">
            <div className="home-hero__carousel">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={imageNumber}
                        className="home-hero__carousel-container"
                        variants={carouselVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Picture
                            src={`images/mobile-image-hero-${imageNumber}.jpg`}
                            alt="Hero Image"
                            sources={[
                                {media: "(min-width: 48rem)", srcSet: `images/desktop-image-hero-${imageNumber}.jpg`}
                            ]}
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="home-hero__carousel-control">
                    <button className="home-hero__carousel-button-container" onClick={handlePreviousImage}>
                        <img src={leftArrow} alt="" role="presentation"/>
                    </button>

                    <button className="home-hero__carousel-button-container" onClick={handleNextImage}>
                        <img src={rightArrow} alt="" role="presentation"/>
                    </button>
                </div>
            </div>

            <div className="home-hero__main-content">
                <div className="home-hero__text">
                    <h1 className="heading-lg">Discover innovative ways to decorate</h1>
                    <p className="text-md text-grey">
                        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in
                        bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and
                        what
                        you love.
                    </p>
                </div>

                <a className="link home-hero__link" href="#">
                    Shop Now
                    <img src={arrow} alt="" role="presentation"/>
                </a>
            </div>
        </section>
    );
}