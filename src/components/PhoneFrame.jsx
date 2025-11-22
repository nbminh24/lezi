import React from 'react';

const PhoneFrame = ({ children }) => {
    return (
        <div className="flex items-center justify-center w-full h-full p-8">
            {/* iPhone 16 Pro Max Container */}
            <div
                className="relative bg-black rounded-[42px] shadow-phone"
                style={{
                    aspectRatio: '1290 / 2796',
                    width: 'auto',
                    height: '85vh',
                    maxHeight: '800px',
                }}
            >
                {/* Device bezel */}
                <div className="absolute inset-0 rounded-[42px] overflow-hidden">
                    {/* Inner screen container with padding for bezel */}
                    <div className="absolute inset-[12px] bg-[#F9FAFB] rounded-[36px] overflow-hidden">
                        {/* Dynamic Island */}
                        <div
                            className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-50"
                            style={{
                                width: '110px',
                                height: '32px',
                            }}
                        />

                        {/* Screen Content */}
                        <div className="w-full h-full overflow-hidden rounded-[36px]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneFrame;
