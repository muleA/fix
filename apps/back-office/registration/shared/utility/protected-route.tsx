import { signIn, getSession } from "next-auth/react";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {

    const [session, setSession] = useState<string | null>(null);

    const checkSession = async () => {
        try {
            const sessionData = await getSession();
            if (sessionData == null) {
                signIn("keycloak");
            }
            setSession(sessionData.user?.name);
        }
        catch (err) {
            console.log(err);
        }

    }

    checkSession();


    return (
        <>
            {session &&
                <div>
                    {children}
                </div>
            }
        </>
    )


}

export default ProtectedRoute;