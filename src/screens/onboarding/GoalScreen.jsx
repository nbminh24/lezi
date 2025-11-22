import React, { useState } from 'react';
import { Fire } from 'phosphor-react';
import OnboardingLayout from './OnboardingLayout';

const GoalScreen = ({ onNext, onBack }) => {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const goals = [
        { id: 'casual', label: 'Casual', time: '5 min', description: 'Light practice' },
        { id: 'regular', label: 'Regular', time: '10 min', description: 'Steady progress' },
        { id: 'serious', label: 'Serious', time: '15 min', description: 'Fast improvement' },
        { id: 'intense', label: 'Intense', time: '20 min', description: 'Maximum growth' },
    ];

    const handleContinue = () => {
        console.log('Selected goal:', selectedGoal);
        onNext({ goal: selectedGoal });
    };

    return (
        <OnboardingLayout
            currentStep={2}
            totalSteps={3}
            onBack={onBack}
            onContinue={handleContinue}
            canContinue={selectedGoal !== null}
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
                        Consistency is key to success!
                    </p>
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#F3F4F6]"></div>
                </div>
            </div>

            {/* Question */}
            <h2 className="font-bold text-[24px] tracking-tight text-[#1a1a1a] text-center mb-2">
                How much time can you spend?
            </h2>
            <p className="text-[14px] text-[#666666] text-center mb-6">
                Choose your daily goal
            </p>

            {/* Vertical List */}
            <div className="space-y-3">
                {goals.map((goal) => {
                    const isSelected = selectedGoal === goal.id;

                    return (
                        <button
                            key={goal.id}
                            onClick={() => setSelectedGoal(goal.id)}
                            className={`
                w-full p-5 rounded-full
                flex items-center gap-4
                transition-all duration-200
                ${isSelected
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.25)]'
                                    : 'bg-[#F9FAFB] hover:bg-[#F3F4F6]'
                                }
              `}
                        >
                            <div
                                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${isSelected ? 'bg-white/20' : 'bg-white'}
                `}
                            >
                                <Fire
                                    size={24}
                                    weight={isSelected ? 'fill' : 'regular'}
                                    className={isSelected ? 'text-white' : 'text-[#666666]'}
                                />
                            </div>

                            <div className="flex-1 text-left">
                                <div className="flex items-baseline gap-2">
                                    <span
                                        className={`text-[16px] font-bold ${isSelected ? 'text-white' : 'text-[#1a1a1a]'
                                            }`}
                                    >
                                        {goal.label}
                                    </span>
                                    <span
                                        className={`text-[14px] font-semibold ${isSelected ? 'text-white/80' : 'text-[#666666]'
                                            }`}
                                    >
                                        ({goal.time})
                                    </span>
                                </div>
                                <p
                                    className={`text-[13px] ${isSelected ? 'text-white/70' : 'text-[#9CA3AF]'
                                        }`}
                                >
                                    {goal.description}
                                </p>
                            </div>

                            {/* Radio indicator */}
                            <div
                                className={`
                  w-6 h-6 rounded-full border-2
                  flex items-center justify-center
                  transition-all
                  ${isSelected
                                        ? 'border-white bg-white'
                                        : 'border-[#E5E5E5] bg-transparent'
                                    }
                `}
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

export default GoalScreen;
