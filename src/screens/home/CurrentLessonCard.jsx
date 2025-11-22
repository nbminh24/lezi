import React from 'react';
import { Play, Path } from 'phosphor-react';

const CurrentLessonCard = ({
    unit = 'Basics 1',
    lessonTitle = 'Lesson 3: Greetings',
    onStartLesson,
    onViewPath
}) => {
    return (
        <div className="bg-white rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-blue-100 p-8">
            {/* Header */}
            <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-[12px] font-semibold text-blue-600 mb-3">
                    Current Unit: {unit}
                </span>
                <h2 className="text-[24px] font-bold text-gray-800 mb-2">
                    {lessonTitle}
                </h2>
                <p className="text-[14px] text-gray-500">
                    Continue where you left off
                </p>
            </div>

            {/* Main Action Button */}
            <button
                onClick={onStartLesson}
                className="w-full h-14 bg-gradient-to-r from-[#3E73F9] to-[#2563EB] rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 mb-4"
            >
                <Play size={20} weight="fill" className="text-white" />
                <span className="text-[16px] font-bold text-white">Start Lesson</span>
            </button>

            {/* Secondary Link */}
            <button
                onClick={onViewPath}
                className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 transition-colors py-2"
            >
                <Path size={16} weight="bold" />
                <span className="text-[14px] font-semibold">View full learning path</span>
            </button>
        </div>
    );
};

export default CurrentLessonCard;
