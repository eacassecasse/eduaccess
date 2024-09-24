
"use client"
import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import Course, { CourseProps } from "@/app/components/course";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import ProtectedPage from "@/app/components/protectedPage";
import { Spinner } from "@nextui-org/spinner";
import Modal from "@/app/components/modal";
import useCourse from "@/app/hooks/useCourse";

const CourseList = () => {
    const { courses, loading, error } = useCourse();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (error) setOpen(true);
    }, [error]);

    const educators: string[] = []; // Get unique educators

    courses && courses.forEach((course: CourseProps) => {
        if (!educators.includes(course.educator)) {
            educators.push(course.educator)
        }
    })
    const durations = ['Short (< 3 hours)', 'Medium (3 - 10 hours)', 'Long (> 10 hours)']; // Duration options

    const [selectedEducator, setSelectedEducator] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("");

    const filteredCourses = courses && courses.filter(course => {
        let educatorMatch = selectedEducator ? course.educator === selectedEducator : true;
        let durationMatch = true;

        if (selectedDuration) {
            const duration = 4; // Change for the current duration of the course
            if (selectedDuration === "Short (< 3 hours)" && duration >= 3) durationMatch = false;
            if (selectedDuration === "Medium (3 - 10 hours)" && (duration < 3 || duration > 10)) durationMatch = false;
            if (selectedDuration === "Long (> 10 hours)" && duration <= 10) durationMatch = false;
        }

        return educatorMatch && durationMatch;
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-screen bg-white">
                <Spinner label="Loading..." color="primary" labelColor="foreground" />
            </div>
        );
    }

    return (
        <>
            {error && (
                <Modal
                    open={open}
                    title="Course Library Error"
                    description={error}
                />
            )}

            <ProtectedPage>
                <div className="flex flex-col px-4 py-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Course Library</h2>
                    <div className="flex flex-wrap gap-4 py-5">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg md:text-xl font-bold">Educator</h3>
                            <Select onValueChange={setSelectedEducator}>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="All Educators" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="All Educators">All Educators</SelectItem>
                                        {educators.map((educator, index) => (
                                            <SelectItem key={index} value={educator}>{educator}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg md:text-xl font-bold">Duration</h3>
                            <Select onValueChange={setSelectedDuration}>
                                <SelectTrigger className="w-[160px]">
                                    <SelectValue placeholder="All Durations" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="All Durations">All Durations</SelectItem>
                                        {durations.map((duration, index) => (
                                            <SelectItem key={index} value={duration}>{duration}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredCourses && filteredCourses.map((course: CourseProps) => (
                                <Course course={course} key={course.id} />
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </ProtectedPage>
        </>
    );
};

export default CourseList;
