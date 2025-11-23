import React, { useState } from 'react';
import { ArrowLeft, SpeakerHigh, Vibrate, Bell, User, LockKey, Question, ShieldCheck, CaretRight } from 'phosphor-react';

const SettingsScreen = ({ onBack }) => {
    const [soundEffects, setSoundEffects] = useState(true);
    const [hapticFeedback, setHapticFeedback] = useState(true);
    const [dailyReminder, setDailyReminder] = useState(false);

    const handleNavigation = (screen) => {
        console.log('Navigate to:', screen);
    };

    const handleDeleteAccount = () => {
        console.log('Delete account clicked');
    };

    return (
        <div className="h-full flex flex-col bg-gray-50 relative overflow-hidden">
            {/* Header */}
            <div className="bg-white px-6 pt-6 pb-4 border-b border-gray-100">
                <button
                    onClick={onBack}
                    className="mb-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <ArrowLeft size={20} className="text-gray-700" weight="bold" />
                </button>
                <h1 className="text-3xl font-black text-gray-900">
                    Settings
                </h1>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-6">
                {/* Preferences Section */}
                <div className="mb-6 mx-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">
                        Preferences
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Sound Effects */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <SpeakerHigh size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Sound Effects</span>
                            </div>
                            <button
                                onClick={() => setSoundEffects(!soundEffects)}
                                className={`
                  relative w-12 h-7 rounded-full transition-colors duration-200 ease-in-out
                  ${soundEffects ? 'bg-blue-500' : 'bg-gray-200'}
                `}
                            >
                                <span
                                    className={`
                    absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md
                    transition-transform duration-200 ease-in-out
                    ${soundEffects ? 'translate-x-5' : 'translate-x-0'}
                  `}
                                />
                            </button>
                        </div>

                        {/* Haptic Feedback */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <Vibrate size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Haptic Feedback</span>
                            </div>
                            <button
                                onClick={() => setHapticFeedback(!hapticFeedback)}
                                className={`
                  relative w-12 h-7 rounded-full transition-colors duration-200 ease-in-out
                  ${hapticFeedback ? 'bg-blue-500' : 'bg-gray-200'}
                `}
                            >
                                <span
                                    className={`
                    absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md
                    transition-transform duration-200 ease-in-out
                    ${hapticFeedback ? 'translate-x-5' : 'translate-x-0'}
                  `}
                                />
                            </button>
                        </div>

                        {/* Daily Reminder */}
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <Bell size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Daily Reminder</span>
                            </div>
                            <button
                                onClick={() => setDailyReminder(!dailyReminder)}
                                className={`
                  relative w-12 h-7 rounded-full transition-colors duration-200 ease-in-out
                  ${dailyReminder ? 'bg-blue-500' : 'bg-gray-200'}
                `}
                            >
                                <span
                                    className={`
                    absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md
                    transition-transform duration-200 ease-in-out
                    ${dailyReminder ? 'translate-x-5' : 'translate-x-0'}
                  `}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Account Section */}
                <div className="mb-6 mx-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">
                        Account
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Edit Personal Info */}
                        <button
                            onClick={() => handleNavigation('editProfile')}
                            className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <User size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Edit Personal Info</span>
                            </div>
                            <CaretRight size={20} className="text-gray-400" weight="bold" />
                        </button>

                        {/* Change Password */}
                        <button
                            onClick={() => handleNavigation('changePassword')}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <LockKey size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Change Password</span>
                            </div>
                            <CaretRight size={20} className="text-gray-400" weight="bold" />
                        </button>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mb-6 mx-4">
                    <h2 className="text-xs font-bold text-gray-400 uppercase mb-3 px-1">
                        Support
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        {/* Help Center */}
                        <button
                            onClick={() => handleNavigation('helpCenter')}
                            className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Question size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Help Center</span>
                            </div>
                            <CaretRight size={20} className="text-gray-400" weight="bold" />
                        </button>

                        {/* Privacy Policy */}
                        <button
                            onClick={() => handleNavigation('privacyPolicy')}
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <ShieldCheck size={22} className="text-gray-600" weight="bold" />
                                <span className="font-semibold text-gray-900">Privacy Policy</span>
                            </div>
                            <CaretRight size={20} className="text-gray-400" weight="bold" />
                        </button>
                    </div>
                </div>

                {/* App Info */}
                <div className="mb-6 mx-4">
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <div className="flex items-center justify-between p-4">
                            <span className="font-semibold text-gray-900">App Version</span>
                            <span className="text-sm text-gray-500 font-medium">v1.0.0</span>
                        </div>
                    </div>
                </div>

                {/* Delete Account */}
                <div className="mx-4 mb-6">
                    <button
                        onClick={handleDeleteAccount}
                        className="w-full p-4 text-center font-semibold text-red-600 hover:bg-red-50 rounded-2xl transition-colors"
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
