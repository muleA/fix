import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import { theme } from "tailwind.config";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret:process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,

    }),
  ],
  session:{
    strategy:'jwt'
  },
  callbacks: {
  redirect({ url, baseUrl   }) {
    if (url.startsWith(baseUrl)) return url
    // Allows relative callback URLs
    else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
    return baseUrl
  },
  },
  // pages: {
  //   signIn: '/login',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  events:{
    async signIn(message){ console.log('sign in event message',message)},
    async signOut(message){ console.log('sign out event message',message)}
  },
  debug:true,
  logger:{
    error(code,metadata){
      console.error(code,metadata)
    },
    warn(code){
      console.warn(code);
    },
    debug(code,metadata){
      console.debug(code,metadata);
    }
  },
  theme:{
   colorScheme:'light'
  }
})