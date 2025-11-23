import React, { useState } from 'react';
import { Camera } from 'phosphor-react';

const EditProfileScreen = ({ onBack, onSave }) => {
    const [name, setName] = useState('Noah Thompson');
    const [username, setUsername] = useState('noah_t');
    const [bio, setBio] = useState('Learning English step by step!');

    const handleSave = () => {
        console.log('Saving profile:', { name, username, bio });
        if (onSave) {
            onSave({ name, username, bio });
        }
    };

    const handleChangePhoto = () => {
        console.log('Change photo clicked');
    };

    return (
        <div className="h-full flex flex-col bg-white relative">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <button
                    onClick={onBack}
                    className="text-gray-500 font-semibold hover:text-gray-700 transition-colors"
                >
                    Cancel
                </button>
                <h1 className="text-lg font-bold text-gray-900">
                    Edit Profile
                </h1>
                <button
                    onClick={handleSave}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                    Done
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-32">
                {/* Avatar Edit Section */}
                <div className="flex flex-col items-center pt-8 pb-6">
                    {/* Avatar with Camera Badge */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 shadow-lg">
                            <img
                                src="/avatar.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Camera Button */}
                        <button
                            onClick={handleChangePhoto}
                            className="absolute bottom-0 right-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center border-4 border-white shadow-md hover:bg-blue-600 transition-colors"
                        >
                            <Camera size={20} weight="bold" />
                        </button>
                    </div>
                    {/* Change Photo Label */}
                    <button
                        onClick={handleChangePhoto}
                        className="text-blue-600 font-bold mt-3 hover:text-blue-700 transition-colors"
                    >
                        Change Photo
                    </button>
                </div>

                {/* Input Fields Section */}
                <div className="px-6 space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full h-14 bg-gray-50 rounded-2xl px-4 text-lg text-gray-800 outline-none border-2 border-transparent focus:bg-white focus:border-blue-200 focus:shadow-sm transition-all"
                        />
                    </div>

                    {/* Username Field */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                            Username
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 font-medium">
                                @
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value.replace('@', ''))}
                                placeholder="username"
                                className="w-full h-14 bg-gray-50 rounded-2xl pl-8 pr-4 text-lg text-gray-800 outline-none border-2 border-transparent focus:bg-white focus:border-blue-200 focus:shadow-sm transition-all"
                            />
                        </div>
                    </div>

                    {/* Bio / Motto Field */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                            Bio / Motto
                        </label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself..."
                            rows={4}
                            className="w-full bg-gray-50 rounded-2xl p-4 text-lg text-gray-800 outline-none border-2 border-transparent focus:bg-white focus:border-blue-200 focus:shadow-sm transition-all resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Footer - Save Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-50">
                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 text-white font-bold text-lg rounded-2xl py-4 shadow-lg border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-[6px] transition-all hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default EditProfileScreen;
