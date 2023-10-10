import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// avoid caching route
export const dynamic = "force-dynamic"

export async function GET (request) {
    const reqUrl = new URL(request.url)
    const code = reqUrl.searchParams.get("code")

    console.log("this is my code:", code)

    if (code) {
        const supabase = createRouteHandlerClient({ cookies })
        try {
            await supabase.auth.exchangeCodeForSession(code)
        } catch (error) {
            console.log(" Error ... . .. . . ... ")
        }
    }
    console.log("Finish:")
    return NextResponse.redirect(reqUrl.origin)
}