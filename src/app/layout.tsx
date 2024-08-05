"use client"

import { inter } from '../app/utilities/fonts'
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [activePage, setActivePage] = useState('/');

  return (
    <html lang="en" className={`${inter.className} bg-baby-powder`}>
      <body>
       <Header activePage={activePage} setActivePage={setActivePage}/>
        {children}
      <Footer />
      </body>
    </html>
);

}
