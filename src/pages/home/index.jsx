import { SmoothCarousel } from "../../components";
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
        <Banner/>
        <SmoothCarousel/>
        <Challenges/>
        <HowItWorks/>
        <Testimonials/>
        <TabComponent/>
        <CRMSupport/>
        <Cta/>
    </>
  )
}
