import { addToSpreadsheet } from "@/lib/gsheets";
import twilio from "twilio";

export async function POST(request: Request) {
  const data = await request.json();
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  let success = false;

  const phone = data.phone;
  const datetime = new Date(data.datetime);

  const date = datetime.toLocaleDateString("en-US");
  const time = datetime.toLocaleTimeString("en-US");

  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER as string,
      to: phone,
      body: `Your consultation with AdEm Up Marketing is set for ${date} at ${time}.`,
    });
    success = true;
  } catch (err) {
    console.log(err);
  }

  await addToSpreadsheet("consultation", data);

  const responseBody = {
    phone: data.phone,
    datetime: data.datetime,
    success,
  };

  return Response.json(responseBody);
}
