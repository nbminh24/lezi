import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Check, SpeakerHigh, Gauge } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const ListeningTypeScreen = ({ onBack, onComplete }) => {
    const [userInput, setUserInput] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingSlow, setIsPlayingSlow] = useState(false);
    const inputRef = useRef(null);

    // Mock data
    const correctAnswer = 'Elephant';
    const audioText = 'Elephant';

    // Auto-focus input on mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Auto-play on mount
    useEffect(() => {
        playAudio(false);
    }, []);

    const playAudio = (slow = false) => {
        if (slow) {
            console.log(`🐢 Playing slow: "${audioText}"`);
            setIsPlayingSlow(true);
            setTimeout(() => {
                setIsPlayingSlow(false);
            }, 3000); // Slower playback
        } else {
            console.log(`🔊 Playing normal: "${audioText}"`);
            setIsPlaying(true);
            setTimeout(() => {
                setIsPlaying(false);
            }, 2000);
        }
    };

    const handleCheck = () => {
        // Case-insensitive comparison
        const normalizedInput = userInput.trim().toLowerCase();
        const normalizedAnswer = correctAnswer.toLowerCase();

        if (normalizedInput === normalizedAnswer) {
            console.log('✅ Correct spelling!');
            setStatus('correct');
        } else {
            console.log('❌ Wrong spelling!');
            setStatus('wrong');
        }
    };

    const handleContinue = () => {
        const wasCorrect = status === 'correct';

        // Reset
        setStatus('idle');
        setUserInput('');
        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Notify parent
        if (onComplete) {
            onComplete(wasCorrect);
        }
    };

    const handleInputChange = (e) => {
        if (status === 'idle') {
            setUserInput(e.target.value);
        }
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
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
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
                                <span className="text-blue-600 font-bold">Type what you hear!</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Audio Control Area */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    {/* Main Speaker Button */}
                    <button
                        onClick={() => playAudio(false)}
                        disabled={isPlaying || isPlayingSlow}
                        className={`
              relative
              w-32 h-32 rounded-full
              bg-blue-500
              border-4 border-blue-400
              border-b-[6px] border-b-blue-700
              shadow-xl shadow-blue-500/30
              flex items-center justify-center
              transition-all duration-150
              ${isPlaying || isPlayingSlow ? 'cursor-wait' : 'cursor-pointer hover:scale-105'}
              active:border-b-0 active:shadow-lg active:translate-y-[6px]
            `}
                    >
                        {/* Pulse Ring Animation when playing */}
                        {isPlaying && (
                            <>
                                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30" />
                                <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse opacity-20" />
                            </>
                        )}

                        {/* Speaker Icon */}
                        <SpeakerHigh
                            size={56}
                            weight="fill"
                            className="text-white relative z-10"
                        />
                    </button>

                    {/* Slow Mode Button */}
                    <button
                        onClick={() => playAudio(true)}
                        disabled={isPlaying || isPlayingSlow}
                        className={`
              relative
              w-14 h-14 rounded-2xl
              bg-blue-100
              border-2 border-blue-200
              border-b-[4px] border-b-blue-300
              shadow-md
              flex items-center justify-center
              transition-all duration-150
              ${isPlayingSlow || isPlaying ? 'cursor-wait' : 'cursor-pointer hover:scale-105'}
              active:border-b-0 active:shadow-sm active:translate-y-[4px]
            `}
                    >
                        {/* Pulse when playing slow */}
                        {isPlayingSlow && (
                            <div className="absolute inset-0 rounded-2xl bg-blue-300 animate-pulse opacity-40" />
                        )}

                        {/* Slow Speed Icon */}
                        <Gauge
                            size={28}
                            weight="fill"
                            className="text-blue-600 relative z-10"
                        />
                    </button>
                </div>

                {/* Input Area (The Beautiful Input Field) */}
                <div className="w-full max-w-md mx-auto">
                    <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        disabled={status !== 'idle'}
                        placeholder="Type here..."
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck="false"
                        className="
              w-full h-20
              bg-gray-50
              rounded-[24px]
              border-2 border-gray-200
              text-2xl font-bold text-center text-gray-800
              placeholder:text-gray-400 placeholder:font-medium
              transition-all duration-200
              focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none
              disabled:opacity-60 disabled:cursor-not-allowed
            "
                    />
                </div>
            </div>

            {/* Footer (Check Button) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <button
                    onClick={handleCheck}
                    disabled={!userInput.trim() || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${userInput.trim() && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {userInput.trim() ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Check</span>
                        </div>
                    ) : (
                        <span>Type your answer</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Perfect spelling!' : null}
                correctAnswer={status === 'wrong' ? correctAnswer : null}
                onContinue={handleContinue}
            />
        </div>
    );
};

export default ListeningTypeScreen;
