import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

;




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
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={openSans.className}>
      {children}
     
      </body>
    </html>
  );
}
