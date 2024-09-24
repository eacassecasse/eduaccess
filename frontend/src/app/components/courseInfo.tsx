import React from 'react';
import { Clock, Globe, MapPin, Star } from 'lucide-react';

interface CourseInfoProps {
    duration: string;
    languages: string[];
    mode: string | '';
    rating: number;
}

const CourseInfoSection: React.FC<CourseInfoProps> = ({ duration, languages, mode, rating }) => {
    return (
        <div className="relative flex flex-col lg:flex-row justify-around items-center p-6 sm:p-12 lg:py-2 lg:px-0">
            <div className="px-6 py-6 sm:px-12 sm:py-8 bg-white w-full">
                <div className="flex flex-col sm:flex-row justify-around items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <Clock className="mr-2" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center mb-4 sm:mb-0">
                        <Globe className="mr-2" />
                        <span>{languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center mb-4 sm:mb-0">
                        <MapPin className="mr-2" />
                        <span>{mode}</span>
                    </div>
                    <div className="flex items-center">
                        <Star className="mr-2" />
                        <span>{rating} / 5</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseInfoSection;
