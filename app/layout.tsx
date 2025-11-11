import "./globals.css";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WalletProvider from "../components/WalletProvider";

export const metadata: Metadata = {
  title: "Aqalisa.id — 3D Web3 Shop",
  description: "Style muslimah elegan tanpa ribet."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <WalletProvider>
          <Nav />
          <main className="container py-8">{children}</main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
