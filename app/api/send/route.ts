import { Resend } from "resend";
import * as React from "react";
import Email from "@/components/email-template";

export async function POST(req: any, res: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { from_name, email, phone, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Askar Dev <onboarding@resend.dev>",
      to: ["joelfrontend@gmail.com"],
      subject: "Askar Dev Contact Me",
      text: "it works",
      html: Email({ from_name, email, phone, message }),
    });

    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error, koko: "KOKO" });
  }
}
