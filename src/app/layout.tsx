import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Bottombar from "@/components/Bottombar/Bottombar";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "News Pulse",
  description: "This Is New Pulse Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          <Header />

          <Menu />
          <Bottombar />
          {children}
        </Container>
      </body>
    </html>
  );
}
