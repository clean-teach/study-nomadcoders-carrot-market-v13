import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const res = await req.json();

  if (req.method !== 'POST') {
    return new Response('POST 요청이 아님', {
      status: 401,
    });
  }
  console.log(req);
  return Response.json({ res });
};

// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     res.status(401).end();
//   }
//   console.log(req.body);
//   res.status(200).end();
// }
