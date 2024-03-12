interface EmailProps {
  from_name: string;
  phone: string;
  email: string;
  message: string;
}

const Email = ({ from_name, phone, email, message }: EmailProps) => {
  const htmlString = `
    <html lang="en" dir="ltr">
      <body>
        <p>from: ${from_name}</p>
        <p>phone: ${phone}</p>
        <p>email: ${email}</p>
        <p>${message}</p>
      </body>
    </html>
  `;

  return htmlString;
};

export default Email;