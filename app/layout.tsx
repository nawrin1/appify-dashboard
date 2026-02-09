import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/provider/storeProvider";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appify Analytics Dashboard",
  description: "Next.js + Redux Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
