import "./globals.css";
import navbar from "@/components/navbar";
import footer from "@/components/footer"

export const metadata = {
  title: "Newsly",
  description: "News aggregation website",
  author: "Terence Chen"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <navbar/>
        {children}
        <footer/>
      </body>
    </html>
  );
}
