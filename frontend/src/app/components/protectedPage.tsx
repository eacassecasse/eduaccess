import { GetServerSideProps } from "next";
import nookies, { parseCookies } from "nookies";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "../lib/tokenUtils";
import { Spinner } from "@nextui-org/spinner";

interface ProtectedPageProps {
    children: ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
    const { token } = useAuth()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token || isTokenExpired(token)) {
            router.push('/auth/login');
            nookies.destroy(null, 'access_token');
        } else {
            setIsLoading(false);
        }
    }, [token, router]);

    if (isLoading) {
        return <div className="flex mx-auto h-screen">
            <Spinner label="Loading..." color="default" labelColor="foreground"/>
        </div>;
    }

    return <>{children}</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies['access_token'];

    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default ProtectedPage;