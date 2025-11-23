import React, { useState } from 'react';
import LeaderboardTabs from './LeaderboardTabs';
import Podium from './Podium';
import RankList from './RankList';
import StickyRank from './StickyRank';
import BottomNavBar from '../../components/layout/BottomNavBar';
import TopBar from '../home/TopBar';

const LeaderboardScreen = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('xp'); // 'xp' or 'streak'

    // Mock data - XP Leaderboard
    const xpLeaderboard = [
        { id: 1, name: 'Sarah Chen', avatar: '/avatar.png', xp: 2000, streak: 45 },
        { id: 2, name: 'Mike Johnson', avatar: '/avatar.png', xp: 1850, streak: 30 },
        { id: 3, name: 'Emily Davis', avatar: '/avatar.png', xp: 1700, streak: 28 },
        { id: 4, name: 'David Lee', avatar: '/avatar.png', xp: 1650, streak: 25 },
        { id: 5, name: 'Lisa Wang', avatar: '/avatar.png', xp: 1500, streak: 22 },
        { id: 6, name: 'James Wilson', avatar: '/avatar.png', xp: 1400, streak: 20 },
        { id: 7, name: 'Anna Martinez', avatar: '/avatar.png', xp: 1300, streak: 18 },
        { id: 8, name: 'Tom Brown', avatar: '/avatar.png', xp: 1200, streak: 15 },
        { id: 9, name: 'Sophie Taylor', avatar: '/avatar.png', xp: 1100, streak: 12 },
        { id: 10, name: 'Chris Anderson', avatar: '/avatar.png', xp: 1000, streak: 10 },
        { id: 11, name: 'Maria Garcia', avatar: '/avatar.png', xp: 950, streak: 8 },
        { id: 12, name: 'Kevin Zhang', avatar: '/avatar.png', xp: 900, streak: 7 },
        { id: 13, name: 'Nina Patel', avatar: '/avatar.png', xp: 850, streak: 6 },
        { id: 14, name: 'Ryan Kim', avatar: '/avatar.png', xp: 800, streak: 5 },
    ];

    // Mock data - Streak Leaderboard
    const streakLeaderboard = [
        { id: 1, name: 'Streak King', avatar: '/avatar.png', xp: 1500, streak: 365 },
        { id: 2, name: 'Daily Learner', avatar: '/avatar.png', xp: 1400, streak: 200 },
        { id: 3, name: 'Consistent Pro', avatar: '/avatar.png', xp: 1300, streak: 150 },
        { id: 4, name: 'Sarah Chen', avatar: '/avatar.png', xp: 2000, streak: 45 },
        { id: 5, name: 'Mike Johnson', avatar: '/avatar.png', xp: 1850, streak: 30 },
        { id: 6, name: 'Emily Davis', avatar: '/avatar.png', xp: 1700, streak: 28 },
        { id: 7, name: 'David Lee', avatar: '/avatar.png', xp: 1650, streak: 25 },
        { id: 8, name: 'Lisa Wang', avatar: '/avatar.png', xp: 1500, streak: 22 },
        { id: 9, name: 'James Wilson', avatar: '/avatar.png', xp: 1400, streak: 20 },
        { id: 10, name: 'Anna Martinez', avatar: '/avatar.png', xp: 1300, streak: 18 },
        { id: 11, name: 'Tom Brown', avatar: '/avatar.png', xp: 1200, streak: 15 },
        { id: 12, name: 'Sophie Taylor', avatar: '/avatar.png', xp: 1100, streak: 12 },
        { id: 13, name: 'Chris Anderson', avatar: '/avatar.png', xp: 1000, streak: 10 },
        { id: 14, name: 'Maria Garcia', avatar: '/avatar.png', xp: 950, streak: 8 },
    ];

    // Current user (rank 15)
    const currentUser = {
        id: 15,
        name: 'You',
        avatar: '/avatar.png',
        xp: 450,
        streak: 5
    };

    const currentLeaderboard = activeTab === 'xp' ? xpLeaderboard : streakLeaderboard;
    const topThree = currentLeaderboard.slice(0, 3);
    const restOfList = currentLeaderboard.slice(3);

    const handleTabChange = (newActiveTab) => {
        setActiveTab(newActiveTab);
    };

    return (
        <div className="h-full flex flex-col overflow-hidden bg-white relative">
            {/* Top Bar */}
            <TopBar />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pt-[70px] pb-40">
                {/* Header */}
                <div className="text-center py-6 px-6">
                    <h1 className="text-2xl font-black text-gray-800 mb-1">
                        Leaderboard
                    </h1>
                    <p className="text-xs text-gray-500">
                        Compete with learners worldwide
                    </p>
                </div>

                {/* Tabs */}
                <LeaderboardTabs activeTab={activeTab} onTabChange={handleTabChange} />

                {/* Podium - Top 3 */}
                <Podium topThree={topThree} mode={activeTab} />

                {/* Divider */}
                <div className="h-px bg-gray-200 mx-6 mb-4" />

                {/* Rank List - 4+ */}
                <RankList users={restOfList} mode={activeTab} startRank={4} />

                {/* Current User Row */}
                <div className="mt-2">
                    <StickyRank user={currentUser} rank={15} mode={activeTab} />
                </div>
            </div>

            {/* Bottom Navigation - FIXED */}
            <BottomNavBar activeTab="rank" onTabChange={onNavigate} />
        </div>
    );
};

export default LeaderboardScreen;
