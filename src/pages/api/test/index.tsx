import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Unauthenticated 💥" });
  } else {
    res.status(200).json({ message: "Success 👍🏻" });
  }
}
