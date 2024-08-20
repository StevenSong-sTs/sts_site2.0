import type { Metadata } from "next";
import { Inter, Passion_One} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const passion_one = Passion_One({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Steven Song",
  description: "Welcome to my site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={passion_one.className}>{children}</body>
    </html>
  );
}
