import closeImg from "@/assets/images/icon-close.svg";
import burgerImg from "@/assets/images/icon-hamburger.svg";
import logoImg from "@/assets/images/logo.svg";
import "./Header.scss";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type link = {
    url: string;
    title: string;
}

const links: link[] = [
    {
        url  : "/",
        title: "home"
    },
    {
        url  : "/",
        title: "shop"
    },
    {
        url  : "/",
        title: "about"
    },
    {
        url  : "/",
        title: "contact"
    }
];

const backdropVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity   : 0.3,
        transition: {
            duration: 0.5
        }
    },
    exit   : {
        opacity   : 0,
        transition: {
            duration: 0.5
        }
    }
};

const navVariants = {
    initial: {
        y: -100
    },
    animate: {
        y         : 0,
        transition: {
            duration: 0.5,
            ease    : "easeOut"
        }
    },
    exit   : {
        y         : -100,
        transition: {
            duration: 0.5,
            ease    : "easeOut"
        }
    }
};

export default function Header() {
    const [showHeader, setShowHeader] = useState(false);

    const toggleHeader = () => {
        setShowHeader(!showHeader);
    };

    return (
        <>
            <header className="header">
                <img className="header__burger" src={burgerImg} alt="" onClick={toggleHeader}/>
                <img className="header__logo" src={logoImg} alt="" role="presentation"/>

                <nav className="header__nav header__nav--desktop">
                    <ul className="header__nav-links">
                        {links.map((link) => (
                            <li key={link.title}>
                                <a className="header-link" href={link.url}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <AnimatePresence>
                {showHeader && (
                    <>
                        <motion.div
                            className="header__backdrop"
                            aria-hidden={true}
                            variants={backdropVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        />
                        <motion.nav
                            className="header__nav header__nav--mobile"
                            variants={navVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <img
                                className="header__burger"
                                src={closeImg}
                                alt=""
                                role="presentation"
                                onClick={toggleHeader}
                            />
                            <ul className="header__nav-links">
                                {links.map((link) => (
                                    <li key={link.title}>
                                        <a className="header-link" href={link.url}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}