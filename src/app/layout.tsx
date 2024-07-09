import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";
import Footer from "@/component/Footer/Footer";
import { AuthProvider } from "@/AuthContext/AuthContext";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTR",
  description: "OTR APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Box sx={{
            height:"150px"
          }}>
          <Header />
          </Box>
          <Box
            component="main"
            sx={{
            
              // minHeight: "calc(100vh - 128px)", // 64px header + 64px footer
            }}
          >
            {children}
          </Box>
          <Footer />
        </AuthProvider>
        
      </body>
      
    </html>
  );
}
