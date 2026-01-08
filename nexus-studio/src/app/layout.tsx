import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '600'] });

export const metadata: Metadata = {
  title: "Nexus Studio | Digital Engineering",
  description: "High-end software development firm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {/* As linhas de grade que ficam no fundo do site todo */}
        <div className="grid-background">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
