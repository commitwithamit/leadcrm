import syncCRM from "/syncCRM.webp";
import extension from "/install-extension.webp";
import getData from "/get-data.webp";
import linkedin from "/browse-linkedin.webp";
import rightArrow from "/right-arrow-black.png";
import { Buttons } from "../../components";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="site-width">
        <h2>How it Works</h2>
        <p>From setup to success in <span>4 simple steps</span></p>
        <div className="cards-container">
          <div className="card">
            <div>
              <h3>1</h3>
              <h4>Install the Extension</h4>
              <p>Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.</p>
            </div>
            <img src={extension} alt="" />
          </div>
          <div className="card">
            <div>
              <h3>2</h3>
              <h4>Browse LinkedIn</h4>
              <p>Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.</p>
            </div>
            <img src={linkedin} alt="" />
          </div>
          <div className="card">
            <div>
              <h3>3</h3>
              <h4>Get Enriched Data</h4>
              <p>Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.</p>
            </div>
            <img src={getData} alt="" />
          </div>
          <div className="card">
            <div>
              <h3>4</h3>
              <h4>Sync to CRM Instantly</h4>
              <p>Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.</p>
            </div>
            <img src={syncCRM} alt="" />
          </div>
        </div>

        <Buttons variant="secondary" icon={rightArrow} position="after">Try LeadCRM Now</Buttons>
      </div>
    </section >
  )
}
