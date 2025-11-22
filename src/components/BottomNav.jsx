import React from 'react';
import { Instagram, AtSign } from 'lucide-react';

const BottomNav = () => {
    // Custom X (Twitter) Icon with thinner stroke
    const XIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
    );

    const socialLinks = [
        { icon: <Instagram size={24} strokeWidth={1.5} />, name: 'Instagram' },
        { icon: <XIcon />, name: 'X' },
        { icon: <AtSign size={24} strokeWidth={1.5} />, name: 'Threads' }
    ];

    return (
        <div className="border-t-[0.5px] border-[#E5E5E5] bg-white rounded-b-[36px]">
            <div className="grid grid-cols-3 py-5">
                {socialLinks.map((link, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center ${index < socialLinks.length - 1 ? 'border-r-[0.5px] border-[#E5E5E5]' : ''
                            }`}
                    >
                        <button className="text-black hover:scale-110 transition-transform duration-200">
                            {link.icon}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
