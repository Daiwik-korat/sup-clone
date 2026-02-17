import Navbar from "../components/header/navbar";
import Hero from "../components/hero/Hero";
import FeatureHighlight from "../components/featureHighlights/featureHighlight";
import HowitWorks from "../components/howItWorks/howItWorks";
import ProductsSec from "../components/ProductsSec/ProductsSec";
import Membership from "../components/membership/Membership";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import Footer from "../components/footer/footer";
import FAQSec from "../components/faqSec/faqSec";
import { getProductsData, getFAQData, getReviewData } from "./__lib/api";
import StoreInitializer from "./__lib/StoreInitializer";

export default async function Home() {
  const [productData, faqData, reviewData] = await Promise.all([
    getProductsData(),
    getFAQData(),
    getReviewData(),
  ]);

  return (
    <main>
      <StoreInitializer 
        products={productData} 
        faqs={faqData} 
        reviews={reviewData} 
      />
      <Navbar />
      <Hero />
      <FeatureHighlight />
      <HowitWorks />
      <ProductsSec />
      <Membership />
      <TestimonialSection />
      <FAQSec />
      <Footer />
    </main>
  );
}