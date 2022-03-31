import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import jwt_decode from 'jwt-decode';
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';

export function middleware(req:NextRequest){
    const country = req.geo.country?.toLocaleLowerCase()|| 'us';
    if(country ==='et')
    {
        return NextResponse.rewrite(`http://localhost:6600/api/auth/signin`)
    }
    return NextResponse.next();
}

