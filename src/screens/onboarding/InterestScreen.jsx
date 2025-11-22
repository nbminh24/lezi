import React, { useState } from 'react';
import { AirplaneTilt, Briefcase, FilmStrip, Brain, Users, Student } from 'phosphor-react';
import OnboardingLayout from './OnboardingLayout';

const InterestScreen = ({ onNext, onBack }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const interests = [
        { id: 'travel', label: 'Travel', icon: AirplaneTilt },
        { id: 'career', label: 'Career', icon: Briefcase },
        { id: 'entertainment', label: 'Entertainment', icon: FilmStrip },
        { id: 'brain', label: 'Brain Training', icon: Brain },
        { id: 'friends', label: 'Friends', icon: Users },
        { id: 'school', label: 'School', icon: Student },
    ];

    const toggleInterest = (interestId) => {
        setSelectedInterests((prev) =>
            prev.includes(interestId)
                ? prev.filter((id) => id !== interestId)
                : [...prev, interestId]
        );
    };

    const handleContinue = () => {
        console.log('Selected interests:', selectedInterests);
        onNext({ interests: selectedInterests });
    };

    return (
        <OnboardingLayout
            currentStep={1}
            totalSteps={3}
            onBack={onBack}
            onContinue={handleContinue}
            canContinue={selectedInterests.length > 0}
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
                        Let me know what motivates you!
                    </p>
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#F3F4F6]"></div>
                </div>
            </div>

            {/* Question */}
            <h2 className="font-bold text-[24px] tracking-tight text-[#1a1a1a] text-center mb-2">
                Why are you learning English?
            </h2>
            <p className="text-[14px] text-[#666666] text-center mb-6">
                Select all that apply
            </p>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => {
                    const Icon = interest.icon;
                    const isSelected = selectedInterests.includes(interest.id);

                    return (
                        <button
                            key={interest.id}
                            onClick={() => toggleInterest(interest.id)}
                            className={`
                p-4 rounded-[24px] 
                flex flex-col items-center gap-3
                transition-all duration-200
                ${isSelected
                                    ? 'bg-blue-50 border-2 border-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.15)]'
                                    : 'bg-[#F9FAFB] border-2 border-transparent hover:border-[#E5E5E5]'
                                }
              `}
                        >
                            <Icon
                                size={32}
                                weight={isSelected ? 'fill' : 'regular'}
                                className={isSelected ? 'text-blue-600' : 'text-[#666666]'}
                            />
                            <span
                                className={`text-[13px] font-semibold ${isSelected ? 'text-blue-600' : 'text-[#666666]'
                                    }`}
                            >
                                {interest.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </OnboardingLayout>
    );
};

export default InterestScreen;
