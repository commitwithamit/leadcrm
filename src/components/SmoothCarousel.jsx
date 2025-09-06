import contact from "/contact.png";
import waterfall from "/waterfall.png";
import field from "/field.png";
import click from "/click-cursor.png";
import { useEffect } from "react";

export function SmoothCarousel() {

    // cloning the ul list for infinite loop scrolling effect
    useEffect(()=>{
        const parent = document.getElementById("usp-parent");
        const content = document.getElementById("ticker");
        const clone = content.cloneNode(true); // true for including children

        clone.id = "cloned-ul";

        // inserting clone after the original (content)
        parent.insertBefore(clone, content.nextSibling);
    },[]);

    return (
        <section className="usp-ticker">
            <div id="usp-parent">
                <ul id="ticker">
                    <li>
                        <img src={contact} alt="contact icon" />
                        <h3>
                            Access to <b> 700M+ Contacts</b>
                        </h3>
                    </li>
                    <li>
                        <img src={click} alt="click cursor icon" style={{ "padding": "7px" }} />
                        <h3>
                            <b>One click push </b> to CRM
                        </h3>
                    </li>
                    <li>
                        <img src={field} alt="field icon" />
                        <h3>
                            <b>Custom Field</b> Mapping
                        </h3>
                    </li>
                    <li>
                        <img src={waterfall} alt="waterfall icon" style={{ "padding": "6px" }} />
                        <h3>
                            Advanced <b>Waterfall Enrichment</b>
                        </h3>
                    </li>                    
                </ul>
            </div>
            <div className="site-width"></div>
        </section>
    )
}
