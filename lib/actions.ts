import { cookies } from "next/headers";
export async function onContactMeFormSubmit(formData: FormData) {
  "use server";
  const from_name = formData.get("from_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const oneMinute = 60 * 1000;
  const expirationDate = new Date(Date.now() + oneMinute);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from_name, email, phone, message }),
  };

  try {
    // const response = await fetch(
    //   "http://localhost:3000/api/send",
    //   requestOptions
    // );
    // if (!response.ok) {
    //   throw new Error("Ошибка при выполнении запроса");
    // }
    cookies().set("sent", "true", { expires: expirationDate });
    // return response.json();
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}
