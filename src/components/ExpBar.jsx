import React from 'react';

const ExpBar = () => {
    // Generate 24 segments for the visualizer
    const totalSegments = 24;
    const activeSegments = 14; // First 14 are colored

    // Gradient colors: Purple -> Pink -> Red -> Orange -> Yellow -> Green
    const gradientColors = [
        '#8B5CF6', '#9333EA', '#A855F7', '#C026D3', '#D946EF',
        '#E11D48', '#F43F5E', '#FB923C', '#F97316', '#FB923C',
        '#FBBF24', '#FCD34D', '#84CC16', '#65A30D'
    ];

    return (
        <div className="flex items-center gap-2 ml-6 mt-3">
            <span className="text-[12px] font-medium text-[#8e8e93]">exp.</span>
            <div className="flex items-center gap-[2px]">
                {Array.from({ length: totalSegments }).map((_, index) => {
                    const isActive = index < activeSegments;
                    const color = isActive ? gradientColors[index] : '#E5E5E5';

                    return (
                        <div
                            key={index}
                            className="w-[3px] h-[10px] rounded-full"
                            style={{
                                backgroundColor: color,
                                opacity: isActive ? 1 : 0.4
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ExpBar;
