import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const PRIVATE_KEY = process.env.PRIVATE_KEY
  ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
  : "";

type ApplicantData = {
  name: string;
  email: string;
  created_at: string;
};

type SmsData = {
  phone: string;
  content: string;
};

type ConsultationData = {
  phone: string;
  datetime: string;
};

export const addToSpreadsheet = async (
  spreadsheet: "applicants" | "sms" | "consultation",
  data: ApplicantData | SmsData | ConsultationData
) => {
  const jwt = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: SCOPES,
  });

  try {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID as string, jwt);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[spreadsheet];
    const newData = await sheet.addRow(data);
    return newData;
  } catch (error) {
    return null;
  }
};
