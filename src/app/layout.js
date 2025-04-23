/* eslint-disable @next/next/no-page-custom-font */
import "react-toastify/dist/ReactToastify.css";

import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import isMobileServerSide from "@/utils/isMobileServerSide";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Nogal de Cuyo",
  description:
    "Nogal de Cuyo es una empresa de transporte de pasajeros mendocina, formada en el año 1997.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navbar isMobile={isMobileServerSide()} />
        {children}
        <Whatsapp />

        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
