import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from '@mantine/core';
import { useKeycloak } from '@react-keycloak/ssr';
import type { KeycloakInstance } from 'keycloak-js';

const ProtectedRoute = ({ children }) => {
    const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
    const router = useRouter();
    useEffect(() => {

        if (initialized) {
            if (!keycloak.authenticated) {
                //router.push(`${process.env.NEXT_PUBLIC_BASEURL}/registration/login`);
                keycloak.login();
            }
        }

    }, [initialized])

    //const [session, setSession] = useState<string | null>(null);

    /*const checkSession = async () => {
        try {
            const sessionData = await getSession();
            if (sessionData == null) {
                router.push(`${process.env.NEXT_PUBLIC_BASEURL}/registration/login`);
            }
        }
        catch (err) {
            console.log(err);
        }
 
    }
 
    checkSession(); */

    /* return (
        <>
            {session &&
                <div>
                    {children}
                </div>
            }
        </>
    )
 */


    if (!initialized) {
        return (
            <div className="tw-relative" style={{ height: "100vh" }} suppressHydrationWarning={true}>
                <div className="tw-absolute tw-left-1/2" style={{ top: "50%" }}>
                    <Loader color="indigo" size="xl" variant="bars" />
                </div>
            </div>
        );
    }
    return (
        < >
            {!!keycloak.authenticated &&
                <div suppressHydrationWarning={true}>
                    {children}
                </div>
            }
        </>
    );

}

export default ProtectedRoute;