"use client";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const formRef = useRef();
  const captchaRef = useRef(null);
  const [form, setForm] = useState({
    from_name: "",
    sender_email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Captcha not completed");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...form, "h-captcha-response": captchaToken }),
      });
      const result = await response.json();

      if (result.success) {
        alert("Your message was sent successfully, thank you!");
        setForm({from_name: "", sender_email: "", message: ""});
        setCaptchaToken(null);
        captchaRef.current.resetCaptcha();
      }
      else {
        alert("Oppsie... message was not sent.");
      }
    }
    catch (err) {
      console.error("Error submitting form:\n", err);
      alert("An error occured. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div>
          <h1>Nice to Meet You!</h1>
          <h4>Have a question or just want to get in touch? Let&#39;s chat!</h4>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="hidden" name="number" />
          <div>
            <label htmlFor="name">
              <span className="required">Name: *</span>
              <input
                type="text"
                id="name"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required="required"
                tabIndex="1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <span className="required">Email: *</span>
              <input
                type="email"
                id="email"
                name="sender_email"
                value={form.sender_email}
                onChange={handleChange}
                placeholder="Your Email"
                tabIndex="2"
                required="required"
              />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <span className="required">Message: *</span>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please write your message here."
                tabIndex="5"
                required="required"
              ></textarea>
            </label>
          </div>
          <div
            className="h-captcha"
          >
            <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={handleCaptchaVerify}
            onExpire={handleCaptchaExpire}
            ref={captchaRef}
            />
          </div>
          <div>
            <button name="submit" type="submit" id="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.displayName = "Contact";

export default Contact;
