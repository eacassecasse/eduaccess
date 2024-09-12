"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";



export function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const images = await getRandomImages();

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
      <div className="w-full col-span-2 shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-slate-200">
        course {id} overview
      </div>
      <div className="w-full col-span-1 grid grid-cols-4 shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-slate-200">
        {
          images.map((image) => {
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={`https://picsum.photos/id/${image.id}/300/300`}
                alt={image.author}
                className="object-cover w-full h-full"
              />
            </div>
          })
        }
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-8">
        <div className="w-full shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-slate-200">
          course {id} educational
        </div>
        <div className="w-full shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-slate-200">
          course {id} curriculum
        </div>
      </div>
      <div className="w-full col-span-1 shadow-md p-5 gap-4 border rounded-md max-h-96 flex flex-col bg-slate-200">
        course {id} Supplementary resources
      </div>
    </div >
  )
}

export default CourseDetail;
