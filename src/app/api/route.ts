import { addToSpreadsheet } from "@/lib/gsheets";

export async function POST(request: Request) {
  const data = await request.json();

  const person = data.queryResult.parameters;
  const now = new Date();

  const newApplication = await addToSpreadsheet("applicants", {
    name: `${person["given-name"]} ${person["last-name"]}`,
    email: person["email"],
    created_at: now.toISOString(),
  });

  const responseBody = {
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Thank you ${person["given-name"]}. We have added you to our job applications list. Someone from HR will get in touch with you soon!`,
          ],
        },
      },
    ],
  };

  return Response.json(responseBody);
}
