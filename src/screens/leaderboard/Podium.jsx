import React from 'react';

const Podium = ({ topThree, mode }) => {
    const getPedestalHeight = (rank) => {
        if (rank === 1) return 'h-28';
        if (rank === 2) return 'h-20';
        return 'h-16';
    };

    const getAvatarBorder = (rank) => {
        if (rank === 1) return 'border-[#FFD700]'; // Gold
        if (rank === 2) return 'border-[#C0C0C0]'; // Silver
        return 'border-[#CD7F32]'; // Bronze
    };

    const getAvatarSize = (rank) => {
        if (rank === 1) return 'w-20 h-20';
        return 'w-16 h-16';
    };

    const getNumberColor = (rank) => {
        if (rank === 1) return 'text-[#DAA520]'; // Darker Gold
        if (rank === 2) return 'text-[#A9A9A9]'; // Dark Silver
        return 'text-[#8B4513]'; // Dark Bronze
    };

    const getNumberSize = (rank) => {
        if (rank === 1) return 'text-4xl';
        return 'text-3xl';
    };

    // Reorder for display: [2nd, 1st, 3rd]
    const displayOrder = [topThree[1], topThree[0], topThree[2]];

    return (
        <div className="flex items-end justify-center gap-3 mb-6 px-6">
            {displayOrder.map((user, index) => {
                const actualRank = index === 1 ? 1 : index === 0 ? 2 : 3;

                return (
                    <div key={user.id} className="flex flex-col items-center flex-1">
                        {/* Avatar */}
                        <div className={`
              ${getAvatarSize(actualRank)} rounded-full 
              border-4 ${getAvatarBorder(actualRank)}
              bg-white
              shadow-sm
              mb-2
            `}>
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <p className="text-xs font-semibold text-gray-700 mb-1 text-center truncate w-full">
                            {user.name}
                        </p>

                        {/* Score */}
                        <p className="text-sm font-bold text-gray-600 mb-2">
                            {mode === 'xp' ? `${user.xp}` : `${user.streak}🔥`}
                        </p>

                        {/* Pedestal (Clean Subtle Base) */}
                        <div className={`
              w-full ${getPedestalHeight(actualRank)}
              bg-gray-50
              rounded-t-lg
              shadow-sm
              flex items-center justify-center
              border border-gray-200
            `}>
                            <span className={`${getNumberSize(actualRank)} font-black ${getNumberColor(actualRank)}`}>
                                {actualRank}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Podium;
