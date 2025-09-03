import { Buttons } from "../../components";
// import ctaImg from "/cta-img.webp";
import rightArrow from "/right-arrow-black.png";

export default function Cta() {
    return (
        <section className="cta-container">
            <div className="site-width">
                <h2>Join Thousands of Professionals Using LeadCRM</h2>
                <div className="heading-img">
                    <h3>Your LinkedIn Powerhouse for Smarter Lead Management</h3>
                    {/* <img src={ctaImg} alt="LeadCRM" /> */}
                </div>
                <Buttons variant="secondary" icon={rightArrow} position="after">Get Started Today</Buttons>
            </div>
        </section>
    )
}