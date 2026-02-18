import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivories Dental Clinic | Premium Dental Care & Smile Designing",
  description:
    "Experience world-class dental care with Ivories Dental Clinic. Specializing in Root Canal, Implants, Braces, and Smile Designing since 2004. Book your consultation today.",
  keywords: ["Dental Clinic", "Ahmedabad", "Root Canal", "Dental Implants", "Smile Designing", "Braces"],
  authors: [{ name: "Ivories Dental Clinic" }],
  openGraph: {
    title: "Ivories Dental Clinic | Premium Dental Care",
    description:
      "Experience world-class dental care with Ivories Dental Clinic. Specializing in Root Canal, Implants, Braces, and Smile Designing since 2004.",
    url: "https://ivories-dental.vercel.app",
    siteName: "Ivories Dental Clinic",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsm2wQlZf5uBMKLIcib2r8TL15yZDHqRdu0O8SEnY63ywptAE6doqlvKstpxTTGhyHkItcYKjfZ13IZPOxuoZhNQrUe-HKqQhr9y-YH-evlxs4snwh8VYhXWYf-QSdJxL-HsUI8UfUWWul6_-rwjadbpP1UXzHrbz1PmKAZ7Aw31uP19aUxmNBH4EIT2lzYQWrlIOGgVb5HpxUbqKNvwsCfJUgj12684AGJI-bhlzx8AxzMND2jd0nsh7JbsqiiqZzOt669CFJw",
        width: 1200,
        height: 630,
        alt: "Ivories Dental Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivories Dental Clinic | Premium Dental Care",
    description:
      "Experience world-class dental care with Ivories Dental Clinic. Specializing in Root Canal, Implants, Braces, and Smile Designing since 2004.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsm2wQlZf5uBMKLIcib2r8TL15yZDHqRdu0O8SEnY63ywptAE6doqlvKstpxTTGhyHkItcYKjfZ13IZPOxuoZhNQrUe-HKqQhr9y-YH-evlxs4snwh8VYhXWYf-QSdJxL-HsUI8UfUWWul6_-rwjadbpP1UXzHrbz1PmKAZ7Aw31uP19aUxmNBH4EIT2lzYQWrlIOGgVb5HpxUbqKNvwsCfJUgj12684AGJI-bhlzx8AxzMND2jd0nsh7JbsqiiqZzOt669CFJw",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@100..700,0..1,0,24"
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
