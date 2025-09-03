import logo from "/leadcrm-logo.png";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import x from "/x.png";
import linkedIn from "/linkedin.png";
import mail from "/mail.png";
import help from "/help.png";
import call from "/call.png";
import chrome from "/chrome-logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="site-width">
        <div className="row">
          <div className="col">
            <Link to="/">
              <img src={logo} alt="lead crm logo" className="logo" />
            </Link>
            <p>LeadCRM is LinkedIn integration tool for your CRM.</p>
            <div className="socials">
              <Link to="/">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img src={x} alt="x" />
              </Link>
              <Link to="/">
                <img src={linkedIn} alt="linkedIn" />
              </Link>
              <Link to="/">
                <img src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
          <div className="col">
            <h5>Integrations</h5>
            <ul>
              <li>
                <Link to="/">HubSpot</Link>
              </li>
              <li>
                <Link to="/">Salesforce</Link>
              </li>
              <li>
                <Link to="/">Pipedrive</Link>
              </li>
              <li>
                <Link to="/">Close.io <span className="coomingsoon-pill">Coming Soon</span></Link>
              </li>
              <li>
                <Link>Insightly <span className="coomingsoon-pill">Coming Soon</span></Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Alternative</h5>
            <ul>
              <li>
                <Link to="/">Surfe VS LeadCRM</Link>
              </li>
              <li>
                <Link to="/">Linkmatch Alternative</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <ul>
              <li>
                <img src={mail} alt="mail icon" /><Link to="mailto:support@leadcrm.io">support@leadcrm.io</Link>
              </li>
              <li>
                <img src={call} alt="call icon" /><Link to="tel:+1 231-538-7466">+1 231-538-7466</Link>
              </li>
              <li>
                <img src={help} alt="help icon" /><Link to="/">Help Center</Link>
              </li>
            </ul>
            <a className="multiline-btn" href="/" data-discover="true"><div><p>Available in</p><p>Chrome Web Store</p></div><div><img alt="chrome logo" src={chrome}/></div></a>
          </div>
        </div>
        <div className="row">
          <p className="disclaimer">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
          </p>
          <h6>Copyright © {currentYear} LeadCRM. All Rights Reserved.</h6>
        </div>
      </div>
    </footer>
  )
}
