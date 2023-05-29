"use client";

import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cortex",
  description: "Cortex app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const isFirstPage = router === "/";

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex">
          <div className="sidebar">
            {isFirstPage ? null : (
              <div className="sidebar">
                <Sidebar />
              </div>
            )}
          </div>
          <div className="contents">{children}</div>
        </div>
      </body>
    </html>
  );
}
