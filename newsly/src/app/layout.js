import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer"

export const metadata = {
  title: "Newsly",
  description: "News aggregation website",
  author: "Terence Chen"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
