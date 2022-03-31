import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

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
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  },
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