import React from 'react';
import { MapTrifold, ChatCircleText, House, Trophy, User } from 'phosphor-react';

const BottomNavBar = ({ activeTab = 'home', onTabChange }) => {
    const navItems = [
        {
            id: 'map',
            label: 'Map',
            icon: MapTrifold,
            activeColor: 'text-green-500',
            activeBg: 'bg-green-50'
        },
        {
            id: 'chat',
            label: 'Chat',
            icon: ChatCircleText,
            activeColor: 'text-blue-500',
            activeBg: 'bg-blue-50'
        },
        {
            id: 'home',
            label: 'Home',
            icon: House,
            isCenter: true,
            activeColor: 'text-blue-600',
            activeBg: 'bg-blue-50'
        },
        {
            id: 'rank',
            label: 'Rank',
            icon: Trophy,
            activeColor: 'text-yellow-500',
            activeBg: 'bg-yellow-50'
        },
        {
            id: 'profile',
            label: 'Me',
            icon: User,
            activeColor: 'text-purple-500',
            activeBg: 'bg-purple-50'
        },
    ];

    return (
        <div className="absolute bottom-6 left-4 right-4 z-50">
            <nav className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 px-2 py-4">
                <div className="flex items-center justify-between">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        const isCenter = item.isCenter;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className={`
                  flex flex-col items-center gap-1 px-4 py-2 rounded-2xl
                  transition-all duration-200
                  ${isActive ? item.activeBg : 'hover:bg-gray-50'}
                  ${isCenter ? 'scale-110' : ''}
                `}
                            >
                                <div
                                    className={`
                    flex items-center justify-center
                    ${isCenter && isActive ? `w-10 h-10 rounded-full ${item.activeBg}` : ''}
                  `}
                                >
                                    <Icon
                                        size={isCenter ? 28 : 24}
                                        weight={isActive ? 'fill' : 'regular'}
                                        className={`
                      transition-colors
                      ${isActive ? item.activeColor : 'text-gray-400'}
                    `}
                                    />
                                </div>
                                <span
                                    className={`
                    text-[11px] font-semibold
                    ${isActive ? item.activeColor : 'text-gray-400'}
                  `}
                                >
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default BottomNavBar;
