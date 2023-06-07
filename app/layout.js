import Header from "../Components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rest Countries App",
  description: "Rest Countries App FrontEnd Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-cfont">
      <body className={`${inter.className} h-screen`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
