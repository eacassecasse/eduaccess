"use client"
import { Button } from "@/app/components/ui/button";
import { Skeleton } from "@/app/components/ui/skeleton";
import { useParticipants } from "@/app/hooks/useParticipants";
import { BeakerIcon, LightBulbIcon, ArrowsPointingInIcon, InformationCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuid4 } from 'uuid';



export function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const { images, loading, error } = useParticipants()
  const router = useRouter()

  const handleSaveClick = () => {
    router.push(`/courses/${id}/modules/`)
  }

  /*useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      };

      fetchCourse();
    }
  }, [id]);

  if (!course) return <div>Loading...</div>;*/

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="w-full col-span-2 shadow-md p-5 gap-4 rounded-md max-h-96 flex flex-col bg-slate-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-3">
            <p className="text-2xl col-span-3">{id}</p>
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
                <li className="text-sm">Modules</li>
                <li className="text-sm">Time estimation</li>
                <li className="text-sm">Due date</li>
              </ul>
            </div>
            <div className="mt-auto flex justify-end">
              <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={() => handleSaveClick()}>
                Begin modules
              </Button>
            </div>
          </div>
          <div className="col-span-1 rounded-lg shadow-md max-h-44">
            <img
              src='https://picsum.photos/id/20/300/300'
              alt="Somewhere over the internet"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-4 px-6 py-8">
            <div className="flex flex-col gap-3">
              <div className="col-span-4">
                <h4 className="text-sm text-bold">Chapter 1: Introduction to</h4>
              </div>
              <ul className="flex flex-col">
                <li className="text-sm">1: Importance of Simulations</li>
                <li className="text-sm">2: Navigating Simulations</li>
                <li className="text-sm">3: Overview of Simulated Projects</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="col-span-4">
                <h4 className="text-sm text-bold">Chapter 2: Planning Simulation</h4>
              </div>
              <ul className="flex flex-col">
                <li className="text-sm">1: Defining Project Goals and Scope</li>
                <li className="text-sm">2: Allocating Resources</li>
                <li className="text-sm">3: Creating Project Timelines</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="col-span-4">
                <h4 className="text-sm text-bold">Chapter 3: Executing Simulations</h4>
              </div>
              <ul className="flex flex-col">
                <li className="text-sm">1: Team Leadership Cooperation</li>
                <li className="text-sm">2: Managing Risks and issues</li>
                <li className="text-sm">3: Project Completion and Evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1 grid grid-cols-4 shadow-md p-5 gap-4 border rounded-md max-h-96 bg-slate-200">
        <div className="col-span-4">
          <h1 className="text-lg text-semibold">Enrolled Participants</h1>
        </div>
        {loading && Array.from({ length: 16 }, (_, index) => (
          <Skeleton className="overflow-hidden rounded-lg shadow-md" />
        ))}
        {error && (
          <div className="text-center text-red-500 p-4">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <img
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
