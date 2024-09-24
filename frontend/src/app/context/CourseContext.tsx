"use client"
import { createContext, Dispatch, ReactNode, useState } from 'react'
import { CourseProps } from '@/app/components/course'

interface CourseContextProps {
    courses: CourseProps[] | null
    setCourses: Dispatch<React.SetStateAction<CourseProps[] | null>>
}


interface CourseProviderProps {
    children: ReactNode
}

export const CourseContext = createContext<CourseContextProps | null>(null);

export const CourseProvider = ({ children }: CourseProviderProps) => {
    const [courses, setCourses] = useState<CourseProps[] | null>([]);

    return (
        <CourseContext.Provider value={{ courses, setCourses }}>
            {children}
        </CourseContext.Provider>
    )
}
