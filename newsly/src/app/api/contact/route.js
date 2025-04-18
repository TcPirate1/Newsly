import { NextResponse } from "next/server";
import { verify } from "hcaptcha";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      from_name,
      sender_email,
      message,
      "h-captcha-response": token,
    } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA token is missing" },
        { status: 400 }
      );
    }

    const secret = process.env.HCAPTCHA_SECRET;
    const captchaResult = await verify(secret, token);

    if (!captchaResult.success) {
      return NextResponse.json(
        { success: false, message: "CAPTCHA verification failed" },
        { status: 400 }
      );
    } else {
      NextResponse.json(
        { success: true, message: "CAPTCHA verification success" },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error("Error sending email:\n", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
