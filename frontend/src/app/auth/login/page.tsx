"use client"

import Link from "next/link";
import React, { useState } from "react";
import nookies from "nookies"
import { z } from "zod"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";

const SignIn = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<any[]>([]);
    const [authError, setAuthError] = useState<string>("");
    const router = useRouter();
    const { login } = useAuth()


    const handleLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('https://eduaccess.up.railway.app/api/v1/auth/', { email, password })
            const { access, refresh, id } = res.data;

            if (access && refresh && id) {
                // nookies.set(null, 'access_token', access, {
                //     maxAge: 30 * 24 * 60 * 60,
                //     path: '/'
                // })
                nookies.set(null, 'refresh_token', refresh, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/'
                })
                login(access, id)
            }

            router.push('/courses')
        } catch (err: any) {
            setAuthError(`Login Failed due to ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    const onSubmit = async (ev: any) => {
        ev.preventDefault();

        try {
            setIsLoading(true)
            setAuthError("")

            const mySchema = z.object({
                email: z.coerce.string().email().min(5),
                password: z.string().min(3),
            });

            // validate form data
            const response = mySchema.safeParse({
                email: email,
                password: password,
            });

            if (!response.success) {
                let errList: any[] = [];
                const { errors: err } = response.error

                for (var i = 0; i < err.length; i++) {
                    errList.push({ for: err[i].path[0], message: err[i].message });
                }

                setErrors(errList);

                throw err;
            }

            setErrors([]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex py-20">
            <form className="w-96 flex flex-col flex-nowrap items-center justify-center px-8 pt-10 pb-14 shadow-lg rounded-md gap-10 m-auto border" method="post" onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-slate-800">Access the platform</h1>
                    <p className="font-normal text-base text-slate-600">Log in or register to start your journey and unlock your knowledge.</p>
                </div>
                <div className="flex flex-col flex-nowrap w-full gap-8">
                    <div>
                        <input type="email" placeholder="Email" className="flex w-full gap-3 px-3 py-4 bg-cyan-50 border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" onChange={(ev) => setEmail(ev.target.value)} />
                        <div className="mt-1 text-xs text-red-500">
                            {errors.find((error) => error.for === "email")}
                        </div>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="flex w-full gap-3 px-3 py-4 bg-cyan-50 border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " onChange={(ev) => setPassword(ev.target.value)} />
                        <div className="mt-1 text-xs text-red-500">
                            {errors.find((error) => error.for === "password")}
                        </div>
                    </div>
                    <button
                        className="w-full px-6 py-4 bg-red-600 hover:bg-red-400 rounded-xl font-bold text-sm text-white flex items-center justify-center"
                        type="submit"
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}</button>
                        <p className="flex flex-row flex-nowrap gap-1 text-base font-normal text-slate-600">
                            Don&apos;t have an account yet? <Link href="/auth/register" className="text-red-600">Sign Up</Link>
                        </p>
                </div>
            </form>
        </div>
    );
}

export default SignIn;