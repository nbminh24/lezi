import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const DialogueScreen = ({ onBack, onComplete }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'
    const [showMessage, setShowMessage] = useState(false);

    // Mock data
    const incomingMessage = "Hello! How are you today?";
    const options = [
        { id: 1, text: 'I am fine, thanks!', isCorrect: true },
        { id: 2, text: 'I am a bear.', isCorrect: false },
        { id: 3, text: 'Goodbye.', isCorrect: false },
    ];

    // Animate Lezi's message on mount
    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 300);
    }, []);

    const handleOptionClick = (option) => {
        if (status === 'idle') {
            setSelectedOption(option);
        }
    };

    const handleCheck = () => {
        if (selectedOption?.isCorrect) {
            console.log('✅ Good response!');
            setStatus('correct');
        } else {
            console.log('❌ Not the best response!');
            setStatus('wrong');
        }
    };

    const handleContinue = () => {
        const wasCorrect = status === 'correct';

        // Reset
        setStatus('idle');
        setSelectedOption(null);
        setShowMessage(false);

        // Re-animate message
        setTimeout(() => {
            setShowMessage(true);
        }, 300);

        // Notify parent
        if (onComplete) {
            onComplete(wasCorrect);
        }
    };

    const getCorrectAnswer = () => {
        const correct = options.find(opt => opt.isCorrect);
        return correct?.text;
    };

    return (
        <div className="relative min-h-screen bg-[#F9FAFB] flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-40 h-[70px] bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="flex items-center justify-between h-full px-6">
                    <button
                        onClick={onBack}
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                    >
                        <ArrowLeft size={20} weight="bold" className="text-gray-700" />
                    </button>

                    {/* Progress indicator */}
                    <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-[280px] overflow-y-auto">
                {/* Question Bubble */}
                <div className="mb-6">
                    <div className="flex items-start gap-3">
                        {/* Mascot Avatar */}
                        <img
                            src="/avatar.png"
                            alt="Lezi"
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md flex-shrink-0"
                        />

                        {/* Speech Bubble */}
                        <div className="flex-1 bg-white rounded-3xl rounded-tl-sm px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                            <p className="text-[18px] font-semibold text-[#1a1a1a]">
                                <span className="text-blue-600 font-bold">Reply to Lezi!</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chat Area (Messenger-style) */}
                <div className="bg-white rounded-3xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] min-h-[300px] flex flex-col justify-center">
                    {/* Incoming Message from Lezi */}
                    <div className={`flex items-start gap-3 mb-4 transition-all duration-500 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Avatar */}
                        <img
                            src="/avatar.png"
                            alt="Lezi"
                            className="w-10 h-10 rounded-full flex-shrink-0"
                        />

                        {/* Message Bubble */}
                        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                            <p className="text-[16px] text-gray-800 font-medium">
                                {incomingMessage}
                            </p>
                        </div>
                    </div>

                    {/* User Reply Slot */}
                    <div className="flex items-start gap-3 justify-end">
                        <div className={`
              rounded-2xl rounded-tr-none p-4 max-w-[80%]
              transition-all duration-300
              ${selectedOption
                                ? 'bg-blue-500 text-white shadow-lg animate-slideIn'
                                : 'bg-blue-50 border-2 border-dashed border-blue-200 text-blue-400 min-w-[120px] flex items-center justify-center'
                            }
            `}>
                            <p className="text-[16px] font-medium">
                                {selectedOption ? selectedOption.text : '?'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Options Area (Smart Reply Chips) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 pb-8">
                <p className="text-[13px] font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    Choose your reply
                </p>

                <div className="space-y-3 mb-4">
                    {options.map((option) => {
                        const isSelected = selectedOption?.id === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                disabled={status !== 'idle'}
                                className={`
                  w-full rounded-xl p-4
                  text-left text-[16px] font-medium
                  transition-all duration-200
                  ${isSelected
                                        ? 'bg-blue-50 border-2 border-blue-400 border-b-[4px] border-b-blue-500 text-blue-700 shadow-[0_4px_0_0_#3b82f6]'
                                        : 'bg-white border-2 border-gray-100 border-b-[4px] border-b-gray-200 text-gray-700 shadow-[0_4px_0_0_#e5e7eb] hover:border-gray-200'
                                    }
                  ${status !== 'idle' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer active:border-b-0 active:shadow-none active:translate-y-[4px]'}
                `}
                            >
                                {option.text}
                            </button>
                        );
                    })}
                </div>

                {/* Check Button */}
                <button
                    onClick={handleCheck}
                    disabled={!selectedOption || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${selectedOption && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {selectedOption ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Check</span>
                        </div>
                    ) : (
                        <span>Choose a reply</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Natural response!' : null}
                correctAnswer={status === 'wrong' ? getCorrectAnswer() : null}
                onContinue={handleContinue}
            />

            <style jsx>{`
        @keyframes slideIn {
          from { 
            transform: translateX(20px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default DialogueScreen;
