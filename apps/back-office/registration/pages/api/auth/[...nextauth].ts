import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        KeycloakProvider({
            clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
            issuer: process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER,
        })
        // ...add more providers here
    ], 
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#1d2861", // Hex color value
        logo: "/Images/Perago logo.png" // Absolute URL to logo image
    }
})