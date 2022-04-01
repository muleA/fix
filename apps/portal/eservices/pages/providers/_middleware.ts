
import { NextRequest, NextResponse } from 'next/server';


export function middleware(req:NextRequest){
    const country = req.geo.country?.toLocaleLowerCase()|| 'us';
    if(country ==='et')
    {
        return NextResponse.rewrite(`http://localhost:6600/api/auth/signin`)
    }
    return NextResponse.next();
}

