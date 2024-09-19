"use client";
import { Button } from '@/app/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/app/components/ui/collapsible';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import useModules from '@/app/hooks/useModules';
import useLessons from '@/app/hooks/useLessons';
import { Plus, Video, FileText } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Spinner } from '@nextui-org/spinner'
import LessonContent from '@/app/components/content';
import { ModuleProps } from '../page';

const Modules = () => {
  const [openTag, setOpenTag] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedModule, setSelectedModule] = useState<ModuleProps | null>(null);
  const { id } = useParams();
  const { modules, loading, error } = useModules(id.toString());
  const { lessons, loading: lessonsLoading, error: lessonsError } = useLessons(selectedModule?.id || null);

  if (loading) {
    return <div className="flex items-center justify-center w-full h-screen bg-white">
      <Spinner label="Loading Modules..." color="default" labelColor="foreground" />
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  const handleToggle = (module: ModuleProps) => {
    if (openTag === module.id) {
      setOpenTag(null);
      setSelectedModule(null); // Close module and reset lessons
    } else {
      setOpenTag(module.id);
      setSelectedModule(module); // Set current module for lesson fetching
    }
  };

  const handleLessonClick = (lesson: any) => {
    setSelectedLesson(lesson); // Set selected lesson for viewing content
  };

  return (
    <div className="flex flex-row flex-nowrap h-screen max-h-screen gap-4 p-8">
      <ScrollArea className="h-full w-[25%] bg-slate-100 rounded-lg shadow-md">
        <div className="p-4">
          <h4 className="text-lg font-bold leading-5 my-4">Modules</h4>

          {modules.map((module, index) => (
            <Collapsible
              key={module.id}
              open={openTag === module.id}
              onOpenChange={() => handleToggle(module)}
              className="space-y-2"
            >
              <div className="flex items-center justify-between space-x-4">
                <CollapsibleTrigger asChild>
                  <div
                    className="flex flex-row w-full justify-between items-center p-3 rounded-md bg-white hover:bg-gray-100 cursor-pointer transition-all duration-150"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggle(module);
                    }}
                  >
                    <h4 className="text-sm font-semibold line-clamp-1">
                      {index + 1}. {module.title}
                    </h4>
                    <Button type="button" variant="ghost" size="sm" className="w-9 p-0">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="space-y-2">
                {lessonsLoading && selectedModule?.id === module.id && <div>
                  <Spinner label="Loading Lessons..." color="default" labelColor="foreground"/></div>}
                {lessonsError && selectedModule?.id === module.id && <div>Error: {lessonsError}</div>}
                {selectedModule?.id === module.id && lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="rounded-md border p-3 bg-gray-50 hover:bg-gray-200 cursor-pointer transition-all duration-150"
                    onClick={() => handleLessonClick(lesson)}
                  >
                    <div className="flex items-center space-x-2">
                      {lesson.contentType === "video" ? (
                        <Video className="h-5 w-5 text-blue-500" />
                      ) : (
                        <FileText className="h-5 w-5 text-green-500" />
                      )}
                      <span className="text-sm font-medium line-clamp-1">{lesson.title}</span>
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>

      {/* Right side - Display selected lesson content */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md overflow-y-auto">
        {selectedLesson ? (
          <LessonContent lesson={selectedLesson} />
        ) : (
          <div className="text-center text-gray-500">Select a lesson to view the content</div>
        )}
      </div>
    </div>
  );
}

export default Modules;