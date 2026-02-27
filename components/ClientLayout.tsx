"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Nav";
import Footer from "./home/Footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/UI-Components/Pages/Page404";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
