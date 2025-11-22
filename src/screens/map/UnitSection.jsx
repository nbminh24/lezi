import React from 'react';
import MapNode from './MapNode';

const UnitSection = ({
    unitNumber,
    title,
    description,
    progress,
    total,
    color = 'blue',
    lessons = [],
    onLessonClick
}) => {
    const colorVariants = {
        blue: {
            bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
            text: 'text-white',
        },
        green: {
            bg: 'bg-gradient-to-r from-green-500 to-green-600',
            text: 'text-white',
        },
        purple: {
            bg: 'bg-gradient-to-r from-purple-500 to-purple-600',
            text: 'text-white',
        },
        orange: {
            bg: 'bg-gradient-to-r from-orange-500 to-orange-600',
            text: 'text-white',
        },
    };

    const colorStyle = colorVariants[color] || colorVariants.blue;

    // Zigzag positioning: Left -> Center -> Right -> Center pattern
    const getNodePosition = (index) => {
        const positions = ['justify-start', 'justify-center', 'justify-end', 'justify-center'];
        return positions[index % 4];
    };

    return (
        <div className="mb-12">
            {/* Unit Header */}
            <div className={`${colorStyle.bg} rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)] mb-8`}>
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h2 className={`text-[20px] font-bold ${colorStyle.text} mb-1`}>
                            Unit {unitNumber}: {title}
                        </h2>
                        <p className={`text-[13px] ${colorStyle.text} opacity-90`}>
                            {description}
                        </p>
                    </div>
                    <div className="bg-white/20 rounded-full px-4 py-2">
                        <span className={`text-[14px] font-bold ${colorStyle.text}`}>
                            {progress}/{total}
                        </span>
                    </div>
                </div>
            </div>

            {/* Lesson Path (Zigzag Layout) */}
            <div className="space-y-6 px-4">
                {lessons.map((lesson, index) => (
                    <div
                        key={lesson.id}
                        className={`flex ${getNodePosition(index)}`}
                    >
                        <MapNode
                            status={lesson.status}
                            lessonNumber={lesson.number}
                            showMascot={lesson.status === 'current'}
                            onClick={() => onLessonClick(lesson.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnitSection;
