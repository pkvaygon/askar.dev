import emailjs from "@emailjs/browser";
import { cookies } from "next/headers";
export async function onContactMeFormSubmit(formData: FormData) {
  "use server";
  const from_name = formData.get("from_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const oneMinute = 60 * 1000;
  const expirationDate = new Date(Date.now() + oneMinute);

  cookies().set("sent", "true", { expires: expirationDate });
  return true;
  //   try {
  //     emailjs.send(
  //       "service_vlv7rbg",
  //       "template_pwrah8n",
  //       {
  //         from_name,
  //         email,
  //         phone,
  //         message,
  //       },
  //       { publicKey: "W5rWt7iwNDJkbh3OM" }
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
}
