"use client"
import { Button } from "@/app/components/ui/button";
import { Skeleton } from "@/app/components/ui/skeleton";
import useModules from "@/app/hooks/useModules";
import { useParticipants } from "@/app/hooks/useParticipants";
import { BeakerIcon, LightBulbIcon, ArrowsPointingInIcon, InformationCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@nextui-org/spinner";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Module {
  id: string
  title: string
}

const CourseDetail = () => {
  const { id } = useParams()
  const [courseName, setCourseName] = useState('')
  const [coursePrevImg, setCoursePrevImg] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const { modules, loading, error } = useModules(id.toString())
  const { images, isLoading, hasError } = useParticipants()
  const router = useRouter()
  const query = useSearchParams()

  useEffect(() => {
    const name = query.get('course-name')
    const prev_img = query.get('prev_img')
    const description = query.get('description')

    if (name) setCourseName(name)
    if (prev_img) setCoursePrevImg(prev_img)
    if (description) setCourseDescription(description)
  }, [query])



  const handleView = () => {
    router.push(`/courses/${id}/modules/`);
  }

  if (loading) {
    return <div className="flex items-center justify-center w-full h-screen bg-white">
      <Spinner label="Loading..." color="default" labelColor="foreground" />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="w-full col-span-2 shadow-md p-5 gap-4 rounded-md max-h-96 flex flex-col bg-slate-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-3">
            <p className="text-2xl col-span-3">{courseName}</p>
            <p className="text-sm col-span-3">Required for: {id}</p>
            <div className="col-span-2 grid grid-cols-2 mt-3">
              <ul className="flex flex-col">
                <li className="text-sm text-bold">Assessment:</li>
                <li className="text-sm text-bold">Credentials:</li>
                <li className="text-sm text-bold">Modules:</li>
                <li className="text-sm text-bold">Time estimation:</li>
                <li className="text-sm text-bold">Due date:</li>
              </ul>
              <ul className="flex flex-col">
                <li className="text-sm">Assessment</li>
                <li className="text-sm">Credentials</li>
                <li className="text-sm">{modules.length} {modules.length <= 1 ? + 'Module' : 'Modules'}</li>
                <li className="text-sm">{modules.length} Months</li>
                <li className="text-sm">{new Date().toDateString()}</li>
              </ul>
            </div>
            <div className="mt-auto flex justify-end">
              <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={() => handleView()}>
                Begin modules
              </Button>
            </div>
          </div>
          <div className="col-span-1 rounded-lg shadow-md max-h-44">
            <Image
              src={coursePrevImg}
              alt={courseName}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-6 py-4">
            <div className="col-span-2">{courseDescription}</div>
            <div className="col-span-1 flex flex-col gap-3">
              {
                modules.slice(0, 3).map((module, index) => (
                  <ul key={index}>
                    <li className="text-sm text-bold">Module {index + 1}: {module.title}</li>
                  </ul>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1 grid grid-cols-4 shadow-md p-5 gap-4 border rounded-md max-h-96 bg-slate-200">
        <div className="col-span-4">
          <h1 className="text-lg text-semibold">Enrolled Participants</h1>
        </div>
        {loading && Array.from({ length: 16 }, (_, index) => (
          <div key={index} className="animate-pulse flex space-x-4">
            <div className="overflow-hidden rounded-lg shadow-md"></div>
          </div>
        ))}
        {error && (
          <div className="text-center text-red-500 p-4">
            <p>Error: {error}</p>
          </div>
        )}

        {!isLoading && !hasError && images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={`https://picsum.photos/id/${image.id}/300/300`}
              alt={image.author}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-8">
        <div className="w-full shadow-md p-5 gap-2 rounded-md max-h-96 flex flex-col bg-slate-200">
          <div className="col-span-4">
            <h1 className="text-lg text-semibold">Educational</h1>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-row items-center text-sm gap-4">
              <div className="flex justify-center items-center h-8 w-8 bg-red-500 rounded-lg">
                <BeakerIcon className="h-4 w-4 text-white" />
              </div>
              Certified Learning Specialist
            </li>
            <li className="flex flex-row items-center text-sm gap-4">
              <div className="flex justify-center items-center h-8 w-8 bg-red-500 rounded-lg">
                <ArrowsPointingInIcon className="h-4 w-4 text-white" />
              </div>
              Interactive Learning Expert (ILE)
            </li>
            <li className="flex flex-row items-center text-sm gap-4">
              <div className="flex justify-center items-center h-8 w-8 bg-red-500 rounded-lg">
                <LightBulbIcon className="h-4 w-4 text-white" />

              </div>
              Engaging Content for Learning Success
            </li>
          </ul>
        </div>
        <div className="w-full shadow-md p-5 gap-2 rounded-md max-h-96 flex flex-col bg-slate-200">
          <div className="col-span-4">
            <h1 className="text-lg text-semibold">Curriculum Overview</h1>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row justify-between items-center text-sm gap-4">
              Effective Teaching Strategies
              <div className="flex justify-center items-center h-6 w-6 bg-slate-800 rounded-lg">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="flex flex-row justify-between items-center text-sm gap-4">
              Engagement in Learning Environments
              <div className="flex justify-center items-center h-6 w-6 bg-slate-800 rounded-lg">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="flex flex-row justify-between items-center text-sm gap-4">
              Collaborative Learning Techniques
              <div className="flex justify-center items-center h-6 w-6 bg-slate-800 rounded-lg">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="flex flex-row justify-between items-center text-sm gap-4">
              Adaptive Learning Methods and Inclusive Practices
              <div className="flex justify-center items-center h-6 w-6 bg-slate-800 rounded-lg">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </div>
            </li>
            <li className="flex flex-row justify-between items-center text-sm gap-4">
              Assessment and Feedback Strategies
              <div className="flex justify-center items-center h-6 w-6 bg-slate-800 rounded-lg">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full col-span-1 shadow-md p-5 gap-2 rounded-md max-h-96 flex flex-col bg-slate-200">
        <div className="col-span-4">
          <h1 className="text-lg text-semibold">Supplementary Resources</h1>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-row justify-between items-center text-sm gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center h-7 w-7 bg-white rounded-lg">
                <BeakerIcon className="h-4 w-4 text-slate-900" />
              </div>
              Workshop: Learning Strategies <br />Masterclass - Enhancing Knowledge
            </div>
            <PlusIcon className="h-5 w-5 text-slate-900" />
          </li>
          <li className="flex flex-row justify-between items-center text-sm gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center h-7 w-7 bg-white rounded-lg">
                <BeakerIcon className="h-4 w-4 text-slate-900" />
              </div>
              Webinar: Effective Teaching Approaches with Technology
            </div>
            <PlusIcon className="h-5 w-5 text-slate-900" />
          </li>
          <li className="flex flex-row justify-between items-center text-sm gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center h-7 w-7 bg-white rounded-lg">
                <BeakerIcon className="h-4 w-4 text-slate-900" />
              </div>
              Activity: Interactive Learning <br />Challenge: Exploring New Concepts
            </div>
            <PlusIcon className="h-5 w-5 text-slate-900" />
          </li>
          <li className="flex flex-row justify-between items-center text-sm gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center h-7 w-7 bg-white rounded-lg">
                <BeakerIcon className="h-4 w-4 text-slate-900" />
              </div>
              Workshop: Engaging Activities for Effective Learning
            </div>
            <PlusIcon className="h-5 w-5 text-slate-900" />
          </li>
        </ul>
      </div>
    </div >
  )
}

export default CourseDetail;
