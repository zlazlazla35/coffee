import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const session = await getToken({ req : request });
    console,lig(session)
} 