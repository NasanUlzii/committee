import Hero from "./Hero/Hero";
import Faqs from "./Faqs/Faqs";
import Testimonial from "./Testimonial/Testimonial";
import Benefits from "./Benefits/Benefits";
import Newsletter from "./Newsletter/Newsletter";
import Services from "./Services/Services";
const PricingPlansData = [
  {
    id: "1",
    plan: "More Value",
    desc: "On average, services facilitated by Elder are 35% cheaper than traditional alternatives.",
  },
  {
    id: "2",
    plan: "More control",
    desc: "Whenever and however you need it, you set the scope of your service.",
  },
  {
    id: "3",
    plan: "More choice",
    desc: "Pick your favourite self-employed carer from personalised matches.",
  },
  {
    id: "4",
    plan: "More support",
    desc: "Use our platform to plan and manage care from anywhere, and chat to 5* rated support teams.",
  },
];
export default function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Benefits />
      <Testimonial />
      <Faqs />
      <Newsletter />
    </>
  );
}
