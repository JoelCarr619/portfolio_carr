import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <body>{children}</body>
      <Footer />
    </>
  );
}
