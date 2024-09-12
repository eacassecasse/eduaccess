"use client"
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

function Course({ course }) {
    const router = useRouter()

    const handleSaveClick = (id) => {
        router.push(`/courses/${id}`)
    }

    return (
        <div className="w-full shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-white">
            <Image
                className="border w-56 h-40 rounded-lg object-cover"
                src={course.image}
                alt={course.name}
                width={224}
                height={128}
                priority
            />
            <h4 className="font-bold text-xl text-slate-700 mt-4">
                {course.name}
            </h4>
            <p className="font-normal text-sm text-gray-600 mb-4 text-wrap">
                {course.description}
            </p>

            <div className="flex gap-4 mt-auto w-full">
                <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={() => handleSaveClick(course.id)}>
                    Enroll
                </Button>
                <Button className="bg-white text-slate-800 border border-slate-400 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-md">
                    Save for later
                </Button>
            </div>
        </div>
    );
}

export default Course;
