import { useRouter } from "next/router";
import { useEffect } from "react";

export function Index() {

  const router = useRouter();
  useEffect(() => {
    router.push("/registration/home");
  }, []);

  return null;
}

export default Index;
