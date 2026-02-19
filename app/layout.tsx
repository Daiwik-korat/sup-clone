
import type { Metadata } from "next";
import StoreProvider from "./__lib/StoreProvider";
import Navbar from "../components/header/navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Superpower | Unlock your new health intelligence | Biomarker Testing",
  description: "Superpower specializes in prevention-based testing and treatments and is not intended for emergency or immediate health issues",
  openGraph: {
    title: "Superpower | Unlock your new health intelligence",
    description: "Superpower specializes in prevention-based testing and treatments and is not intended for emergency or immediate health issues",
    url: "https://superpower.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}