"use client"
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export interface CourseProps {
    id: string;
    title: string;
    prev_img: string;
    description: string;
    educator: string;  // Educator ID
    students: {
      id: string;
      name: string;
      email: string;
      role: string;
      profile_image: string;
    }[];
  }

interface Course {
    course: CourseProps
}

const Course = ({ course }: Course) => {
    const router = useRouter()

    const handleSaveClick = (id: string) => {
        const url = `/courses/${id}/`;
        router.push(url)
    }

    return (
        <div className="w-full shadow-md p-5 gap-4 border rounded-md max-h-[24rem] flex flex-col bg-white">
            <Image
                className="border w-full h-40 rounded-lg object-cover"
                src={course.prev_img}
                alt={course.title}
                width={224}
                height={128}
                priority
            />
            <h4 className="font-bold text-xl text-slate-700 mt-4 truncate">
                {course.title}
            </h4>
            <p className="font-normal text-sm text-gray-600 mb-4 overflow-hidden text-ellipsis whitespace-nowrap max-h-10">
                {course.description}
            </p>

            <div className="flex gap-4 mt-auto w-full">
                <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={() => handleSaveClick(course.id)}>
                    View Course
                </Button>
                <Button className="bg-white text-slate-800 border border-slate-400 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-md">
                    Save for later
                </Button>
            </div>
        </div>
    );
}

export default Course;
