import React from 'react';

const SoftButton = ({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  fullWidth = true,
  disabled = false
}) => {
  // Disabled state (consistent across all uses)
  if (disabled) {
    return (
      <button
        disabled
        className={`
                    ${fullWidth ? 'w-full' : ''}
                    px-6 py-4
                    rounded-full
                    font-semibold text-[15px] tracking-tight
                    flex items-center justify-center gap-3
                    bg-[#D1D5DB] text-white
                    cursor-not-allowed
                    opacity-60
                `}
      >
        {Icon && <Icon size={20} strokeWidth={2} />}
        {children}
      </button>
    );
  }

  // Enabled state variants
  const variants = {
    primary: `
            bg-gradient-to-r from-blue-500 to-blue-600
            text-white 
            shadow-[0_4px_16px_rgba(59,130,246,0.25)]
            hover:shadow-[0_6px_20px_rgba(59,130,246,0.35)]
            active:scale-95
        `,
    secondary: `
            bg-white text-[#1a1a1a] 
            border-[0.5px] border-[#E5E5E5]
            shadow-[0_2px_8px_rgba(0,0,0,0.08)]
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
            active:scale-95
        `,
    google: `
            bg-white text-[#1a1a1a] 
            border-[1px] border-[#E5E5E5]
            shadow-[0_2px_8px_rgba(0,0,0,0.08)]
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
            active:scale-95
        `
  };

  return (
    <button
      onClick={onClick}
      className={`
                ${fullWidth ? 'w-full' : ''}
                px-6 py-4
                rounded-full
                font-semibold text-[15px] tracking-tight
                flex items-center justify-center gap-3
                transition-all duration-200
                ${variants[variant]}
            `}
    >
      {Icon && <Icon size={20} strokeWidth={2} />}
      {children}
    </button>
  );
};

export default SoftButton;
