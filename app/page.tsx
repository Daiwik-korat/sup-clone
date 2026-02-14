import Navbar from "../components/header/navbar";
import Hero from "../components/Hero";
import FeatureHighlight from "../components/featureHighlights/featureHighlight";
import HowitWorks from "../components/howItWorks/howItWorks";
import ProductsSec from "../components/ProductsSec/ProductsSec";
import Membership from "../components/membership/Membership";
import FAQSec from "../components/faqSec/faqSec";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHighlight />
      <HowitWorks />
      <ProductsSec />
      <Membership />
      <FAQSec />
      <Footer />
    </>
  );
}
