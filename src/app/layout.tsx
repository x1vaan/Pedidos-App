import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Providers from "./_components/Providers";
import SideBar from "./_components/SideBar";
import { Toaster } from "sonner";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedidos App",
  description: "Prototipo de aplicacion para pedidos de restaurante to-go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`absolute bg-backgroundColor flex w-full h-full ${font.className}`}
      >
        <Toaster position="bottom-left" expand={true} />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
