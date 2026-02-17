// .app/how-it-works/page

import HowHero from "../../components/hero/How";
import Process from "../../components/GetClarity/Process";
import GuideSec from "../../components/guideSec/guideSec";
import Statastics from "../../components/statasticsSec/statastics";
import ActionPlan from "../../components/actionPlan/actionPlan";
import Footer from "../../components/footer/footer";
import FAQSec from "../../components/faqSec/faqSec";
import { getProductsData, getFAQData, getReviewData } from "../__lib/api";
import StoreInitializer from "../__lib/StoreInitializer";

export default async function Page() {
  const [productData, faqData, reviewData] = await Promise.all([
    getProductsData(),
    getFAQData(),
    getReviewData(),
  ]);

  return (
    <>
      <main>
        <StoreInitializer
          products={productData}
          faqs={faqData}
          reviews={reviewData}
        />
        <HowHero />
        <Process />
        <GuideSec />
        <Statastics />
        <ActionPlan />
        <FAQSec />
        <Footer />
      </main>
    </>
  );
}
