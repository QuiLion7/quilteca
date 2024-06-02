import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import Header from "@/components/header";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "QuiLTeca - Biblioteca para Professores",
  description:
    "Contribua e utilize a melhor biblioteca de itens gratuitos para professores.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-w-screen min-h-screen w-full overflow-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
