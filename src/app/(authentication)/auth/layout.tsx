import "./../../globals.css";
import localFont from "next/font/local";

const yekan = localFont({
  src: [
    {
      path: "./../../../../public/fonts/iranyekanwebregular.woff2",
      style: "regular",
    },
  ],
  variable: "--yekan-bakh",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${yekan.className}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
