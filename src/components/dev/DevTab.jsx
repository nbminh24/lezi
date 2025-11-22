import React from 'react';
import { LogIn, UserPlus, User } from 'lucide-react';

const DevTab = ({ currentScreen, onScreenChange }) => {
    const screens = [
        { id: 'login', label: 'Login', icon: LogIn },
        { id: 'signup', label: 'Signup', icon: UserPlus },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Glassmorphism Floating Dock */}
            <div className="backdrop-blur-md bg-white/70 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-[0.5px] border-white/50 p-2">
                <div className="flex gap-2">
                    {screens.map((screen) => {
                        const Icon = screen.icon;
                        const isActive = currentScreen === screen.id;

                        return (
                            <button
                                key={screen.id}
                                onClick={() => onScreenChange(screen.id)}
                                className={`
                  px-4 py-2.5 rounded-[18px]
                  flex items-center gap-2
                  font-medium text-[13px]
                  transition-all duration-200
                  ${isActive
                                        ? 'bg-[#1a1a1a] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                                        : 'bg-transparent text-[#666666] hover:bg-white/50'
                                    }
                `}
                                title={screen.label}
                            >
                                <Icon size={16} strokeWidth={2} />
                                <span className="hidden sm:inline">{screen.label}</span>
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
