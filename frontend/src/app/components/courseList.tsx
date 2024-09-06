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
        name: "Introduction to Python",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Learn the basics of Python programming, one of the most popular and versatile languages."
    },
    {
        name: "Web Development",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        description: "A comprehensive course on building modern web applications using JavaScript."
    },
    {
        name: "Data Science",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Dive into data analysis, visualization, and machine learning techniques."
    },
    {
        name: "UI/UX Design Fundamentals",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        description: "Master the principles of user interface and user experience design."
    },
    {
        name: "Digital Marketing Strategies",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=300&q=80",
        description: "Learn how to create effective digital marketing campaigns for online platforms."
    },
    {
        name: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=300&q=80",
        description: "Build cross-platform mobile apps using Google's Flutter framework."
    },
    {
        name: "Cloud Computing with AWS",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=300&q=80",
        description: "Get started with cloud computing services and architecture using Amazon Web Services."
    },
    {
        name: "Cybersecurity Essentials",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=300&q=80",
        description: "Understand the basics of cybersecurity and how to protect digital infrastructures."
    },
    {
        name: "Project Management",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Learn project management methodologies and tools specific to the tech industry."
    },
    {
        name: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "A beginner-friendly course on AI concepts, algorithms, and applications."
    }
];


export function CourseList() {
    return (
        <div className="flex flex-col p-4">
            <h2 className="text-4xl text-bold mb-8">Course List</h2>
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="grid grid-cols-4 gap-5">
                    {courses.map((course) => (
                        <Course course={course} key={course.name} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default CourseList;
