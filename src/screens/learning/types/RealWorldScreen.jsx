import React, { useState } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const RealWorldScreen = ({ onBack, onComplete }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'

    // Mock data - Menu artifact
    const question = 'How much is the Tea?';
    const artifact = {
        type: 'menu',
        title: 'CAFE LEZI',
        items: [
            { name: 'Coffee', price: '$3', highlight: false },
            { name: 'Tea', price: '$2', highlight: true },
            { name: 'Cake', price: '$4', highlight: false },
        ]
    };

    const options = [
        { id: 1, text: '$2', isCorrect: true },
        { id: 2, text: '$3', isCorrect: false },
        { id: 3, text: '$4', isCorrect: false },
        { id: 4, text: '$5', isCorrect: false },
    ];

    const handleOptionClick = (id) => {
        if (status === 'idle') {
            setSelectedId(id);
        }
    };

    const handleCheck = () => {
        const selected = options.find(opt => opt.id === selectedId);

        if (selected?.isCorrect) {
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
        setSelectedId(null);

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
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-[240px] overflow-y-auto">
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
                                Look at this menu. <span className="text-blue-600 font-bold">{question}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Artifact (Menu Card) */}
                <div className="flex justify-center mb-8">
                    <div className="
            w-full max-w-sm
            bg-[#FFFBEB]
            rounded-xl
            shadow-lg
            border-2 border-amber-200
            border-b-[6px] border-b-amber-300
            p-8
            transform rotate-1
          ">
                        {/* Menu Title */}
                        <h2 className="text-center text-3xl font-bold text-amber-900 mb-6 font-serif tracking-wider">
                            {artifact.title}
                        </h2>

                        {/* Menu Items */}
                        <div className="space-y-3">
                            {artifact.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`
                    flex justify-between items-center
                    font-mono text-lg
                    pb-2 border-b border-dashed border-amber-300
                    ${item.highlight ? 'text-amber-900 font-bold' : 'text-amber-800'}
                  `}
                                >
                                    <span>{item.name}</span>
                                    <span className="flex items-center gap-2">
                                        <span className="text-amber-400">........</span>
                                        <span className="font-bold">{item.price}</span>
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Decorative element */}
                        <div className="mt-6 pt-4 border-t-2 border-amber-300">
                            <p className="text-center text-xs text-amber-700 font-serif italic">
                                Thank you for visiting!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Options (Answers) */}
                <div className="grid grid-cols-2 gap-3">
                    {options.map((option) => {
                        const isSelected = selectedId === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option.id)}
                                disabled={status !== 'idle'}
                                className={`
                  rounded-2xl p-4
                  text-center text-[18px] font-bold
                  transition-all duration-200
                  ${isSelected
                                        ? 'bg-blue-50 border-2 border-blue-400 border-b-[5px] border-b-blue-500 text-blue-600 shadow-[0_5px_0_0_#3b82f6] active:border-b-0 active:shadow-none active:translate-y-[5px]'
                                        : 'bg-white border-2 border-gray-100 border-b-[5px] border-b-gray-200 text-gray-700 shadow-[0_5px_0_0_#e5e7eb] hover:border-gray-200 active:border-b-0 active:shadow-none active:translate-y-[5px]'
                                    }
                  ${status !== 'idle' ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                `}
                            >
                                {option.text}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer (Check Button) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <button
                    onClick={handleCheck}
                    disabled={!selectedId || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${selectedId && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {selectedId ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Check</span>
                        </div>
                    ) : (
                        <span>Select an answer</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Great reading!' : null}
                correctAnswer={status === 'wrong' ? getCorrectAnswer() : null}
                onContinue={handleContinue}
            />
        </div>
    );
};

export default RealWorldScreen;
