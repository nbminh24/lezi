import React from 'react';

const StickyRank = ({ user, rank, mode }) => {
    return (
        <div className="px-6">
            <div className="flex items-center bg-blue-50 p-3 border-b border-gray-50 rounded-lg">
                {/* Rank Number */}
                <div className="w-8 text-center">
                    <span className="text-sm font-bold text-gray-500">
                        {rank}
                    </span>
                </div>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-100 ml-3 mr-3 overflow-hidden">
                    <img
                        src={user.avatar}
                        alt="You"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name */}
                <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">
                        You
                    </p>
                </div>

                {/* Score */}
                <div className="font-bold text-sm text-blue-600">
                    {mode === 'xp' ? user.xp : `${user.streak}🔥`}
                </div>
            </div>
        </div>
    );
};

export default StickyRank;
