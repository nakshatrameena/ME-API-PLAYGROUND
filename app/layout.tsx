
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ME API Playground",
  description: "Explore and test APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
