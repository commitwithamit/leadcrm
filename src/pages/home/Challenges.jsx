import withCRM from "/withLeadCRM.png";
import withoutCRM from "/withoutLeadCRM.png";
import crossIcon from "/red-cross.png";
import logo from "/LCRM-favicon.png";
import bi from "/bi.png";
import overlay from "/overlay.png";
import brain from "/brain.png";
import contact from "/contact.png";
import savehours from "/save-hours.png";
import { Buttons } from "../../components";


export default function Challenges() {
  return (
    <section className="challenges">
      <div className="site-width">
        <h2>Every LinkedIn Prospector faces these daily challenges</h2>
        <div className="three-col">
          <div>
            <img src={withoutCRM} alt="without leadCRM" />
            <h4>Without LeadCRM</h4>
            <div>
              <ul>
                <li>
                  <div className="bullet">
                    <img src={crossIcon} alt="cross icon" />
                  </div>
                  <div>
                    <h6>
                      Manual Data Entry <span className="pill">3+ Hours wasted daily</span>
                    </h6>
                    <p>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={crossIcon} alt="cross icon" />
                  </div>
                  <div>
                    <h6>
                      Incomplete Data <span className="pill">60% Data Incomplete</span>
                    </h6>
                    <p>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={crossIcon} alt="cross icon" />
                  </div>
                  <div>
                    <h6>
                      No CRM Visibility <span className="pill">Zero context available</span>
                    </h6>
                    <p>Can’t see existing CRM contacts when browsing LinkedIn profiles</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={crossIcon} alt="cross icon" />
                  </div>
                  <div>
                    <h6>
                      Limited Productivity <span className="pill">No smart assistance</span>
                    </h6>
                    <p>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="vs-line">VS</div>

          <div>
            <img src={withCRM} alt="with leadCRM" />
            <h4><span>With LeadCRM</span> <img src={logo} alt="lead crm logo" /> <span className="pill">4+ Hours/day Saved</span></h4>
            <div>
              <ul>
                <li>
                  <div className="bullet">
                    <img src={bi} alt="bi icon" />
                  </div>
                  <div>
                    <h6>
                      Complete Bi-Directional Sync
                    </h6>
                    <p>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={contact} alt="contact icon" />
                  </div>
                  <div>
                    <h6>
                      700M+ Contacts + Enrichment
                    </h6>
                    <p>Get verified emails and phone numbers from a vast global database.</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={overlay} alt="overlay icon" />
                  </div>
                  <div>
                    <h6>
                      CRM Overlay on LinkedIn
                    </h6>
                    <p>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                  </div>
                </li>
                <li>
                  <div className="bullet">
                    <img src={brain} alt="brain icon" />
                  </div>
                  <div>
                    <h6>
                      AI Response + Templates + Bulk Exports
                    </h6>
                    <p>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="btn-relative">
          <Buttons variant="secondary">Start Using LeadCRM Now</Buttons>
          <img src={savehours} alt="save hours" />
        </div>
      </div>
    </section>
  )
}
