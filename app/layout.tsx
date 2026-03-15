import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BritePath Health Care Staffing Ltd | Reliable Healthcare Staffing Across Oxfordshire",
  description:
    "Professional Healthcare Assistants, Support Workers, and Senior Care Assistants available for temporary cover, ongoing placements, and emergency shifts across Oxfordshire.",
  keywords: [
    "healthcare staffing",
    "care agency",
    "Oxfordshire",
    "healthcare assistants",
    "support workers",
    "temporary healthcare staff",
    "DBS checked",
    "CQC aligned",
  ],
  openGraph: {
    title: "BritePath Health Care Staffing Ltd",
    description:
      "Reliable Healthcare Staffing Across Oxfordshire. Professional, DBS-checked, CQC-aligned staff.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
