import FAQ_FALLBACKs from "./constants/faqFallback";
import { ProductBundle, FAQ, Review } from "@/app/__lib/types";

const getEnv = () => {
  return {
    URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    name: process.env.NEXT_PUBLIC_LINK_NAME,
  };
};

const FAQquery = `
    query GetFAQs($linkName: String) {
      organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
        faq { 
        answer 
        question 
        }
      }
    }
  `;

const Productquery = `
    query GetProducts($linkName: String) {
      organizationPartnerIntegrationPublicInfo(linkName: $linkName) {
        productBundles { name imageUrl price tag }
      }
    }
  `;

const Reviewquery = `
    query GetReviews($linkName: String) {
      organizationPublicTestimonials(linkName: $linkName) {
        content 
        createdAt 
        isVerified 
        rating 
        customerName 
        title
      }
    }
  `;


export async function getProductsData(): Promise<ProductBundle> {
  const { URL, name } = getEnv();
  if (!URL || !name) throw new Error("Env missing");

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: Productquery,
        variables: { linkName: name },
      }),
      cache: "no-store",
    });

    const json: { data: { organizationPartnerIntegrationPublicInfo: { productBundles: ProductBundle["products"] } } } = await res.json();
    return {
      products: json.data.organizationPartnerIntegrationPublicInfo.productBundles,
    };
  } catch (e) {
    console.error("Product Fetch Error", e);
    return { products: [] };
  }
}

export async function getFAQData(): Promise<FAQ[]> {
  const { URL, name } = getEnv();
  if (!URL || !name) return FAQ_FALLBACKs;

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: FAQquery,
        variables: { linkName: name },
      }),
      cache: "no-store",
    });

    if (!res.ok) return FAQ_FALLBACKs;

    const json: { data: { organizationPartnerIntegrationPublicInfo: { faq: FAQ[] } } } = await res.json();
    const data = json.data.organizationPartnerIntegrationPublicInfo.faq;
    return data.length > 0 ? data : FAQ_FALLBACKs;
  } catch (e) {
    return FAQ_FALLBACKs;
  }
}

export async function getReviewData(): Promise<Review[]> {
  const { URL, name } = getEnv();
  if (!URL || !name) return [];

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: Reviewquery,
        variables: { linkName: name },
      }),
      cache: "no-store",
    });

    const json: { data: { organizationPublicTestimonials: Review[] } } = await res.json();
    return json.data.organizationPublicTestimonials ?? [];
  } catch (e) {
    return [];
  }
}