import { NextResponse } from 'next/server'

export async function GET() {
  console.log('Load data')
  return NextResponse.json({
    content: Array.from(new Array(3 * 1024 * 1024))
      .map(() => 1)
      .join(''),
  })
}
