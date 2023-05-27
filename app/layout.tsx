import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar";
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Pk",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="container">
          <div className="main-container">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="main-layout-side">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
