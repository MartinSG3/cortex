import { NextResponse, NextRequest } from "next/server";
import ApiJson from "../../../../lib/api";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = { params: params.id };

  if (id.params === "users") {
    const body = ApiJson.data[0].users;
    return NextResponse.json(body);
  } else if (id.params === "clients") {
    const body = ApiJson.data[0].clients;
    return NextResponse.json(body);
  } else if (id.params === "campaigns") {
    const bodyUser = ApiJson.data[0].campaigns;
    return NextResponse.json(bodyUser);
  }

  return NextResponse.json("Nothing");
}
