import React, { useState } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const SentenceBuildScreen = ({ onBack, onComplete }) => {
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'

    // Word state: each word has id, text, and status
    const [words, setWords] = useState([
        { id: 1, text: 'The', status: 'in-bank', order: null },
        { id: 2, text: 'bear', status: 'in-bank', order: null },
        { id: 3, text: 'likes', status: 'in-bank', order: null },
        { id: 4, text: 'sweet', status: 'in-bank', order: null },
        { id: 5, text: 'honey', status: 'in-bank', order: null },
    ]);

    // Correct answer for validation
    const correctAnswer = ['The', 'bear', 'likes', 'honey'];

    // Move word from bank to slot
    const handleWordClick = (wordId, currentStatus) => {
        setWords(prevWords => {
            if (currentStatus === 'in-bank') {
                // Moving to slot - assign order
                const maxOrder = Math.max(0, ...prevWords.filter(w => w.status === 'in-slot').map(w => w.order || 0));
                return prevWords.map(w =>
                    w.id === wordId
                        ? { ...w, status: 'in-slot', order: maxOrder + 1 }
                        : w
                );
            } else {
                // Moving back to bank
                return prevWords.map(w =>
                    w.id === wordId
                        ? { ...w, status: 'in-bank', order: null }
                        : w
                );
            }
        });
    };

    const handleCheck = () => {
        // Get selected words in order
        const selectedWords = words
            .filter(w => w.status === 'in-slot')
            .sort((a, b) => a.order - b.order)
            .map(w => w.text);

        // Check if answer is correct
        const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(correctAnswer);

        if (isCorrect) {
            console.log('✅ Correct sentence!');
            setStatus('correct');
        } else {
            console.log('❌ Wrong sentence!');
            setStatus('wrong');
        }
    };

    const handleContinue = () => {
        const wasCorrect = status === 'correct';

        // Reset
        setStatus('idle');
        setWords(prevWords => prevWords.map(w => ({ ...w, status: 'in-bank', order: null })));

        // Notify parent
        if (onComplete) {
            onComplete(wasCorrect);
        }
    };

    const getCorrectAnswerText = () => {
        return correctAnswer.join(' ');
    };

    // Get words in slot sorted by order
    const slotWords = words
        .filter(w => w.status === 'in-slot')
        .sort((a, b) => a.order - b.order);

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
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-32 overflow-y-auto">
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
                                Translate this sentence:
                            </p>
                            <p className="text-[20px] font-bold text-blue-600 mt-1">
                                "Con gấu thích mật ong"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Answer Slot (Drop Zone) */}
                <div className="mb-6">
                    <p className="text-[13px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                        Your Answer
                    </p>
                    <div className="min-h-[120px] w-full bg-gray-50 rounded-3xl p-4 border-2 border-dashed border-gray-300">
                        {slotWords.length === 0 ? (
                            <div className="flex items-center justify-center h-full min-h-[88px]">
                                <p className="text-gray-400 text-[15px] font-medium">
                                    Tap words to build
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-3">
                                {slotWords.map((word) => (
                                    <button
                                        key={word.id}
                                        onClick={() => status === 'idle' && handleWordClick(word.id, word.status)}
                                        disabled={status !== 'idle'}
                                        className="
                      px-5 py-3 rounded-2xl
                      bg-white border-2 border-gray-200 border-b-[4px] border-b-gray-300
                      text-lg font-bold text-gray-700
                      shadow-[0_4px_0_0_#d1d5db]
                      transition-all duration-150
                      active:scale-95 active:border-b-0 active:shadow-none active:translate-y-[4px]
                      hover:border-gray-300
                    "
                                    >
                                        {word.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Word Bank */}
                <div>
                    <p className="text-[13px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                        Word Bank
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {words.map((word) => {
                            if (word.status === 'in-slot') {
                                // Ghost placeholder to maintain layout
                                return (
                                    <div
                                        key={word.id}
                                        className="px-5 py-3 rounded-2xl opacity-0 pointer-events-none"
                                        style={{ visibility: 'hidden' }}
                                    >
                                        <span className="text-lg font-bold">{word.text}</span>
                                    </div>
                                );
                            } else {
                                // Visible word in bank
                                return (
                                    <button
                                        key={word.id}
                                        onClick={() => status === 'idle' && handleWordClick(word.id, word.status)}
                                        disabled={status !== 'idle'}
                                        className="
                      px-5 py-3 rounded-2xl
                      bg-white border-2 border-gray-200 border-b-[4px] border-b-gray-300
                      text-lg font-bold text-gray-700
                      shadow-[0_4px_0_0_#d1d5db]
                      transition-all duration-150
                      active:scale-95 active:border-b-0 active:shadow-none active:translate-y-[4px]
                      hover:border-gray-300
                    "
                                    >
                                        {word.text}
                                    </button>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>

            {/* Footer (Check Button) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <button
                    onClick={handleCheck}
                    disabled={slotWords.length === 0 || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${slotWords.length > 0 && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {slotWords.length > 0 ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Check</span>
                        </div>
                    ) : (
                        <span>Build your sentence</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Excellent!' : null}
                correctAnswer={status === 'wrong' ? getCorrectAnswerText() : null}
                onContinue={handleContinue}
            />
        </div>
    );
};

export default SentenceBuildScreen;
