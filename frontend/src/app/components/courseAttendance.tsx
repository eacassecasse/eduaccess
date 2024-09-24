// components/AttendanceCard.tsx
import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Heart } from 'lucide-react';
import { Plus } from 'lucide-react'; // Import the Plus icon

interface AttendanceProps {
    title: string;
    studentCount: number;
    studentImages: string[];
}

const AttendanceCard: React.FC<AttendanceProps> = ({ title, studentCount, studentImages }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-sm text-gray-500 mb-1">Are you interested in</p>
            <h3 className="text-xl font-bold mb-1 text-blue-950">{title}</h3>
            <p className="text-sm text-gray-500">Join to the {studentCount}+ students who appreciate this course</p>

            {/* Container for Button and Student Images */}
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between mt-4">
                {/* Button to appreciate the course */}
                <Button variant="link" className="flex items-center order-2 lg:order-1 text-blue-600">
                    <Heart className="mr-2" />
                    Appreciate
                </Button>

                {/* Student Images */}
                <div className="flex order-1 lg:order-2 -space-x-4">
                    {studentImages.slice(0, 5).map((image, index) => (
                        <div key={index} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                            <img src={image} alt={`Student ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    {studentImages.length > 5 && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                            <img src={studentImages[4]} alt={`Student 5`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <Plus className="text-white w-4 h-4" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AttendanceCard;
