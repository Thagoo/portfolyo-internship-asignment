import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gavi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <script
          src="/assets/js/jquery-migrate-3.4.0.min.js"
          strategy="beforeInteractive"
        />
        <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
        <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
        <script src="/assets/js/three.min.js" strategy="lazyOnload" />
        <link rel="preload" href="/dark/assets/css/style.css" as="style" />
        <link rel="stylesheet" href="/dark/assets/css/style.css" />
        <link rel="preload" href="/dark/assets/css/plugins.css" as="style" />
        <link rel="stylesheet" href="/dark/assets/css/plugins.css" />
      </head>
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
