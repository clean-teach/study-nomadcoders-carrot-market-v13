import client from "@/app/_lib/server/client";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({
  ok: true,
  data: {
    email: "hi",
    name: "hi",
  }
  });
  }

// export default async function handler(
//   req: NextResponse,
//   res: NextRequest
// ) {
//   await client.user.create({
//     data: {
//       email: "hi",
//       name: "hi",
//     },
//   });
//   res.json({
//     ok: true,
//   });
// }