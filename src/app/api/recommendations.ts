import { NextResponse } from 'next/server'
import recommendations from '@/app/data/recommendations.json'

export async function GET() {
  return NextResponse.json({ recommendations })
}
