import React from 'react';
import TopCard from './TopCard';
import Avatar from './Avatar';
import ExpBar from './ExpBar';
import ProfileInfo from './ProfileInfo';
import StatsRow from './StatsRow';
import BottomNav from './BottomNav';

const ProfileCard = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col pt-6 rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
            {/* Top section with card and avatar */}
            <div className="px-5">
                <TopCard />
                <Avatar />
                <ExpBar />
            </div>

            {/* Profile information */}
            <ProfileInfo />

            {/* Stats row */}
            <StatsRow />

            {/* Spacer to push bottom nav down */}
            <div className="flex-1" />

            {/* Bottom navigation */}
            <BottomNav />
        </div>
    );
};

export default ProfileCard;
