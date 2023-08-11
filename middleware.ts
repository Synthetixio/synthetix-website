import { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

// Set pathname were middleware will be executed
export const config = {
	matcher: '/',
};

export function middleware(req: NextRequest) {
	// Parse user agent
	const ua = userAgent(req);

	if (
		ua.ua.includes('AdsBot-Google') ||
		ua.ua.includes('Google-AdWords-Express')
	) {
		// Update the expected url
		req.nextUrl.pathname = `_phishingprotection/index.html`;

		// Return rewrited response
		return NextResponse.rewrite(req.nextUrl);
	}
}
