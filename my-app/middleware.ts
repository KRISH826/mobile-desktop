import { NextRequest, NextResponse } from "next/server";

const MOBILE_REGEX =
    /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

export function middleware(req: NextRequest) {
    const ua = req.headers.get("user-agent") || "";
    const isMobile = MOBILE_REGEX.test(ua);

    const res = NextResponse.next();

    // Persist decision
    res.cookies.set("device", isMobile ? "mobile" : "desktop", {
        path: "/",
        sameSite: "lax",
    });

    // Client Hints (future-proof)
    res.headers.set("Accept-CH", "Sec-CH-UA-Mobile");
    res.headers.set("Vary", "User-Agent");

    return res;
}
