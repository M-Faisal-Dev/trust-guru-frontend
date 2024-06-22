import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Instructor-detail/Nav";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import { AuthProvider} from "@/Context/AuthContext";




const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "TrustYourGuru",
  description: "La nostra missione è rivoluzionare il mondo del coaching fornendo una piattaforma che crei relazioni tra coach appassionati e persone in cerca di crescita. Ci impegniamo a creare un ambiente accessibile e sicuro dove i coach possano monetizzare le loro competenze e dove gli studenti possano accedere a percorsi di coaching di alta qualità.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      <AuthProvider>
        <div className = "z-10">

      <Navbar />
        </div>
      <ToastContainer/>
      {children}
      <Footer/>
      </AuthProvider>
      </body>
    </html>
  );
}
