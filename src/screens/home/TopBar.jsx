import React from 'react';
import { Fire, Lightning, Heart } from 'phosphor-react';

const TopBar = ({ streak = 3, gems = 250, hearts = 5 }) => {
    return (
        <div className="sticky top-0 z-40 bg-[#F9FAFB] pt-6 pb-4 px-6">
            <div className="flex items-center justify-between">
                {/* Logo/Title */}
                <h1 className="text-[24px] font-bold text-[#1a1a1a]">Lezi</h1>

                {/* Stats HUD */}
                <div className="flex items-center gap-3">
                    {/* Streak */}
                    <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                        <Fire size={18} weight="fill" className="text-orange-500" />
                        <span className="text-[14px] font-bold text-orange-500">{streak}</span>
                    </div>

                    {/* Gems */}
                    <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                        <Lightning size={18} weight="fill" className="text-cyan-600" />
                        <span className="text-[14px] font-bold text-cyan-600">{gems}</span>
                    </div>

                    {/* Hearts */}
                    <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                        <Heart size={18} weight="fill" className="text-red-500" />
                        <span className="text-[14px] font-bold text-red-500">{hearts}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
