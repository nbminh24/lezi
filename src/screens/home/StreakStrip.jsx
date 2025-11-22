import React from 'react';
import { Fire } from 'phosphor-react';

const StreakStrip = ({ currentStreak = 3 }) => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const today = 3; // Wednesday (0-indexed)

    return (
        <div className="bg-white rounded-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Fire size={20} weight="fill" className="text-orange-500" />
                    <span className="text-[15px] font-bold text-[#1a1a1a]">
                        {currentStreak} Day Streak
                    </span>
                </div>
                <span className="text-[13px] font-medium text-[#666666]">This week</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => {
                    const isPast = index < today;
                    const isToday = index === today;
                    const isFuture = index > today;

                    return (
                        <div
                            key={index}
                            className={`
                aspect-square rounded-full
                flex flex-col items-center justify-center
                transition-all duration-200
                ${isToday
                                    ? 'bg-gradient-to-br from-orange-400 to-red-500 shadow-[0_4px_12px_rgba(249,115,22,0.35)]'
                                    : isPast
                                        ? 'bg-orange-100 border-2 border-orange-200'
                                        : 'bg-[#F3F4F6] border-2 border-transparent'
                                }
              `}
                        >
                            {isPast ? (
                                <Fire size={16} weight="fill" className="text-orange-500" />
                            ) : isToday ? (
                                <Fire size={18} weight="fill" className="text-white" />
                            ) : null}
                            <span
                                className={`
                  text-[11px] font-semibold mt-1
                  ${isToday ? 'text-white' : isPast ? 'text-orange-500' : 'text-[#9CA3AF]'}
                `}
                            >
                                {day}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StreakStrip;
