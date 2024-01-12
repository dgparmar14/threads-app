
import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import { ReduxProvider } from "../redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <Topbar />

            <main className="flex flex-row">
              <LeftSidebar />

              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {/* <ReduxProvider> */}
                  {children}
                  {/* </ReduxProvider> */}
                </div>
              </section>
              {/* @ts-ignore */}

              <RightSidebar />
            </main>

            <Bottombar />
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
