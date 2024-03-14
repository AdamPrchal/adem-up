import { JWT } from "google-auth-library";

import { GoogleSpreadsheet } from "google-spreadsheet";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const PRIVATE_KEY = process.env.PRIVATE_KEY
  ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
  : "";

export async function POST(request: Request) {
  const jwt = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: SCOPES,
  });

  const data = await request.json();

  const person = data.queryResult.parameters;
  console.log(person);

  const doc = new GoogleSpreadsheet(process.env.SHEET_ID as string, jwt);
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  const newApplication = await sheet.addRow({
    name: `${person["given-name"]} ${person["last-name"]}`,
    email: person["email"],
  });

  const responseBody = {
    fulfillmentMessages: [
      {
        text: {
          text: [
            `Thank you ${person["given-name"]}`,
            "We have added you to our job applications list.",
            "Someone from HR will get in touch with you soon!",
          ],
        },
      },
    ],
  };

  return Response.json(responseBody);
}
