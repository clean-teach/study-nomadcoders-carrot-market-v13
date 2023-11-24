import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const res = await req.json();
    
    console.log(req);
    console.log(req.body);
    return NextResponse.json({ res });
};

// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     res.status(401).end();
//   }
//   console.log(req.body.email);
//   res.status(200).end();
// }