import { Buttons } from "../../components";
import support from "/supported-leadcrm.png";
import supportVertical from "/supported-leadcrm-vertical.webp";

export default function CRMSupport() {
    return (
        <section className="crm-support">
            <div className="site-width">
                <h2>Our Supported LeadCRM</h2>
                <p>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. <br /> We don’t want you to miss any revenue opportunity on the internet!</p>
                <div>
                    <picture>
                        <source media="(min-width: 768px)" srcSet={support} />
                        <img src={supportVertical} alt="Our Supported LeadCRM" />
                    </picture>
                    <Buttons variant="secondary">Lets Integrate your CRM Now!</Buttons>
                </div>
            </div>
        </section>
    )
}