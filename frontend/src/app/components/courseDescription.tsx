import React from 'react';

interface CourseDescriptionProps {
    title: string;
    description: string;
    modules: { title: string }[];
    requirements: string[];
}

const CourseDescriptionSection: React.FC<CourseDescriptionProps> = ({ title, description, modules, requirements }) => {
    return (
        <div className="flex justify-center items-center p-6 sm:p-12 lg:py-8 lg:px-24 bg-slate-50">
            <div className="flex flex-col lg:flex-row px-6 py-2 w-full">
                {/* Content Area */}
                <div className="w-full flex flex-col p-4 gap-8 lg:w-3/4">
                    <div>
                        <h3 className="text-3xl font-semibold mb-2">About the Course</h3>
                        <p className="mt-2">{description}</p>
                    </div>

                    <div>
                        <h4 className="text-3xl font-semibold mt-4">What You Will Learn</h4>
                        <ul className="list-disc list-inside mt-2 mb-4">
                            {modules.map((module, index) => (
                                <li key={index}>{module.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-3xl font-semibold mt-4">Requirements</h4>
                        <ul className="list-disc list-inside mt-2 mb-4">
                            {requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col w-full lg:w-1/4 p-6 shadow-sm mt-6 lg:mt-0 bg-white rounded-md">
                    <h4 className="text-xl font-semibold mb-3">{title}</h4>
                    <ul className="space-y-2">
                        {/* Navigation for Modules */}
                        <li className="cursor-pointer hover:text-blue-600">
                            <a href="#description">About the Course</a>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">
                            <a href="#modules">What You Will Learn</a>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">
                            <a href="#requirements">Requirements</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CourseDescriptionSection;
