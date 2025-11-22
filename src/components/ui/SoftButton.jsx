import React from 'react';

const SoftButton = ({
    children,
    onClick,
    variant = 'primary',
    icon: Icon,
    fullWidth = true,
    disabled = false
}) => {
    const variants = {
        primary: `
      bg-[#1a1a1a] text-white 
      shadow-[0_4px_12px_rgba(0,0,0,0.15)]
      hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]
    `,
        secondary: `
      bg-white text-[#1a1a1a] 
      border-[0.5px] border-[#E5E5E5]
      shadow-[0_2px_8px_rgba(0,0,0,0.08)]
      hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
    `,
        google: `
      bg-white text-[#1a1a1a] 
      border-[1px] border-[#E5E5E5]
      shadow-[0_2px_8px_rgba(0,0,0,0.08)]
      hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
    `
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        ${fullWidth ? 'w-full' : ''}
        px-6 py-4
        rounded-full
        font-semibold text-[15px] tracking-tight
        flex items-center justify-center gap-3
        transition-all duration-200
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
      `}
        >
            {Icon && <Icon size={20} strokeWidth={2} />}
            {children}
        </button>
    );
};

export default SoftButton;
