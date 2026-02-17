import FAQ_FALLBACKs from "./constants/faqFallback";

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

export async function getProductsData() {
  const { URL, name } = getEnv();
  if (!URL || !name) throw new Error("Env missing");

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Productquery, variables: { linkName: name } }),
      cache: "no-store",
    });

    const json = await res.json();
    return {
      products:
        json.data.organizationPartnerIntegrationPublicInfo.productBundles,
    };
  } catch (e) {
    console.error("Product Fetch Error", e);
    return { products: [] };
  }
}

export async function getFAQData() {
  const { URL, name } = getEnv();
  if (!URL || !name) return FAQ_FALLBACKs;

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ FAQquery, variables: { linkName: name } }),
      cache: "no-store",
    });

    if (!res.ok) return FAQ_FALLBACKs;
    const json = await res.json();
    const data = json.data.organizationPartnerIntegrationPublicInfo.faq;
    return data.length > 0 ? data : FAQ_FALLBACKs;
  } catch (e) {
    return FAQ_FALLBACKs;
  }
}

export async function getReviewData() {
  const { URL, name } = getEnv();
  if (!URL || !name) return [];

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Reviewquery, variables: { linkName: name } }),
      cache: "no-store",
    });
    const json = await res.json();
    return json.data.organizationPublicTestimonials || [];
  } catch (e) {
    return [];
  }
}
