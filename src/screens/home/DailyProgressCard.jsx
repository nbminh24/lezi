import React from 'react';

const DailyProgressCard = ({ currentXP = 15, goalXP = 20, userName = 'there' }) => {
    const progress = (currentXP / goalXP) * 100;
    const circumference = 2 * Math.PI * 45; // radius = 45
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8">
            <div className="flex items-center gap-6">
                {/* Left: Circular Progress */}
                <div className="relative w-32 h-32 shrink-0">
                    {/* Background circle */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            stroke="#E5E5E5"
                            strokeWidth="8"
                            fill="none"
                        />
                        {/* Progress circle with gradient */}
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            stroke="url(#progressGradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-500"
                        />
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[24px] font-bold text-[#1a1a1a]">{currentXP}</span>
                        <span className="text-[11px] font-medium text-[#9CA3AF]">/ {goalXP} XP</span>
                    </div>
                </div>

                {/* Right: Mascot + Message */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                        <img
                            src="/avatar.png"
                            alt="Lezi Mascot"
                            className="w-16 h-16 rounded-full border-3 border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                        />
                        <div>
                            <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1">
                                Great job, {userName}!
                            </h3>
                            <p className="text-[13px] text-[#666666]">
                                {currentXP >= goalXP
                                    ? "🎉 Daily goal completed!"
                                    : `${goalXP - currentXP} XP to reach your goal`
                                }
                            </p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-[#F3F4F6] rounded-full h-2 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyProgressCard;
