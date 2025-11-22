import React from 'react';
import { SignIn, UserPlus, House, NumberCircleOne, NumberCircleTwo, NumberCircleThree, Image, TextAa, TextAlignLeft, Shuffle, SpeakerHigh, ArrowsLeftRight, TextT, Keyboard, ChatCircleDots, CheckSquare, UsersThree, MicrophoneStage, Newspaper, Trophy, Medal } from 'phosphor-react';

const DevTab = ({ currentScreen, onScreenChange }) => {
    const authScreens = [
        { id: 'login', label: 'Login', icon: SignIn },
        { id: 'signup', label: 'Signup', icon: UserPlus },
        { id: 'dashboard', label: 'Home', icon: House },
        { id: 'rank', label: 'Leaderboard', icon: Medal },
    ];

    const onboardingScreens = [
        { id: 'onboard1', label: 'Step 1', icon: NumberCircleOne },
        { id: 'onboard2', label: 'Step 2', icon: NumberCircleTwo },
        { id: 'onboard3', label: 'Step 3', icon: NumberCircleThree },
    ];

    const learningScreens = [
        { id: 'imageSelect', label: 'Q: Image', icon: Image },
        { id: 'textChoice', label: 'Q: Text', icon: TextAa },
        { id: 'sentenceBuild', label: 'Q: Sentence', icon: TextAlignLeft },
        { id: 'pairMatch', label: 'Q: Match', icon: Shuffle },
        { id: 'listening', label: 'Q: Listen', icon: SpeakerHigh },
        { id: 'imageToText', label: 'Q: Img→Txt', icon: ArrowsLeftRight },
        { id: 'fillBlank', label: 'Q: Fill', icon: TextT },
        { id: 'listeningType', label: 'Q: Type', icon: Keyboard },
        { id: 'dialogue', label: 'Q: Chat', icon: ChatCircleDots },
        { id: 'trueFalse', label: 'Q: T/F', icon: CheckSquare },
        { id: 'roleplay', label: 'Q: Roleplay', icon: UsersThree },
        { id: 'vocabSpeaking', label: 'Q: Speak', icon: MicrophoneStage },
        { id: 'realWorld', label: 'Q: Context', icon: Newspaper },
        { id: 'lessonComplete', label: 'End Screen', icon: Trophy },
    ];

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Glassmorphism Floating Dock */}
            <div className="backdrop-blur-md bg-white/70 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-[0.5px] border-white/50 p-3">

                {/* Auth Screens */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                    {authScreens.map((screen) => {
                        const Icon = screen.icon;
                        const isActive = currentScreen === screen.id;

                        return (
                            <button
                                key={screen.id}
                                onClick={() => onScreenChange(screen.id)}
                                className={`
                                    px-3 py-2.5 rounded-[16px]
                                    flex flex-col items-center gap-1
                                    font-medium text-[11px]
                                    transition-all duration-200
                                    ${isActive
                                        ? 'bg-[#1a1a1a] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                                        : 'bg-transparent text-[#666666] hover:bg-white/50'
                                    }
                                `}
                                title={screen.label}
                            >
                                <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
                                <span>{screen.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="h-[0.5px] bg-black/10 mb-2"></div>

                {/* Onboarding Screens */}
                <div className="grid grid-cols-3 gap-2">
                    {onboardingScreens.map((screen) => {
                        const Icon = screen.icon;
                        const isActive = currentScreen === screen.id;

                        return (
                            <button
                                key={screen.id}
                                onClick={() => onScreenChange(screen.id)}
                                className={`
                                    px-3 py-2.5 rounded-[16px]
                                    flex flex-col items-center gap-1
                                    font-medium text-[11px]
                                    transition-all duration-200
                                    ${isActive
                                        ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]'
                                        : 'bg-transparent text-[#666666] hover:bg-white/50'
                                    }
                                `}
                                title={screen.label}
                            >
                                <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
                                <span>{screen.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="h-[0.5px] bg-black/10 mb-2"></div>

                {/* Learning/Question Screens */}
                <div className="grid grid-cols-3 gap-2">
                    {learningScreens.map((screen) => {
                        const Icon = screen.icon;
                        const isActive = currentScreen === screen.id;

                        return (
                            <button
                                key={screen.id}
                                onClick={() => onScreenChange(screen.id)}
                                className={`
                                    px-3 py-2.5 rounded-[16px]
                                    flex flex-col items-center gap-1
                                    font-medium text-[11px]
                                    transition-all duration-200
                                    ${isActive
                                        ? 'bg-green-600 text-white shadow-[0_4px_12px_rgba(34,197,94,0.25)]'
                                        : 'bg-transparent text-[#666666] hover:bg-white/50'
                                    }
                                `}
                                title={screen.label}
                            >
                                <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
                                <span>{screen.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Dev Label */}
                <div className="text-center mt-2 pt-2 border-t-[0.5px] border-black/10">
                    <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                        Dev Mode
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DevTab;
