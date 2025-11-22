import React, { useState, useEffect } from 'react';
import { Lock, Play } from 'phosphor-react';

const UnitCard = ({
    unitNumber,
    title,
    color = 'blue',
    lessons = [],
    onStartLesson,
    isActive = false
}) => {
    // Find first unfinished lesson as default
    const defaultLesson = lessons.find(l => l.status === 'current') || lessons[0];
    const [selectedLessonId, setSelectedLessonId] = useState(defaultLesson?.id);

    useEffect(() => {
        if (defaultLesson) {
            setSelectedLessonId(defaultLesson.id);
        }
    }, [defaultLesson]);

    const selectedLesson = lessons.find(l => l.id === selectedLessonId) || lessons[0];
    const completedCount = lessons.filter(l => l.status === 'completed').length;
    const totalCount = lessons.length;
    const progressPercent = (completedCount / totalCount) * 100;

    const colorVariants = {
        blue: 'from-blue-500 to-blue-600',
        green: 'from-green-500 to-green-600',
        purple: 'from-purple-500 to-purple-600',
        orange: 'from-orange-500 to-orange-600',
    };

    const handleLessonClick = (lesson) => {
        if (lesson.status === 'locked') {
            // Optional: Add shake animation
            return;
        }
        setSelectedLessonId(lesson.id);
    };

    const getMilestoneStyle = (lesson) => {
        const isSelected = lesson.id === selectedLessonId;

        if (lesson.status === 'completed') {
            return {
                bg: 'bg-green-400',
                border: 'border-b-4 border-green-600',
                text: 'text-white',
                shadow: 'shadow-[0_4px_0_0_#16a34a]',
                ring: isSelected ? 'ring-4 ring-green-200' : '',
                scale: isSelected ? 'scale-110' : '',
                cursor: 'cursor-pointer hover:scale-105',
            };
        } else if (lesson.status === 'current') {
            return {
                bg: 'bg-blue-500',
                border: 'border-b-4 border-blue-700',
                text: 'text-white',
                shadow: 'shadow-[0_4px_0_0_#1e40af]',
                ring: isSelected ? 'ring-4 ring-blue-200' : '',
                scale: isSelected ? 'scale-110' : '',
                cursor: 'cursor-pointer hover:scale-105',
            };
        } else {
            return {
                bg: 'bg-gray-200',
                border: 'border-b-4 border-gray-300',
                text: 'text-gray-400',
                shadow: 'shadow-[0_4px_0_0_#d1d5db]',
                ring: '',
                scale: '',
                cursor: 'cursor-not-allowed',
            };
        }
    };

    return (
        <div className="relative bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 mb-8">
            {/* Mascot peeking over active unit */}
            {isActive && (
                <div className="absolute -top-8 right-6 z-10">
                    <img
                        src="/avatar.png"
                        alt="Lezi"
                        className="w-14 h-14 rounded-full border-3 border-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                    />
                </div>
            )}

            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[20px] font-bold text-[#1a1a1a]">
                        Unit {unitNumber}: {title}
                    </h3>
                    <span className="text-[14px] font-semibold text-gray-500">
                        {completedCount}/{totalCount}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                        className={`h-full bg-gradient-to-r ${colorVariants[color]} rounded-full transition-all duration-500`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Milestone Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                {lessons.map((lesson) => {
                    const style = getMilestoneStyle(lesson);

                    return (
                        <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson)}
                            disabled={lesson.status === 'locked'}
                            className={`
                w-14 h-14 rounded-full
                flex items-center justify-center
                font-bold text-[16px]
                transition-all duration-200
                ${style.bg}
                ${style.border}
                ${style.text}
                ${style.shadow}
                ${style.ring}
                ${style.scale}
                ${style.cursor}
              `}
                        >
                            {lesson.status === 'locked' ? (
                                <Lock size={20} weight="bold" />
                            ) : (
                                lesson.number
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Detail Footer */}
            {selectedLesson && (
                <div className="border-t border-gray-100 pt-6">
                    <div className="mb-4">
                        <h4 className="text-[16px] font-bold text-[#1a1a1a] mb-1">
                            {selectedLesson.title}
                        </h4>
                        <p className="text-[13px] text-gray-500">
                            {selectedLesson.description}
                        </p>
                    </div>

                    {/* Start Button */}
                    <button
                        onClick={() => onStartLesson(selectedLesson.id)}
                        disabled={selectedLesson.status === 'locked'}
                        className={`
              w-full h-12 rounded-full
              flex items-center justify-center gap-2
              font-bold text-[15px]
              transition-all duration-200
              ${selectedLesson.status === 'locked'
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95'
                            }
            `}
                    >
                        <Play size={18} weight="fill" />
                        {selectedLesson.status === 'completed' ? 'Practice Again' : 'Start Lesson'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default UnitCard;
