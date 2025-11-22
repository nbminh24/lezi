import React from 'react';

const SoftInput = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    icon: Icon
}) => {
    return (
        <div className="relative w-full">
            {Icon && (
                <Icon
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]"
                    size={20}
                    strokeWidth={2}
                />
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
          w-full px-5 py-4 
          ${Icon ? 'pl-14' : 'pl-5'}
          bg-[#F3F4F6] 
          rounded-full 
          text-[15px] font-medium text-[#1a1a1a]
          placeholder:text-[#9CA3AF]
          outline-none
          transition-all duration-200
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/30
          focus:bg-white
        `}
            />
        </div>
    );
};

export default SoftInput;
