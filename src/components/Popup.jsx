    import { Buttons } from "./";
    import profilePic from "/popup-profile-pic.png";
    import creditCard from "/credit-card.svg";
    import clock from "/clock.svg";
    import { useEffect, useRef } from "react";

    export default function Popup() {
        const popUpRef = useRef(null);

        useEffect(() => {
            const line = document.querySelector(".vs-line");
            const footer = document.querySelector("footer");

            function handleScroll() {
                const showFrom = line.getBoundingClientRect().y;
                const hideFrom = footer.getBoundingClientRect().y;

                if (window.innerHeight >= showFrom) {
                    popUpRef.current.classList.remove("slide-down");
                    popUpRef.current.classList.add("slide-top");
                } else {
                    if (popUpRef.current.classList.contains("slide-top")) {
                        popUpRef.current.classList.remove("slide-top");
                        popUpRef.current.classList.add("slide-down");
                    }
                }
                if (window.innerHeight >= hideFrom) {
                    popUpRef.current.classList.remove("slide-top");
                    popUpRef.current.classList.add("slide-down");
                }
            }

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return (
            <div className="popup-container" ref={popUpRef}>
                <div className="row">
                    <span>
                        <img src={profilePic} alt="user profile pictures" />
                    </span>
                    <span>
                        <h4>Join with our Thousands of professionals Now !</h4>
                    </span>
                    <span>
                        <Buttons variant="secondary">Get a Free Trial Now!</Buttons>
                    </span>
                </div>
                <div className="row">
                    <span>
                        <img src={creditCard} alt="credit card icon" />
                        <em>No Credit Card</em> Required
                    </span>
                    <span>
                        <img src={clock} alt="credit card icon" />
                        <em>14 Days Free</em> Trial
                    </span>
                </div>
            </div>
        )
    }