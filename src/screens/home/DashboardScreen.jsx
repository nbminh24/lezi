import React, { useState } from 'react';
import TopBar from './TopBar';
import DailyProgressCard from './DailyProgressCard';
import StreakStrip from './StreakStrip';
import CurrentLessonCard from './CurrentLessonCard';
import BottomNavBar from '../../components/layout/BottomNavBar';

const DashboardScreen = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('home');

    const handleStartLesson = () => {
        console.log('Starting lesson...');
        // TODO: Navigate to lesson screen
    };

    const handleViewPath = () => {
        console.log('Viewing learning path...');
        onNavigate('map');
    };

    const handleTabChange = (tab) => {
        console.log('Navigating to:', tab);
        setActiveTab(tab);
        if (onNavigate) {
            onNavigate(tab);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#F9FAFB] overflow-hidden">
            {/* Top Bar with Stats */}
            <TopBar streak={3} gems={250} hearts={5} />

            {/* Main Content - Bento Grid with padding for fixed header and navbar */}
            <div className="px-6 pt-[80px] pb-32 space-y-6 overflow-y-auto">
                {/* Hero: Daily Progress */}
                <DailyProgressCard
                    currentXP={15}
                    goalXP={20}
                    userName="Minh"
                />

                {/* Streak Calendar */}
                <StreakStrip currentStreak={3} />

                {/* Current Lesson Action */}
                <CurrentLessonCard
                    unit="Basics 1"
                    lessonTitle="Lesson 3: Greetings"
                    onStartLesson={handleStartLesson}
                    onViewPath={handleViewPath}
                />

                {/* Additional Cards can go here */}
                {/* e.g., Achievement badges, Friends activity, etc. */}
            </div>

            {/* Bottom Navigation Bar (Floating Island) */}
            <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
};

export default DashboardScreen;
