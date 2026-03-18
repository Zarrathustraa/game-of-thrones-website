import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game of Thrones | The Seven Kingdoms",
  description: "Explore the world of Westeros - Great Houses, legendary characters, and the epic saga for the Iron Throne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27><text y=%27.9em%27 font-size=%2790%27>⚔️</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
