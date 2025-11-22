import React from 'react';

const StatsRow = () => {
    const stats = [
        { value: '72.9K', label: 'Likes' },
        { value: '828', label: 'Posts' },
        { value: '342.9K', label: 'Views' }
    ];

    return (
        <div className="mt-8 grid grid-cols-3 border-t-[0.5px] border-b-[0.5px] border-[#E5E5E5]">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`py-6 text-center ${index < stats.length - 1 ? 'border-r-[0.5px] border-[#E5E5E5]' : ''
                        }`}
                >
                    <div className="font-bold text-[20px] text-black mb-1">
                        {stat.value}
                    </div>
                    <div className="font-medium text-[13px] text-[#8e8e93]">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsRow;
