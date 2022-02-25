import { useSession, signIn, signOut } from "next-auth/react";

const ProtectedRoute = ({ children }) => {

    const { data: session } = useSession();
    if (session) {
        return (
            <>
                {children}
            </>
        )
    }
    return (
        <>
            {
                <button onClick={() => signIn()}>
                    Sign in
                </button>

            }
        </>
    )


}

export default ProtectedRoute;