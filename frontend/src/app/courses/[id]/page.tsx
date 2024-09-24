"use client"

import { UserProps } from "@/app/context/AuthContext";
import useCourse from "@/app/hooks/useCourse";
import useModules from "@/app/hooks/useModules";
import { Spinner } from "@nextui-org/spinner";
import { useParams, useRouter } from "next/navigation";
import OverviewSection from "@/app/components/courseOverview";
import CourseInfoSection from "@/app/components/courseInfo";
import CourseDescriptionSection from "@/app/components/courseDescription";

export interface ModuleProps {
  id: string
  title: string
}

const CourseDetail = () => {
  const { courses } = useCourse()
  const { id } = useParams()
  const { modules, loading, error } = useModules(id.toString())
  const router = useRouter()
  const courseInfo = {
    duration: "6 Weeks",
    languages: ["English", "Spanish"],
    mode: "Remote",
    rating: 4.5
  };
  const requirements = ["Basic understanding of design", "Willingness to learn"];
  const content = ["Module 1: Introduction", "Module 2: User Research", "Module 3: Prototyping"];

  const course = courses && courses.find(course => course.id === id)

  const handleStartLearning = () => {
    router.push(`/courses/${course?.id}/modules/`)
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <Spinner label="Loading..." color="default" labelColor="foreground" />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <Spinner label="Loading..." color="default" labelColor="foreground" />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <OverviewSection title={course.title} educator={course.educator.name} prev_img={course.prev_img} attendants={course && course.students.map((student: UserProps) => (student.profile_image))} handler={handleStartLearning}/>
      <CourseInfoSection duration={courseInfo.duration} languages={courseInfo.languages} mode={courseInfo.mode} rating={courseInfo.rating} />
      <CourseDescriptionSection
        title={course.title}
        description={course.description}
        modules={modules}
        requirements={requirements}
      />
    </div>
  )
}

export default CourseDetail
