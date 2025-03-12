"use client"
// import type { Metadata } from "next";
// import "./globals.css";

// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { SessionProvider } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "Foyer",
//   description: "Make your home smart. Control everything at your fingertips",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>
//           <ThemeProvider>{children}</ThemeProvider>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }



"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <ThemeProvider>{children}</ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
