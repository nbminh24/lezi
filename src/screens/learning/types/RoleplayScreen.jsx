import React, { useState, useEffect } from 'react';
import { ArrowLeft, SpeakerHigh, Microphone, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const RoleplayScreen = ({ onBack, onComplete }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecorded, setHasRecorded] = useState(false);
    const [userResponse, setUserResponse] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'correct'
    const [showHint, setShowHint] = useState(false);

    // Mock data
    const context = 'At the Coffee Shop';
    const mascotQuestion = 'Hello! What would you like to drink?';
    const expectedAnswer = 'I would like a coffee, please.';

    // Auto-play mascot audio on mount
    useEffect(() => {
        setTimeout(() => {
            console.log('🔊 Mascot says:', mascotQuestion);
        }, 500);
    }, []);

    const handlePlayAudio = () => {
        console.log('🔊 Replaying:', mascotQuestion);
    };

    const handleMicClick = () => {
        if (isRecording) return;

        setIsRecording(true);
        console.log('🎤 Recording started...');

        // Simulate recording for 2 seconds
        setTimeout(() => {
            setIsRecording(false);
            setHasRecorded(true);
            setUserResponse(expectedAnswer); // Simulate captured speech
            console.log('✅ Recording complete!');
        }, 2000);
    };

    const handleCheck = () => {
        console.log('✅ Great job speaking!');
        setStatus('correct');
    };

    const handleContinue = () => {
        // Reset
        setStatus('idle');
        setHasRecorded(false);
        setUserResponse('');
        setShowHint(false);

        // Notify parent
        if (onComplete) {
            onComplete(true);
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

                    {/* Context Label */}
                    <div className="flex-1 text-center">
                        <p className="text-[14px] font-bold text-blue-600">
                            {context}
                        </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="w-10" /> {/* Spacer for balance */}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-[240px] overflow-y-auto">
                {/* Mascot's Question */}
                <div className="mb-8">
                    <div className="flex items-start gap-3">
                        {/* Mascot Avatar */}
                        <img
                            src="/avatar.png"
                            alt="Lezi"
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md flex-shrink-0"
                        />

                        {/* Speech Bubble */}
                        <div className="flex-1 bg-white rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-lg">
                            <div className="flex items-start gap-2">
                                <p className="text-[16px] text-gray-800 font-medium flex-1">
                                    {mascotQuestion}
                                </p>
                                <button
                                    onClick={handlePlayAudio}
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                                >
                                    <SpeakerHigh size={16} weight="bold" className="text-blue-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User's Response (if recorded) */}
                {hasRecorded && (
                    <div className="mb-8 flex justify-end animate-slideIn">
                        <div className="bg-blue-500 rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-lg">
                            <p className="text-[16px] text-white font-medium">
                                {userResponse}
                            </p>
                        </div>
                    </div>
                )}

                {/* Hint Card (Sticky Note Style) */}
                {!hasRecorded && (
                    <div className="mt-12 flex justify-center">
                        <div
                            className={`
                relative
                bg-yellow-50 
                rounded-2xl 
                p-6 
                shadow-md
                border border-yellow-200
                transform rotate-1
                transition-all duration-300
                ${showHint ? '' : 'blur-[2px]'}
              `}
                        >
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    HINT
                                </div>
                            </div>

                            <p className="text-[18px] font-semibold text-gray-700 text-center mt-2">
                                {expectedAnswer}
                            </p>

                            {!showHint && (
                                <button
                                    onClick={() => setShowHint(true)}
                                    className="absolute inset-0 bg-yellow-100/80 rounded-2xl flex items-center justify-center"
                                >
                                    <span className="text-sm font-bold text-yellow-900">
                                        Tap for hint
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer - Mic Button or Check Button */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                {!hasRecorded ? (
                    /* Mic Button */
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-gray-500 font-medium">
                            {isRecording ? 'Listening...' : 'Tap to speak'}
                        </p>

                        <button
                            onClick={handleMicClick}
                            disabled={isRecording}
                            className={`
                relative
                w-20 h-20 rounded-full
                ${isRecording ? 'bg-red-500' : 'bg-blue-500'}
                border-4 border-blue-400
                border-b-[6px] border-b-blue-700
                shadow-xl
                flex items-center justify-center
                transition-all duration-150
                ${isRecording ? 'animate-pulse' : 'hover:scale-110'}
                active:border-b-0 active:translate-y-[6px]
              `}
                        >
                            {isRecording && (
                                <>
                                    <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />
                                    <div className="absolute inset-0 rounded-full bg-red-400 animate-pulse opacity-20" />
                                </>
                            )}

                            <Microphone
                                size={36}
                                weight="fill"
                                className="text-white relative z-10"
                            />
                        </button>
                    </div>
                ) : (
                    /* Check Button */
                    <button
                        onClick={handleCheck}
                        disabled={status !== 'idle'}
                        className="
              w-full h-14 rounded-full
              bg-gradient-to-r from-green-500 to-green-600 
              text-white 
              font-bold text-[16px]
              shadow-lg shadow-green-500/30 
              hover:shadow-xl 
              active:scale-95
              transition-all duration-200
              disabled:opacity-60
            "
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Continue</span>
                        </div>
                    </button>
                )}
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message="Great speaking!"
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

export default RoleplayScreen;
