import React from 'react';

const Avatar = () => {
    return (
        <div className="relative z-10 w-[140px] h-[140px] ml-6">
            {/* Thick White Border Ring - iOS 26 Style */}
            <div className="w-full h-full rounded-full bg-white p-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                {/* Avatar Image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    <img
                        src="/avatar.png"
                        alt="Noah Thompson"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Avatar;
