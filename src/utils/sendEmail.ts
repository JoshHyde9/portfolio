import SparkPost from "sparkpost";
import { env } from "../server/env.mjs";

const client = new SparkPost(env.SPARKPOST_API_KEY);

export const sendEmail = async (
  name: string,
  contactEmail: string,
  subject: string,
  message: string
) => {
  await client.transmissions.send({
    content: {
      from: `${name} <josh@hello.joshhyde.me>`,
      subject,
      html: `<html><body><p>Contact email: ${contactEmail}</p><p>${message}</p></body></html>`,
    },
    recipients: [{ address: env.MY_EMAIL_ADDRESS }],
  });
};
