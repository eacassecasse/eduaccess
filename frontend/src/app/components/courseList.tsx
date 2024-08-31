import React from "react";
import Course from "@/app/components/course";
/*

function CourseList() {
    let courses = [
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" },
        { name: "Science Fundamentals", description: "Explore the basics of science and build a strong foundation in this field" }
    ]
    return (
        <div className="container w-full columns-4 overflow-y-scroll py-6 gap-2">
            {
                courses.map((c) => (
                    <Course key={c.name} course={c} />
                ))
            }
        </div>
    );
}

export default CourseList;*/

import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area"

export interface Artwork {
    name: string
    image: string
    description: string
}

export const courses: Artwork[] = [
    {
        name: "Ornella Binni",
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
    {
        name: "Tom Byrom",
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
    {
        name: "Vladimir Malyavko",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
    {
        name: "Ornella Binni",
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
    {
        name: "Tom Byrom",
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
    {
        name: "Vladimir Malyavko",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        description: ""
    },
]

export function CourseList() {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
                {courses.map((course) => (
                    <figure key={course.name} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={course.image}
                                alt={`Course by ${course.name}`}
                                className="aspect-[3/4] h-fit w-fit object-cover"
                                width={300}
                                height={400}
                            />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            Course by{" "}
                            <span className="font-semibold text-foreground">
                                {course.name}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default CourseList;
