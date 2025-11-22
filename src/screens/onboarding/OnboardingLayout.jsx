import React from 'react';
import { CaretLeft } from 'phosphor-react';
import SoftButton from '../../components/ui/SoftButton';

const OnboardingLayout = ({
    currentStep,
    totalSteps = 3,
    onBack,
    onContinue,
    children,
    canContinue = true
}) => {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-6">
            {/* Main Card Container - Same size as SignupScreen */}
            <div className="w-full max-w-[420px] bg-white rounded-[40px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)] p-8 flex flex-col">

                {/* Top Bar: Back Button + Progress */}
                <div className="flex items-center gap-4 mb-8">
                    {/* Back Button */}
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
                        >
                            <CaretLeft size={20} weight="bold" className="text-[#1a1a1a]" />
                        </button>
                    )}

                    {/* Progress Bar (Segmented Visualizer) */}
                    <div className="flex-1 flex items-center gap-[3px]">
                        {Array.from({ length: totalSteps }).map((_, index) => {
                            const isActive = index < currentStep;
                            const isCurrent = index === currentStep - 1;

                            return (
                                <div
                                    key={index}
                                    className={`flex-1 h-[6px] rounded-full transition-all duration-300 ${isActive || isCurrent
                                            ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                            : 'bg-[#E5E5E5]'
                                        }`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 mb-6">
                    {children}
                </div>

                {/* Bottom: Continue Button */}
                <div className="mt-auto pt-4">
                    <SoftButton
                        onClick={onContinue}
                        variant="primary"
                        disabled={!canContinue}
                    >
                        Continue
                    </SoftButton>
                </div>
            </div>
        </div>
    );
};

export default OnboardingLayout;
