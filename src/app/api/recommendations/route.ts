import { NextResponse } from 'next/server'
import recommendations from './recommendations.json'

export async function GET() {
  return NextResponse.json({ recommendations })
}
