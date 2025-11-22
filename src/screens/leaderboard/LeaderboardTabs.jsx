import React from 'react';

const LeaderboardTabs = ({ activeTab, onTabChange }) => {
    return (
        <div className="bg-gray-100 rounded-full p-1 mx-auto w-60 flex gap-1 mb-6">
            <button
                onClick={() => onTabChange('xp')}
                className={`
          flex-1 py-2 px-3 rounded-full
          font-semibold text-xs
          transition-all duration-200
          ${activeTab === 'xp'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }
        `}
            >
                XP League
            </button>

            <button
                onClick={() => onTabChange('streak')}
                className={`
          flex-1 py-2 px-3 rounded-full
          font-semibold text-xs
          transition-all duration-200
          ${activeTab === 'streak'
                        ? 'bg-white text-orange-500 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }
        `}
            >
                Streak Master
            </button>
        </div>
    );
};

export default LeaderboardTabs;
