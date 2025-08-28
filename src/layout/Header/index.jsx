import logo from "/leadcrm-logo.png";
import { getNameFromUrl } from "../../utility/helperFunctions";
import { Buttons } from "../../components";
import { Link } from "react-router-dom";
import chevron from "/Vector.png";
import frame from "/frame.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function Header() {
  return (
    <header>
      <div className="site-width">
        <div>
          <Buttons type="link" path="/" className="logo">
            <img src={logo} alt={getNameFromUrl(logo)} />
          </Buttons>
        </div>
        <div>
          <nav>
            <div className="mobile-logo-close">
              <Buttons type="link" path="/" className="logo">
                <img src={logo} alt={getNameFromUrl(logo)} />
              </Buttons>
              <span>X</span>
            </div>
            <ul>
              <li>
                <Link to="#">Product <img src={chevron} alt="chevron down" /></Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="#">Resources <img src={chevron} alt="chevron down" /></Link>
              </li>
              <li>
                <Link to="#">Company <img src={chevron} alt="chevron down" /></Link>
              </li>
            </ul>
          </nav>
          <div>
            <Buttons variant="primary" className="hide-btn">Get Your Free Account</Buttons>
            <Buttons variant="outline" icon={frame}>Login</Buttons>
            <Buttons variant="outline" className="menu-icon"><HiOutlineMenuAlt3/></Buttons>
          </div>
        </div>
      </div>
    </header>
  )
}
