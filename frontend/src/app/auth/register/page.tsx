"use client"
import React, { useState } from "react";
import { z } from "zod"

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<any[]>([]);

    const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        try {
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
        } catch (error: any) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex mt-4 py-20">
            <form className="w-96 flex flex-col flex-nowrap items-center justify-center px-8 pt-10 pb-14 shadow-lg rounded-md gap-10 m-auto border" method="post" onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-slate-800">Access the platform</h1>
                    <p className="font-normal text-base text-slate-600">Log in or register to start your journey and unlock your knowledge.</p>
                </div>
                <div className="flex flex-col flex-nowrap w-full gap-8">
                    <div>
                        <input type="text" placeholder="Name" className="flex w-full gap-3 px-3 py-4 bg-white border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </div>
                    <div>
                        <input type="text" placeholder="Role" className="flex w-full gap-3 px-3 py-4 bg-white border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="flex w-full gap-3 px-3 py-4 bg-cyan-50 border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="flex w-full gap-3 px-3 py-4 bg-cyan-50 border border-slate-200 rounded-md font-normal text-sm text-slate-800 shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </div>
                    <button className="w-full px-6 py-4 bg-red-600 hover:bg-red-400 rounded-xl font-bold text-sm text-white" type="button">Sign Up</button>
                    <p className="flex flex-row flex-nowrap gap-1 text-base font-normal text-slate-600">
                        Already have an account? <a href="/auth/login" className="text-red-600">Log in</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;