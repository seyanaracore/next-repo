import { NextResponse, NextRequest } from 'next/server'
import Repository from "@/models/Repository";
import getAppsList from "@/components/apps-list";

export async function GET(req: NextRequest) {
  try {
    const appsList = await getAppsList()
    const repoApp = new Repository(req.url, appsList)

    return NextResponse.json(repoApp)
  } catch (err) {
    new NextResponse('Internal Server', {status: 500})
  }
}
export const dynamic = "force-dynamic";
