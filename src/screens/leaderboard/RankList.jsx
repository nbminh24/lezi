import React from 'react';

const RankList = ({ users, mode, startRank = 4 }) => {
    return (
        <div className="space-y-1 px-6">
            {users.map((user, index) => {
                const rank = startRank + index;

                return (
                    <div
                        key={user.id}
                        className="flex items-center bg-white p-3 border-b border-gray-50 rounded-lg"
                    >
                        {/* Rank Number */}
                        <div className="w-8 text-center">
                            <span className="text-sm font-bold text-gray-400">
                                {rank}
                            </span>
                        </div>

                        {/* Avatar */}
                        <div className="w-9 h-9 rounded-full bg-gray-100 ml-3 mr-3 overflow-hidden">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-700">
                                {user.name}
                            </p>
                        </div>

                        {/* Score */}
                        <div className="font-bold text-sm text-gray-700">
                            {mode === 'xp' ? `${user.xp}` : `${user.streak}🔥`}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RankList;
