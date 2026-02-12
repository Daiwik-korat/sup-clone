import Navbar from "../components/header/navbar";
import Hero from "../components/Hero";
import FeatureHighlight from "../components/featureHighlights/featureHighlight";
import HowitWorks from "../components/howItWorks/howItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureHighlight />

      <HowitWorks />

      <div className="w-full h-1000">

      </div>
    </>
  );
}
