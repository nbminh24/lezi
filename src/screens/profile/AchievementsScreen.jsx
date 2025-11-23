import React, { useState } from 'react';
import { ArrowLeft, Lock, Flame, Lightning, Book, Target, Trophy, Calendar } from 'phosphor-react';

const AchievementsScreen = ({ onBack }) => {
    const [selectedBadge, setSelectedBadge] = useState(null);

    // Mock achievements data
    const achievements = [
        {
            id: 1,
            title: 'Early Bird',
            description: 'Complete your first lesson',
            unlocked: true,
            date: 'Nov 15, 2025',
            icon: 'Flame',
            borderColor: 'border-yellow-400'
        },
        {
            id: 2,
            title: 'Streak Master',
            description: 'Maintain a 7-day streak',
            unlocked: true,
            date: 'Nov 20, 2025',
            icon: 'Lightning',
            borderColor: 'border-orange-400'
        },
        {
            id: 3,
            title: 'Vocab King',
            description: 'Learn 100 new words',
            unlocked: false,
            progress: '67/100',
            icon: 'Book',
            borderColor: 'border-blue-400'
        },
        {
            id: 4,
            title: 'Grammar Pro',
            description: 'Master all grammar lessons',
            unlocked: false,
            progress: '12/24',
            icon: 'Target',
            borderColor: 'border-green-400'
        },
        {
            id: 5,
            title: 'League Champion',
            description: 'Reach Diamond League',
            unlocked: false,
            progress: 'Silver League',
            icon: 'Trophy',
            borderColor: 'border-purple-400'
        },
        {
            id: 6,
            title: 'Perfect Week',
            description: 'Complete daily goals for 7 days',
            unlocked: false,
            progress: '3/7 days',
            icon: 'Calendar',
            borderColor: 'border-pink-400'
        }
    ];

    const unlockedCount = achievements.filter(a => a.unlocked).length;
    const totalCount = achievements.length;
    const progressPercent = (unlockedCount / totalCount) * 100;

    const handleBadgeClick = (badge) => {
        setSelectedBadge(selectedBadge?.id === badge.id ? null : badge);
    };

    return (
        <div className="h-full flex flex-col bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-4">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="mb-4 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    <ArrowLeft size={20} className="text-gray-700" weight="bold" />
                </button>

                {/* Title */}
                <div className="mb-4">
                    <h1 className="text-3xl font-black text-gray-900 mb-1">
                        My Achievements
                    </h1>
                    <p className="text-sm text-gray-500">
                        {unlockedCount} / {totalCount} Unlocked
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Badge Grid - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
                <div className="grid grid-cols-3 gap-6">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            onClick={() => handleBadgeClick(achievement)}
                            className="flex flex-col items-center cursor-pointer"
                        >
                            {/* Badge Circle */}
                            <div className="relative">
                                <div
                                    className={`
                    w-24 h-24 rounded-full overflow-hidden
                    border-4 ${achievement.unlocked ? achievement.borderColor : 'border-dashed border-gray-300'}
                    ${achievement.unlocked ? 'shadow-lg' : 'opacity-50'}
                    transition-all duration-200
                    ${selectedBadge?.id === achievement.id ? 'scale-110 ring-4 ring-blue-200' : ''}
                  `}
                                >
                                    <img
                                        src="/avatar.png"
                                        alt={achievement.title}
                                        className={`w-full h-full object-cover ${!achievement.unlocked ? 'grayscale' : ''}`}
                                    />
                                </div>

                                {/* Lock Icon Overlay for Locked Badges */}
                                {!achievement.unlocked && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center">
                                            <Lock size={20} className="text-white" weight="bold" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Label */}
                            <p className="text-xs font-bold text-gray-900 text-center mt-2 leading-tight">
                                {achievement.title}
                            </p>
                            <p className="text-[10px] text-gray-500 text-center">
                                {achievement.unlocked ? achievement.date : 'Locked'}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Detail Card - Shows when a badge is selected */}
                {selectedBadge && (
                    <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100 animate-in slide-in-from-bottom-4">
                        <div className="flex items-start gap-4">
                            {/* Badge Preview */}
                            <div
                                className={`
                  w-20 h-20 rounded-full overflow-hidden flex-shrink-0
                  border-4 ${selectedBadge.unlocked ? selectedBadge.borderColor : 'border-gray-300'}
                  ${selectedBadge.unlocked ? 'shadow-md' : 'opacity-50'}
                `}
                            >
                                <img
                                    src="/avatar.png"
                                    alt={selectedBadge.title}
                                    className={`w-full h-full object-cover ${!selectedBadge.unlocked ? 'grayscale' : ''}`}
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {selectedBadge.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    {selectedBadge.description}
                                </p>
                                {selectedBadge.unlocked ? (
                                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                                        ✓ Unlocked on {selectedBadge.date}
                                    </div>
                                ) : (
                                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                                        🔒 Progress: {selectedBadge.progress}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AchievementsScreen;
