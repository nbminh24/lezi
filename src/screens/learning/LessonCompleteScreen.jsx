import React, { useState, useEffect } from 'react';
import { Lightning, Target, Timer, Fire } from 'phosphor-react';

const LessonCompleteScreen = ({ onContinue }) => {
    const [xp, setXp] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [showStreak, setShowStreak] = useState(false);
    const [showBadge, setShowBadge] = useState(false);

    // Mock data
    const finalXP = 20;
    const finalAccuracy = 100;
    const timeSpent = '1:30';
    const currentStreak = 5;

    // Mock new badge (set to null to hide)
    const newBadge = {
        title: 'Early Bird',
        description: 'Completed a lesson before 8 AM'
    };

    // Count-up animation
    useEffect(() => {
        // XP count up
        const xpInterval = setInterval(() => {
            setXp(prev => {
                if (prev >= finalXP) {
                    clearInterval(xpInterval);
                    return finalXP;
                }
                return prev + 1;
            });
        }, 50);

        // Accuracy count up
        const accInterval = setInterval(() => {
            setAccuracy(prev => {
                if (prev >= finalAccuracy) {
                    clearInterval(accInterval);
                    return finalAccuracy;
                }
                return prev + 5;
            });
        }, 30);

        // Show badge after 500ms
        if (newBadge) {
            setTimeout(() => {
                setShowBadge(true);
                console.log('🎵 Achievement Unlocked Sound Effect!');
            }, 500);
        }

        // Show streak after 1.5 seconds
        setTimeout(() => {
            setShowStreak(true);
        }, 1500);

        return () => {
            clearInterval(xpInterval);
            clearInterval(accInterval);
        };
    }, []);

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDay = 1; // Tuesday (index 1)

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col overflow-hidden">
            {/* Sunburst background effect */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
                {/* Mascot & Title */}
                <div className="mb-8 text-center">
                    <div className="mb-4 animate-bounce-slow">
                        <img
                            src="/avatar.png"
                            alt="Lezi"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 shadow-xl"
                        />
                    </div>

                    <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 mb-2 animate-slideDown">
                        Lesson Complete!
                    </h1>

                    <p className="text-lg text-gray-600 font-medium">
                        Great work! Keep it up! 🎉
                    </p>
                </div>

                {/* Achievement Unlocked Card */}
                {newBadge && (
                    <div className={`
                        w-full max-w-md mb-6
                        bg-gradient-to-br from-yellow-50 to-orange-50
                        border-2 border-yellow-200 
                        rounded-2xl 
                        p-6
                        shadow-xl shadow-yellow-200/50
                        transition-all duration-500
                        ${showBadge ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                    `}>
                        {/* Achievement Title */}
                        <p className="text-xs font-black tracking-widest text-yellow-600 uppercase mb-4 text-center animate-pulse">
                            ✨ ACHIEVEMENT UNLOCKED! ✨
                        </p>

                        {/* Badge Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="relative animate-badge-pop">
                                <img
                                    src="/avatar.png"
                                    alt={newBadge.title}
                                    className="w-24 h-24 rounded-full border-[6px] border-yellow-400 shadow-xl"
                                />
                                {/* Sparkle effect */}
                                <div className="absolute -top-2 -right-2 text-2xl animate-spin-slow">
                                    ✨
                                </div>
                                <div className="absolute -bottom-2 -left-2 text-2xl animate-spin-slow" style={{ animationDelay: '1s' }}>
                                    ⭐
                                </div>
                            </div>
                        </div>

                        {/* Badge Details */}
                        <div className="text-center">
                            <h3 className="text-xl font-black text-yellow-800 mb-1">
                                {newBadge.title}
                            </h3>
                            <p className="text-sm text-yellow-700 font-medium">
                                {newBadge.description}
                            </p>
                        </div>

                        {/* Confetti decoration */}
                        <div className="flex justify-center gap-2 mt-4 text-xl">
                            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎉</span>
                            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🏆</span>
                            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</span>
                        </div>
                    </div>
                )}

                {/* Stats Grid (Bento Style) */}
                <div className="w-full max-w-md mb-6">
                    <div className="grid grid-cols-3 gap-3">
                        {/* XP Card */}
                        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-4 text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Lightning size={24} weight="fill" className="text-yellow-500" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Total XP</p>
                            <p className="text-2xl font-black text-gray-800">+{xp}</p>
                        </div>

                        {/* Accuracy Card */}
                        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-4 text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-red-100 rounded-full flex items-center justify-center">
                                <Target size={24} weight="fill" className="text-red-500" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Accuracy</p>
                            <p className="text-2xl font-black text-green-600">{accuracy}%</p>
                        </div>

                        {/* Speed Card */}
                        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-4 text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                                <Timer size={24} weight="fill" className="text-blue-500" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Time</p>
                            <p className="text-2xl font-black text-gray-800">{timeSpent}</p>
                        </div>
                    </div>
                </div>

                {/* Streak Card (The Highlight) */}
                <div className={`
          w-full max-w-md
          bg-orange-50 
          border-2 border-orange-100 
          rounded-2xl 
          p-5
          transition-all duration-500
          ${showStreak ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
                    {/* Streak Title */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Fire size={24} weight="fill" className="text-orange-500 animate-pulse" />
                        <p className="text-lg font-black text-orange-600">
                            {currentStreak} Day Streak!
                        </p>
                    </div>

                    {/* Days of Week */}
                    <div className="flex justify-between gap-2">
                        {weekDays.map((day, index) => {
                            const isToday = index === currentDay;
                            const isPast = index < currentDay;

                            return (
                                <div
                                    key={day}
                                    className={`
                    flex-1 aspect-square rounded-xl
                    flex flex-col items-center justify-center
                    transition-all duration-300
                    ${isToday
                                            ? 'bg-orange-500 scale-110 animate-pop'
                                            : isPast
                                                ? 'bg-orange-200'
                                                : 'bg-gray-200'
                                        }
                  `}
                                >
                                    <p className={`text-xs font-bold ${isToday || isPast ? 'text-white' : 'text-gray-400'}`}>
                                        {day}
                                    </p>
                                    {(isToday || isPast) && (
                                        <Fire
                                            size={16}
                                            weight="fill"
                                            className={`mt-1 ${isToday ? 'text-white' : 'text-orange-400'}`}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="relative z-10 bg-white border-t border-gray-100 p-6">
                {/* Continue Button */}
                <button
                    onClick={onContinue}
                    className="
            w-full h-16 rounded-2xl
            bg-green-500 
            border-2 border-green-400
            border-b-[8px] border-b-green-700
            text-white font-black text-xl
            shadow-xl shadow-green-500/30
            transition-all duration-150
            hover:scale-105
            active:border-b-0 active:translate-y-[8px]
          "
                >
                    CONTINUE
                </button>
            </div>

            <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0);
          }
          50% { 
            transform: translateY(-20px);
          }
        }
        @keyframes slideDown {
          from { 
            transform: translateY(-30px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes pop {
          0% { 
            transform: scale(0.8);
            opacity: 0;
          }
          50% { 
            transform: scale(1.2);
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes badge-pop {
          0% { 
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          60% { 
            transform: scale(1.3) rotate(20deg);
          }
          100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes spin-slow {
          from { 
            transform: rotate(0deg);
          }
          to { 
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        .animate-pop {
          animation: pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-badge-pop {
          animation: badge-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default LessonCompleteScreen;
