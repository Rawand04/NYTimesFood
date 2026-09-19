import { users } from "@/app/lib/db";

export async function GET() {
  return Response.json(users);
}
