import React from 'react';
import { Lock, Crown, Star } from 'phosphor-react';

const MapNode = ({ status = 'locked', lessonNumber, onClick, showMascot = false }) => {
    const getNodeStyles = () => {
        switch (status) {
            case 'completed':
                return {
                    bg: 'bg-yellow-400',
                    border: 'border-b-4 border-yellow-600',
                    icon: Crown,
                    iconColor: 'text-yellow-700',
                    shadow: 'shadow-[0_4px_0_0_#ca8a04]',
                };
            case 'current':
                return {
                    bg: 'bg-blue-500',
                    border: 'border-b-6 border-blue-700',
                    icon: Star,
                    iconColor: 'text-white',
                    shadow: 'shadow-[0_6px_0_0_#1e40af]',
                    animation: 'animate-bounce',
                };
            case 'locked':
            default:
                return {
                    bg: 'bg-gray-200',
                    border: 'border-b-4 border-gray-300',
                    icon: Lock,
                    iconColor: 'text-gray-400',
                    shadow: 'shadow-[0_4px_0_0_#d1d5db]',
                };
        }
    };

    const styles = getNodeStyles();
    const Icon = styles.icon;
    const isInteractive = status === 'current' || status === 'completed';

    return (
        <div className="relative flex flex-col items-center">
            {/* Mascot floating above current node */}
            {showMascot && status === 'current' && (
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <img
                        src="/avatar.png"
                        alt="Lezi"
                        className="w-16 h-16 rounded-full border-3 border-white shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    />
                </div>
            )}

            {/* Node Button */}
            <button
                onClick={isInteractive ? onClick : undefined}
                disabled={!isInteractive}
                className={`
          relative
          w-20 h-20 rounded-full
          flex items-center justify-center
          transition-all duration-200
          ${styles.bg}
          ${styles.border}
          ${styles.shadow}
          ${styles.animation || ''}
          ${isInteractive ? 'hover:scale-105 active:scale-95 cursor-pointer' : 'cursor-not-allowed'}
        `}
            >
                <Icon
                    size={32}
                    weight={status === 'current' ? 'fill' : 'bold'}
                    className={styles.iconColor}
                />
            </button>

            {/* Lesson Number */}
            <span className="mt-2 text-[12px] font-bold text-gray-600">
                {lessonNumber}
            </span>
        </div>
    );
};

export default MapNode;
