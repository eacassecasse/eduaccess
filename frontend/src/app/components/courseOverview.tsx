import { Button } from '@/app/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import AttendanceCard from './courseAttendance';

interface OverviewProps {
    title: string;
    educator: string;
    prev_img: string;
    attendants: string[];
    handler: ()=> void
}

const OverviewSection: React.FC<OverviewProps> = ({ title, educator, prev_img, attendants, handler }) => {
    return (
        <section 
            className="relative flex flex-col lg:flex-row justify-around items-center p-6 sm:p-12 lg:p-24 min-h-96 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${prev_img})` }}
        >
            {/* Gradient overlay for improved readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" aria-hidden="true"></div>

            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 text-white gap-6">
                    {/* Text Section */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <h2 className="py-3">
                            {/* Responsive Text */}
                            <span className="block lg:text-3xl text-4xl font-semibold">
                                {title}
                            </span>
                            <span className="block mt-3 lg:mt-1 py-3">
                                <strong className="font-light">By {educator}</strong>
                            </span>
                        </h2>

                        {/* Action Buttons */}
                        <div className="flex justify-center lg:justify-start space-x-4 my-3">
                            <Button className="flex items-center justify-between w-full sm:w-72 px-4 py-2 rounded-md transition hover:bg-gray-200" variant="secondary" onClick={() => handler()}>
                                <span className="mx-auto">Start Learning</span>
                                <ChevronRight className="h-4 w-4 text-emerald-400" />
                            </Button>
                        </div>
                    </div>
                    
                    {/* Attendance Card Section */}
                    <div className="lg:col-span-4 mt-6 lg:mt-0">
                        <AttendanceCard 
                            title={title} 
                            studentCount={attendants.length} 
                            studentImages={attendants} // Assuming attendants are image URLs
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
