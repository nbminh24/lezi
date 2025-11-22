import React from 'react';
import { Plus } from 'lucide-react';

const TopCard = () => {
    return (
        <div className="relative w-full h-[240px] mb-[-70px]">
            {/* Clean Sky Background Card - iOS 26 Style */}
            <div
                className="w-full h-full rounded-[36px] overflow-hidden shadow-diffuse"
                style={{
                    background: 'linear-gradient(180deg, #b8d4eb 0%, #d9e9f5 100%)',
                }}
            />

            {/* Follow Button - iOS 26 Soft Style */}
            <button className="absolute top-5 right-5 bg-white px-6 py-2.5 rounded-full shadow-soft flex items-center gap-2 hover:scale-[1.02] transition-all duration-200">
                <span className="text-black font-medium text-[15px] tracking-tight">Follow</span>
                <Plus size={18} strokeWidth={2.5} className="text-black" />
            </button>
        </div>
    );
};

export default TopCard;
