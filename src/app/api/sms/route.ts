import { addToSpreadsheet } from "@/lib/gsheets";

export async function POST(request: Request) {
  const data = await request.json();

  const newApplication = await addToSpreadsheet("sms", data);

  if (newApplication) {
    return new Response("Success", {
      status: 200,
    });
  } else {
    return new Response("Failed", {
      status: 400,
    });
  }
}
