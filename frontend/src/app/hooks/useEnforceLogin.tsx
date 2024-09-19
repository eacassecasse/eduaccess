import { useRouter } from "next/navigation"
import { useEffect } from "react";
import nookies from 'nookies';
import { isTokenExpired } from "@/app/lib/tokenUtils";

export const useEnforceLogin = () => {
    const router = useRouter();

    useEffect(() => {
        const token = nookies.get(null).access_token;

        if (!token || isTokenExpired(token)) {
            router.push('/auth/login');
            nookies.destroy(null, 'access_token');
        }
    }, [router]);
}