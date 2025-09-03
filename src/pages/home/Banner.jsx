import rocket from "/rocket.png";
import pipedrive from "/pipedrive-crm.png";
import hubpost from "/hubpost-crm.png";
import salesforce from "/salesforce-crm.png";
import chromeWeb from "/chromeWeb-logo.png";
import capterra from "/capterra-logo.png";
import chrome from "/chrome-logo.png";
import star from "/star.png";
import { Link } from "react-router-dom";
import { Buttons } from "../../components";

export default function Banner() {

    return (
        <section className="banner">
            <div className="site-width">
                <p className="pill-text">
                    <img src={rocket} alt="rocket icon" />
                    <span>Thousands of Professional using LeadCRM</span>
                </p>
                <h1>
                    LinkedIn CRM Integration <br /> Capture, Sync and Enrich in <span>Both Ways</span>
                </h1>
                <p>
                    Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                </p>
                <div className="crm-box">
                    <span>Works with</span>
                    <div>
                        <img src={hubpost} alt="hubpost" />
                        <img src={pipedrive} alt="pipedrive" />
                        <img src={salesforce} alt="salesforce" />
                    </div>
                </div>
                <div className="ratings">
                    <div>
                        <span><img src={chromeWeb} alt="chrome logo" /></span>
                        <span>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            5/5
                        </span>
                    </div>
                    <div>
                        <span><img src={capterra} alt="capterra logo" /></span>
                        <span>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            5/5
                        </span>
                    </div>
                </div>
                <div className="calltoaction">
                    <Link className="multiline-btn">
                        <div>
                            <p>Available in</p>
                            <p>Chrome Web Store</p>
                        </div>
                        <div>
                            <img src={chrome} alt="chrome logo" />
                        </div>
                    </Link>
                    <Buttons variant="secondary">Get a Free Trial Now!</Buttons>
                </div>
            </div>
        </section>
    )
}
