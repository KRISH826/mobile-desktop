import { cookies, headers } from "next/headers";

export type DeviceType = "mobile" | "desktop";

export async function resolveDevice(): Promise<DeviceType> {
    // 1️⃣ Cookie (Edge decision)
    const cookieDevice = (await cookies()).get("device")?.value;
    if (cookieDevice === "mobile" || cookieDevice === "desktop") {
        return cookieDevice;
    }

    // 2️⃣ Fallback: UA check
    const ua = (await headers()).get("user-agent") || "";
    return /mobile|android|iphone|ipad/i.test(ua)
        ? "mobile"
        : "desktop";
}
