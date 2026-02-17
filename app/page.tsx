// .app/page

import Navbar from "../components/header/navbar";
import Hero from "../components/hero/Hero";
import FeatureHighlight from "../components/featureHighlights/featureHighlight";
import HowitWorks from "../components/howItWorks/howItWorks";
import ProductsSec from "../components/ProductsSec/ProductsSec";
import Membership from "../components/membership/Membership";
import FAQSec from "../components/faqSec/faqSec";
import Footer from "../components/footer/footer";
import TestimonialSection from "../components/testimonial/TestimonialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlight />
      <HowitWorks />
      <ProductsSec />
      <Membership />
      <TestimonialSection />
      <FAQSec />
    </>
  );
}
