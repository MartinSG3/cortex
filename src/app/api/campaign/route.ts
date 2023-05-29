import { NextResponse, NextRequest } from "next/server";
import ApiJson from "../../../lib/api";

// Cookies: https://nextjs.org/docs/app/building-your-application/routing/router-handlers

export async function GET() {
  /* const apiClient = new ApiClient();
    const campaigns = await apiClient; */

  const body = ApiJson;

  return NextResponse.json(body);
}
