import React, { useState } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const FillBlankScreen = ({ onBack, onComplete }) => {
    const [selectedWord, setSelectedWord] = useState(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'

    // Mock data
    const sentenceParts = ['The bear', '{blank}', 'honey'];
    const options = [
        { id: 1, text: 'likes', isCorrect: true },
        { id: 2, text: 'hates', isCorrect: false },
        { id: 3, text: 'eats', isCorrect: false },
        { id: 4, text: 'drinks', isCorrect: false },
    ];

    const handleOptionClick = (option) => {
        if (status === 'idle') {
            setSelectedWord(option);
        }
    };

    const handleFilledSlotClick = () => {
        if (status === 'idle') {
            setSelectedWord(null); // Return word to bank
        }
    };

    const handleCheck = () => {
        if (selectedWord?.isCorrect) {
            console.log('✅ Correct answer!');
            setStatus('correct');
        } else {
            console.log('❌ Wrong answer!');
            setStatus('wrong');
        }
    };

    const handleContinue = () => {
        const wasCorrect = status === 'correct';

        // Reset
        setStatus('idle');
        setSelectedWord(null);

        // Notify parent
        if (onComplete) {
            onComplete(wasCorrect);
        }
    };

    const getCorrectAnswer = () => {
        const correct = options.find(opt => opt.isCorrect);
        return `${sentenceParts[0]} ${correct?.text} ${sentenceParts[2]}`;
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
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-32 overflow-y-auto">
                {/* Question Bubble */}
                <div className="mb-8">
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
                                <span className="text-blue-600 font-bold">Complete the sentence!</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sentence Area (The Context) */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                        {sentenceParts.map((part, index) => {
                            if (part === '{blank}') {
                                return (
                                    <div key={index}>
                                        {selectedWord ? (
                                            // Filled Slot
                                            <button
                                                onClick={handleFilledSlotClick}
                                                disabled={status !== 'idle'}
                                                className="
                          inline-flex items-center justify-center
                          bg-blue-100 
                          border-2 border-blue-400
                          text-blue-700
                          rounded-xl px-4 h-12
                          text-2xl font-bold
                          transition-all duration-200
                          hover:scale-105
                          active:scale-95
                          animate-pop
                        "
                                            >
                                                {selectedWord.text}
                                            </button>
                                        ) : (
                                            // Empty Slot (Dashed)
                                            <div className="
                        inline-flex items-center justify-center
                        border-2 border-dashed border-gray-300
                        bg-gray-50
                        rounded-xl
                        min-w-[120px] h-12
                        text-gray-400 text-lg font-medium
                      ">
                                                ?
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <span key={index} className="text-2xl font-bold text-gray-800">
                                    {part}
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* Word Bank (Options Area) */}
                <div>
                    <p className="text-[13px] font-semibold text-gray-500 mb-3 uppercase tracking-wide text-center">
                        Word Bank
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {options.map((option) => {
                            const isUsed = selectedWord?.id === option.id;

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isUsed || status !== 'idle'}
                                    className={`
                    rounded-2xl p-4
                    text-center text-[17px] font-bold
                    transition-all duration-200
                    ${isUsed
                                            ? 'opacity-0 pointer-events-none'
                                            : 'bg-white border-2 border-gray-200 border-b-[5px] border-b-gray-300 text-gray-700 shadow-[0_5px_0_0_#d1d5db] hover:border-gray-300 active:border-b-0 active:shadow-none active:translate-y-[5px]'
                                        }
                    ${status !== 'idle' && !isUsed ? 'opacity-60 cursor-not-allowed' : ''}
                  `}
                                >
                                    {option.text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer (Check Button) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <button
                    onClick={handleCheck}
                    disabled={!selectedWord || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${selectedWord && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {selectedWord ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Check</span>
                        </div>
                    ) : (
                        <span>Fill in the blank</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Nicely done!' : null}
                correctAnswer={status === 'wrong' ? getCorrectAnswer() : null}
                onContinue={handleContinue}
            />

            <style jsx>{`
        @keyframes pop {
          0% { 
            transform: scale(0.8);
            opacity: 0;
          }
          50% { 
            transform: scale(1.1);
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pop {
          animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
        </div>
    );
};

export default FillBlankScreen;
