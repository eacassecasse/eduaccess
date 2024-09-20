import React from "react";
import { Video, FileText } from "lucide-react";

export interface LessonProps {
  id: string;
  title: string;
  content: string;
  contentType: "video" | "text"; // Add more types if necessary
}

interface LessonContentProps {
  lesson: LessonProps;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  const { title, content, contentType } = lesson;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        {contentType === "video" ? (
          <Video className="h-6 w-6 text-blue-500" />
        ) : (
          <FileText className="h-6 w-6 text-green-500" />
        )}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <p className="text-gray-700 text-base">{content}</p>

      {contentType === "video" ? (
        <div className="w-full h-auto">
          <iframe
            width="100%"
            height="400px"
            src={content}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      ) : (
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default LessonContent;
