"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import nookies from 'nookies'
import { useRouter } from 'next/navigation'
import { getUser } from '@/app/lib/api'

interface AuthContextProps {
    token: string | null
    user: UserProps | null
    login: (token: string, id: string) => void
    logout: () => void
}

export interface UserProps {
    id: string
    name: string
    email: string
    profile_image: string
    role: string
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProps | null>(null);
    const router = useRouter();

    useEffect(() => {
        const jwt = nookies.get(null).access_token;

        if (jwt) {
            setToken(jwt);
        } else {
            setToken(null);
        }
    }, []);
    

    const login = async (token: string, id: string) => {

        try {
            const data: UserProps = await getUser(id); 
            setUser(data); 
        } catch (err) {
            console.error('Failed to fetch user data:', err.message);
            throw new Error('Failed to fetch user data: ' + err.message);
        }

        nookies.set(null, 'access_token', token, { path: '/' });
        nookies.set(null, 'isAuthenticated', 'true', { path: '/' });
        nookies.set(null, 'lastLogin', new Date().toISOString(), { path: '/' });
        setToken(token);
        router.push('/courses');
    }

    const logout = () => {
        nookies.destroy(null, 'access_token', { path: '/' });
        nookies.destroy(null, 'refresh_token', { path: '/' });
        setToken(null);
        router.push('/auth/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}