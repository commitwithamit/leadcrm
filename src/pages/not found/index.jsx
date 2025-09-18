import { Buttons } from "../../components";
import pageNotFound from "/pagenotfound.svg";
export function PageNotFound() {
    return (
        <section className="site-width pagenotfound">
            <img src={pageNotFound} alt="page not found 404 error" />
            <Buttons to="/" children="Go to Home" type="link" variant="secondary"/>
        </section>
    )
}
