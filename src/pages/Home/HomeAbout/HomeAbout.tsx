import aboutImageDark from "@/assets/images/image-about-dark.jpg";
import aboutImageLight from "@/assets/images/image-about-light.jpg";
import "./HomeAbout.scss";

export default function HomeAbout() {
    return (
        <section className="home-about">
            <img
                className="home-about__image"
                src={aboutImageDark}
                alt="A white chair with a white background."
            />

            <div className="home-about__text">
                <h2 className="heading-md">About our furniture</h2>
                <p className="text-md text-grey">
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme
                    that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or
                    anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>

            <img
                className="home-about__image"
                src={aboutImageLight}
                alt="A set of chairs and a table in a dark room."
            />
        </section>
    );
}