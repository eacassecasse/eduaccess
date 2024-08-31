import React from "react";
import Image from "next/image"
import { Button } from "@/app/components/ui/button";


function Course({ course }) {
    return (
        <div className="w-full shadow-md p-5 gap-2 border rounded-md max-h-80">
            <Image
                className="border w-56 h-32 rounded-lg dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <h4 className="font-bold text-3xl text-slate-400">{course.name}</h4>
            <p className="font-normal text-base">{course.description}</p>

            <div className="flex flex-row flex-nowrap gap-4">
                <Button className="bg-red-600 text-white">Enroll</Button>
                <Button className="bg-white text-slate-800 border border-slate-400 hover:text-white">Save for later</Button>
            </div>
        </div>
    );
}

export default Course;