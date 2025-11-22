import React from 'react';

const StickyRank = ({ user, rank, mode }) => {
    return (
        <div className="fixed bottom-[90px] left-0 right-0 z-30 px-6">
            <div className="flex items-center bg-blue-50 p-3 border-t border-blue-100 rounded-lg shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                {/* Rank Number */}
                <div className="w-8 text-center">
                    <span className="text-sm font-bold text-blue-900">
                        {rank}
                    </span>
                </div>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-blue-100 ml-3 mr-3 overflow-hidden">
                    <img
                        src={user.avatar}
                        alt="You"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name */}
                <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-900">
                        You
                    </p>
                </div>

                {/* Score */}
                <div className="font-bold text-sm text-[#3E73F9]">
                    {mode === 'xp' ? user.xp : `${user.streak}🔥`}
                </div>
            </div>
        </div>
    );
};

export default StickyRank;
