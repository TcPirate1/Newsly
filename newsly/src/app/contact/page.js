import Contact from "@/components/contact";
import Script from "next/script";

export default function contactPage() {
    <Script src="https://js.hcaptcha.com/1/api.js" strategy="afterInteractive" async defer/>
    return <Contact/>
}