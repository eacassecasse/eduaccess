// pages/courses/[id].js
"use client"
import { Button } from '@/app/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/app/components/ui/collapsible';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Separator } from '@/app/components/ui/separator';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function CourseDetail() {
  const [openTag, setOpenTag] = useState(null);

  const handleToggle = (tag) => {
    setOpenTag((prevOpenTag) => (prevOpenTag === tag ? null : tag));
  };

  return (
    <div className="flex flex-row flex-nowrap h-screen justify-around max-h-screen gap-4 p-8">
      <ScrollArea className="h-96 w-[25%] bg-slate-200 rounded-md shadow-md">
        <div className="p-0">
          <h4 className="text-lg font-bold leading-5 my-4 px-6">Modules</h4>

          {tags.map((tag) => (
            <>
              <Collapsible
                key={`collapsible-${tag}`}
                open={openTag === tag}
                onOpenChange={() => handleToggle(tag)}
                className="space-y-2"
              >
                <div className="flex items-center justify-between space-x-4">
                  <CollapsibleTrigger key={tag} asChild>
                    <div className="flex flex-row w-full justify-between items-center px-6 cursor-pointer" onClick={(e) => {
                      e.preventDefault();
                      handleToggle(tag);
                    }}>
                      <h4 className="text-sm text-nowrap font-semibold">
                        Module {tag}
                      </h4>
                      <Button type='button' variant="ghost" size="sm" className="w-9 p-0">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </div>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent key={tag} className="space-y-2">
                  <div className="rounded-md border px-10 py-3 font-mono text-sm">
                    @radix-ui/primitives
                  </div>
                  <div className="rounded-md border px-10 py-3 font-mono text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-10 py-3 font-mono text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </>
          ))}
        </div>
      </ScrollArea>
      <ModuleDetail />
    </div>
  );
}
