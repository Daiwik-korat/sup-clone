// .app/how-it-works/page

import Navbar from "../../components/header/navbar";
import HowHero from "../../components/hero/How";
import Process from "../../components/GetClarity/Process";
import GuideSec from "../../components/guideSec/guideSec";
import FAQSec from "../../components/faqSec/faqSec";
import Footer from "../../components/footer/footer";
import Statastics from "../../components/statasticsSec/statastics";
import ActionPlan from "../../components/actionPlan/actionPlan";

export default function Page() {
  return (
    <>
      <Navbar />
      <HowHero />
      <Process />
      <GuideSec />
      <Statastics />
      <ActionPlan />
      <FAQSec />
      <Footer />
    </>
  );
}
