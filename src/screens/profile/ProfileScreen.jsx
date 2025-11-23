import React from 'react';
import { Gear, Flame, Lightning, Trophy, PencilSimple, Medal, SignOut } from 'phosphor-react';
import BottomNavBar from '../../components/layout/BottomNavBar';

const ProfileScreen = ({ onNavigate }) => {
    const handleMenuClick = (item) => {
        if (item === 'achievements') {
            onNavigate('achievements');
        } else if (item === 'settings') {
            onNavigate('settings');
        } else {
            console.log('Menu clicked:', item);
        }
    };

    return (
        <div className="h-full flex flex-col bg-white relative overflow-hidden">
            {/* Header with Settings */}
            <div className="absolute top-0 left-0 right-0 z-10 px-6 pt-6 flex justify-end">
                <button
                    onClick={() => handleMenuClick('settings')}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <Gear size={22} className="text-gray-700" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-24 pt-16">
                {/* Avatar Section */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        {/* Avatar with white border */}
                        <div className="w-32 h-32 rounded-full bg-white p-1 shadow-lg">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src="/avatar.png"
                                    alt="Noah Thompson"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Flag Badge */}
                        <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
                            🇺🇸
                        </div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className="px-6 text-center">
                    <h1 className="font-bold text-2xl tracking-tight text-gray-900 mb-1">
                        Noah Thompson
                    </h1>
                    <p className="text-sm text-gray-500">
                        Level 7 • English Learner
                    </p>
                </div>

                {/* Stats Row */}
                <div className="mt-8 grid grid-cols-3 border-t border-b border-gray-200 mx-6">
                    {/* Streak */}
                    <div className="py-6 text-center border-r border-gray-200">
                        <div className="flex justify-center mb-2">
                            <Flame size={24} weight="fill" className="text-orange-500" />
                        </div>
                        <div className="font-bold text-xl text-gray-900 mb-1">
                            12
                        </div>
                        <div className="font-medium text-xs text-gray-500">
                            Day Streak
                        </div>
                    </div>

                    {/* Total XP */}
                    <div className="py-6 text-center border-r border-gray-200">
                        <div className="flex justify-center mb-2">
                            <Lightning size={24} weight="fill" className="text-yellow-500" />
                        </div>
                        <div className="font-bold text-xl text-gray-900 mb-1">
                            1450
                        </div>
                        <div className="font-medium text-xs text-gray-500">
                            Total XP
                        </div>
                    </div>

                    {/* League */}
                    <div className="py-6 text-center">
                        <div className="flex justify-center mb-2">
                            <Trophy size={24} weight="fill" className="text-blue-500" />
                        </div>
                        <div className="font-bold text-xl text-gray-900 mb-1">
                            Silver
                        </div>
                        <div className="font-medium text-xs text-gray-500">
                            League
                        </div>
                    </div>
                </div>

                {/* Menu List */}
                <div className="mt-6 px-6 space-y-2">
                    {/* Edit Profile */}
                    <button
                        onClick={() => handleMenuClick('edit')}
                        className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <PencilSimple size={20} className="text-blue-600" weight="bold" />
                        </div>
                        <span className="flex-1 text-left font-semibold text-gray-900">Edit Profile</span>
                    </button>

                    {/* My Achievements */}
                    <button
                        onClick={() => handleMenuClick('achievements')}
                        className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Medal size={20} className="text-yellow-600" weight="fill" />
                        </div>
                        <span className="flex-1 text-left font-semibold text-gray-900">My Achievements</span>
                    </button>

                    {/* Log Out */}
                    <button
                        onClick={() => handleMenuClick('logout')}
                        className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <SignOut size={20} className="text-red-600" weight="bold" />
                        </div>
                        <span className="flex-1 text-left font-semibold text-red-600">Log Out</span>
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavBar activeTab="profile" onTabChange={onNavigate} />
        </div>
    );
};

export default ProfileScreen;
