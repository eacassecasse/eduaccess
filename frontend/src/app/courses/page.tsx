import React from "react";
import {v4 as uuid4} from 'uuid';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import Course from "@/app/components/course";
import { ScrollArea } from "@/app/components/ui/scroll-area";

export interface Artwork {
    id: string
    name: string
    image: string
    description: string
}

export const courses: Artwork[] = [
    {
        id: uuid4(),
        name: "Introduction to Python",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Learn the basics of Python programming, one of the most popular and versatile languages."
    },
    {
        id: uuid4(),
        name: "Web Development",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        description: "A comprehensive course on building modern web applications using JavaScript."
    },
    {
        id: uuid4(),
        name: "Data Science",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Dive into data analysis, visualization, and machine learning techniques."
    },
    {
        id: uuid4(),
        name: "UI/UX Design Fundamentals",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        description: "Master the principles of user interface and user experience design."
    },
    {
        id: uuid4(),
        name: "Digital Marketing Strategies",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=300&q=80",
        description: "Learn how to create effective digital marketing campaigns for online platforms."
    },
    {
        id: uuid4(),
        name: "Mobile App Development",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=300&q=80",
        description: "Build cross-platform mobile apps using Google's Flutter framework."
    },
    {
        id: uuid4(),
        name: "Cloud Computing with AWS",
        image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=300&q=80",
        description: "Get started with cloud computing services and architecture using Amazon Web Services."
    },
    {
        id: uuid4(),
        name: "Cybersecurity Essentials",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=300&q=80",
        description: "Understand the basics of cybersecurity and how to protect digital infrastructures."
    },
    {
        id: uuid4(),
        name: "Project Management",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "Learn project management methodologies and tools specific to the tech industry."
    },
    {
        id: uuid4(),
        name: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80",
        description: "A beginner-friendly course on AI concepts, algorithms, and applications."
    }
];


export function CourseList() {
    return (
        <div className="flex flex-col px-8 py-4">
            <h2 className="text-4xl text-bold">Course Library</h2>
            <div className="flex flex-row gap-4 py-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-bold ml-1">Subject</h3>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All Subjects" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Europe & Africa</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                <SelectItem value="west">
                                    Western European Summer Time (WEST)
                                </SelectItem>
                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Asia</SelectLabel>
                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                <SelectItem value="ist_indonesia">
                                    Indonesia Central Standard Time (WITA)
                                </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Australia & Pacific</SelectLabel>
                                <SelectItem value="awst">
                                    Australian Western Standard Time (AWST)
                                </SelectItem>
                                <SelectItem value="acst">
                                    Australian Central Standard Time (ACST)
                                </SelectItem>
                                <SelectItem value="aest">
                                    Australian Eastern Standard Time (AEST)
                                </SelectItem>
                                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>South America</SelectLabel>
                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-bold ml-1">Difficulty</h3>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All Levels" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Europe & Africa</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                <SelectItem value="west">
                                    Western European Summer Time (WEST)
                                </SelectItem>
                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Asia</SelectLabel>
                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                <SelectItem value="ist_indonesia">
                                    Indonesia Central Standard Time (WITA)
                                </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Australia & Pacific</SelectLabel>
                                <SelectItem value="awst">
                                    Australian Western Standard Time (AWST)
                                </SelectItem>
                                <SelectItem value="acst">
                                    Australian Central Standard Time (ACST)
                                </SelectItem>
                                <SelectItem value="aest">
                                    Australian Eastern Standard Time (AEST)
                                </SelectItem>
                                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>South America</SelectLabel>
                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-bold ml-1">Language</h3>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All Languages" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Europe & Africa</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                <SelectItem value="west">
                                    Western European Summer Time (WEST)
                                </SelectItem>
                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Asia</SelectLabel>
                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                <SelectItem value="ist_indonesia">
                                    Indonesia Central Standard Time (WITA)
                                </SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Australia & Pacific</SelectLabel>
                                <SelectItem value="awst">
                                    Australian Western Standard Time (AWST)
                                </SelectItem>
                                <SelectItem value="acst">
                                    Australian Central Standard Time (ACST)
                                </SelectItem>
                                <SelectItem value="aest">
                                    Australian Eastern Standard Time (AEST)
                                </SelectItem>
                                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>South America</SelectLabel>
                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="grid grid-cols-3 gap-5">
                    {courses.map((course) => (
                        <Course course={course} key={course.id} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default CourseList;
