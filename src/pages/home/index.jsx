import { SmoothCarousel } from "../../components";
import Popup from "../../components/Popup";
import Banner from "./Banner";
import Challenges from "./Challenges";
import CRMSupport from "./CRMSupport";
import Cta from "./Cta";
import HowItWorks from "./HowItWorks";
import TabComponent from "./TabContent";
import Testimonials from "./Testimonials";

export function Home() {
  return (
    <>
      {/* banner/hero section */}
      <Banner />

      {/* infinite scroll USP section */}
      <SmoothCarousel />

      {/* without vs with leadCRM section */}
      <Challenges />

      {/* How LeadCRM works section */}
      <HowItWorks />

      {/* reviews/testimonials section */}
      <Testimonials />

      {/* Sales Solutions tab content section */}
      <TabComponent />

      {/* Supported CRMs section */}
      <CRMSupport />

      {/* Call to action section */}
      <Cta />

      {/* Call to action popup/floating bar
       */}
      <Popup />
    </>
  )
}
