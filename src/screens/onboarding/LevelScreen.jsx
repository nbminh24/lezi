import React, { useState } from 'react';
import { Egg, Translate, Star } from 'phosphor-react';
import OnboardingLayout from './OnboardingLayout';

const LevelScreen = ({ onNext, onBack }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        {
            id: 'beginner',
            title: "I'm new to English",
            description: 'Starting from the basics',
            icon: Egg,
        },
        {
            id: 'intermediate',
            title: 'I know some words',
            description: 'Can understand simple phrases',
            icon: Translate,
        },
        {
            id: 'advanced',
            title: 'I can have conversations',
            description: 'Confident in daily communication',
            icon: Star,
        },
    ];

    const handleContinue = () => {
        console.log('Selected level:', selectedLevel);
        onNext({ level: selectedLevel });
    };

    return (
        <OnboardingLayout
            currentStep={3}
            totalSteps={3}
            onBack={onBack}
            onContinue={handleContinue}
            canContinue={selectedLevel !== null}
        >
            {/* Mascot with Speech Bubble */}
            <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                    <img
                        src="/avatar.png"
                        alt="Lezi Mascot"
                        className="w-[100px] h-[100px] rounded-full border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    />
                </div>

                {/* Speech Bubble */}
                <div className="relative bg-[#F3F4F6] rounded-[24px] px-6 py-4 max-w-[280px]">
                    <p className="text-[14px] font-medium text-[#666666] text-center">
                        Be honest! I'll adjust to your level.
                    </p>
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#F3F4F6]"></div>
                </div>
            </div>

            {/* Question */}
            <h2 className="font-bold text-[24px] tracking-tight text-[#1a1a1a] text-center mb-2">
                How much English do you know?
            </h2>
            <p className="text-[14px] text-[#666666] text-center mb-6">
                Select your current level
            </p>

            {/* Vertical List - Same style as GoalScreen */}
            <div className="space-y-3">
                {levels.map((level) => {
                    const Icon = level.icon;
                    const isSelected = selectedLevel === level.id;

                    return (
                        <button
                            key={level.id}
                            onClick={() => setSelectedLevel(level.id)}
                            className={`w-full p-5 rounded-full flex items-center gap-4 transition-all duration-200 ${isSelected
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.25)]'
                                : 'bg-[#F9FAFB] hover:bg-[#F3F4F6]'
                                }`}
                        >
                            {/* Icon Circle */}
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-white'
                                    }`}
                            >
                                <Icon
                                    size={24}
                                    weight={isSelected ? 'fill' : 'regular'}
                                    className={isSelected ? 'text-white' : 'text-[#666666]'}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 text-left">
                                <div className="flex items-baseline gap-2">
                                    <span
                                        className={`text-[16px] font-bold ${isSelected ? 'text-white' : 'text-[#1a1a1a]'
                                            }`}
                                    >
                                        {level.title}
                                    </span>
                                </div>
                                <p
                                    className={`text-[13px] ${isSelected ? 'text-white/70' : 'text-[#9CA3AF]'
                                        }`}
                                >
                                    {level.description}
                                </p>
                            </div>

                            {/* Radio indicator */}
                            <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected
                                    ? 'border-white bg-white'
                                    : 'border-[#E5E5E5] bg-transparent'
                                    }`}
                            >
                                {isSelected && (
                                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </OnboardingLayout>
    );
};

export default LevelScreen;
