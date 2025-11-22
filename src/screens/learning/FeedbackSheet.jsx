import React from 'react';
import { CheckCircle, XCircle } from 'phosphor-react';

const FeedbackSheet = ({ status, message, correctAnswer, onContinue }) => {
    if (status === 'idle') return null;

    const isCorrect = status === 'correct';

    const config = {
        correct: {
            bg: 'bg-green-100',
            text: 'text-green-700',
            icon: CheckCircle,
            iconColor: 'text-green-600',
            buttonBg: 'bg-green-500',
            buttonBorder: 'border-b-6 border-green-700',
            buttonShadow: 'shadow-[0_6px_0_0_#15803d]',
            title: 'Awesome!',
        },
        wrong: {
            bg: 'bg-red-100',
            text: 'text-red-700',
            icon: XCircle,
            iconColor: 'text-red-600',
            buttonBg: 'bg-red-500',
            buttonBorder: 'border-b-6 border-red-700',
            buttonShadow: 'shadow-[0_6px_0_0_#b91c1c]',
            title: 'Not quite',
        },
    };

    const style = isCorrect ? config.correct : config.wrong;
    const Icon = style.icon;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/20 z-40 animate-fadeIn"
                onClick={onContinue}
            />

            {/* Feedback Sheet */}
            <div
                className={`
          fixed bottom-0 left-0 right-0 z-50
          ${style.bg}
          rounded-t-[32px] px-5 py-4 pb-8
          shadow-[0_-8px_32px_rgba(0,0,0,0.12)]
          animate-slideUp
        `}
            >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                    <Icon size={28} weight="fill" className={style.iconColor} />
                    <h2 className={`text-lg font-bold ${style.text}`}>
                        {style.title}
                    </h2>
                </div>

                {/* Body: Message */}
                <div className="mb-3">
                    {message && (
                        <p className={`text-[15px] font-medium ${style.text} mb-1.5`}>
                            {message}
                        </p>
                    )}
                    {!isCorrect && correctAnswer && (
                        <p className={`text-[13px] ${style.text} opacity-80`}>
                            Correct answer: <span className="font-bold">{correctAnswer}</span>
                        </p>
                    )}
                </div>

                {/* Button */}
                <button
                    onClick={onContinue}
                    className={`
            w-full h-12 rounded-full
            ${style.buttonBg}
            ${style.buttonBorder}
            ${style.buttonShadow}
            text-white font-bold text-[15px]
            transition-all duration-200
            hover:brightness-110
            active:border-b-2 active:shadow-[0_2px_0_0_#15803d] active:translate-y-[4px]
          `}
                >
                    {isCorrect ? 'Continue' : 'Got it'}
                </button>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            transform: translateY(100%);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
        </>
    );
};

export default FeedbackSheet;
