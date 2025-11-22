import React, { useState } from 'react';
import TopBar from '../home/TopBar';
import UnitCard from './UnitCard';
import BottomNavBar from '../../components/layout/BottomNavBar';

const MapScreen = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('map');

    // Mock data for units and lessons with detailed info
    const unitsData = [
        {
            id: 1,
            title: 'Basics',
            color: 'blue',
            lessons: [
                { id: 'l1-1', number: '1', status: 'completed', title: 'Hello & Goodbye', description: 'Learn basic greetings' },
                { id: 'l1-2', number: '2', status: 'completed', title: 'Yes & No', description: 'Agree and disagree' },
                { id: 'l1-3', number: '3', status: 'completed', title: 'Review: Greetings', description: 'Practice what you learned' },
                { id: 'l1-4', number: '4', status: 'completed', title: 'Thank You', description: 'Express gratitude' },
                { id: 'l1-5', number: '5', status: 'current', title: 'Food & Drink', description: 'Talk about meals' },
                { id: 'l1-6', number: '6', status: 'locked', title: 'Animals', description: 'Name common animals' },
                { id: 'l1-7', number: '7', status: 'locked', title: 'Colors', description: 'Describe colors' },
                { id: 'l1-8', number: '8', status: 'locked', title: 'Numbers 1-10', description: 'Count to ten' },
                { id: 'l1-9', number: '9', status: 'locked', title: 'Family', description: 'Talk about relatives' },
                { id: 'l1-10', number: '10', status: 'locked', title: 'Review: Basics', description: 'Unit checkpoint' },
                { id: 'l1-11', number: '11', status: 'locked', title: 'Bonus: Culture', description: 'Learn customs' },
                { id: 'l1-12', number: '12', status: 'locked', title: 'Unit Test', description: 'Final assessment' },
            ],
        },
        {
            id: 2,
            title: 'Common Phrases',
            color: 'green',
            lessons: [
                { id: 'l2-1', number: '13', status: 'locked', title: 'Where is...?', description: 'Ask for directions' },
                { id: 'l2-2', number: '14', status: 'locked', title: 'How much?', description: 'Shopping phrases' },
                { id: 'l2-3', number: '15', status: 'locked', title: 'I need...', description: 'Express needs' },
                { id: 'l2-4', number: '16', status: 'locked', title: 'Time & Date', description: 'Tell time' },
                { id: 'l2-5', number: '17', status: 'locked', title: 'Weather', description: 'Describe weather' },
                { id: 'l2-6', number: '18', status: 'locked', title: 'Review', description: 'Practice phrases' },
                { id: 'l2-7', number: '19', status: 'locked', title: 'Hobbies', description: 'Talk about interests' },
                { id: 'l2-8', number: '20', status: 'locked', title: 'Unit Test', description: 'Assessment' },
            ],
        },
        {
            id: 3,
            title: 'Conversations',
            color: 'purple',
            lessons: [
                { id: 'l3-1', number: '21', status: 'locked', title: 'At Restaurant', description: 'Order food' },
                { id: 'l3-2', number: '22', status: 'locked', title: 'At Hotel', description: 'Check in/out' },
                { id: 'l3-3', number: '23', status: 'locked', title: 'Meeting People', description: 'Introductions' },
                { id: 'l3-4', number: '24', status: 'locked', title: 'Phone Call', description: 'Basic calling' },
                { id: 'l3-5', number: '25', status: 'locked', title: 'Review', description: 'Practice dialogs' },
                { id: 'l3-6', number: '26', status: 'locked', title: 'Unit Test', description: 'Final test' },
            ],
        },
    ];

    const handleLessonClick = (lessonId) => {
        console.log('Starting lesson:', lessonId);
        // TODO: Navigate to lesson screen
    };

    const handleTabChange = (tab) => {
        console.log('Navigating to:', tab);
        setActiveTab(tab);
        if (onNavigate) {
            onNavigate(tab === 'home' ? 'dashboard' : tab);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#F9FAFB] overflow-hidden">
            {/* Top Bar */}
            <TopBar streak={3} gems={250} hearts={5} />

            {/* Main Content - Scrollable Path */}
            <div className="px-6 pt-[80px] pb-32 overflow-y-auto">
                <h1 className="text-[28px] font-bold text-[#1a1a1a] mb-6">
                    Learning Path
                </h1>

                {/* Render all units */}
                {unitsData.map((unit, index) => (
                    <UnitCard
                        key={unit.id}
                        unitNumber={unit.id}
                        title={unit.title}
                        color={unit.color}
                        lessons={unit.lessons}
                        onStartLesson={handleLessonClick}
                        isActive={index === 0}
                    />
                ))}
            </div>

            {/* Bottom Navigation Bar */}
            <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
};

export default MapScreen;
