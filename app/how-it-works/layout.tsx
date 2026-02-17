// ./app/how-it-works/layout.tsx
import type { Metadata } from "next";

import Navbar from "../../components/header/navbar";

export const metadata: Metadata = {
  title: "How Superpower works",
  description:
    "Book your labs in 15 min, and test 100+ labs in 1 blood draw. Get your results within a week.",
  openGraph: {
    title: "How Superpower works",
    description:
      "Book your labs in 15 min, and test 100+ labs in 1 blood draw. Get your results within a week.",
    url: "https://superpower.com/how-it-works",
    type: "website",
    images: [
      {
        url: "sample-opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Home page logo",
      },
    ],
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
