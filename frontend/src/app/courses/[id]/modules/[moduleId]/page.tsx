// pages/courses/[id].js
"use client"
import { Skeleton } from '@/app/components/ui/skeleton';
import Video from '@/app/components/video';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';

export default function ModuleDetail() {
  const { moduleId } = useParams();

  return (
    <div className="h-3/4 w-[70%]">
        <div className="p-0">
          <section className="w-full h-full flex justify-center items-center bg-slate-200 rounded-md shadow-md">
            <Suspense fallback={<Skeleton className="absolute top-0 left-0 w-full h-full rounded-md" />}>
              <Video />
            </Suspense>
          </section>
        </div>
      </div>
  );
}
