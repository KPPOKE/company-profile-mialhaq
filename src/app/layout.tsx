import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/layout/SiteContext";

export const metadata: Metadata = {
  title: {
    default: "MI AL HAQ | Madrasah Ibtidaiyah Sejak 1978",
    template: "%s | MI AL HAQ",
  },
  description:
    "Company profile bilingual MI AL HAQ, Madrasah Ibtidaiyah sejak 1978 dengan Kurikulum Merdeka, Kurikulum Berbasis Cinta, dan pembinaan akhlakul karimah.",
  icons: {
    icon: "/clear_bckround_logo_sekolah.png",
    shortcut: "/clear_bckround_logo_sekolah.png",
    apple: "/clear_bckround_logo_sekolah.png",
  },
  openGraph: {
    title: "MI AL HAQ | Madrasah Ibtidaiyah Sejak 1978",
    description:
      "Company profile bilingual MI AL HAQ, Madrasah Ibtidaiyah sejak 1978 dengan Kurikulum Merdeka, Kurikulum Berbasis Cinta, dan pembinaan akhlakul karimah.",
    type: "website",
  },
  metadataBase: new URL("https://mia-alfaq.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-background text-text antialiased font-sans">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
