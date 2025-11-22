import React, { useState } from 'react';
import { ArrowLeft, SpeakerHigh, Microphone } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const VocabSpeakingScreen = ({ onBack, onComplete }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecorded, setHasRecorded] = useState(false);
    const [status, setStatus] = useState('idle'); // 'idle', 'correct'

    // Mock data
    const word = 'Bear';
    const ipa = '/bɛr/';
    const imageUrl = '/avatar.png';

    const handlePlaySample = () => {
        console.log('🔊 Playing sample:', word);
    };

    const handleMicClick = () => {
        if (isRecording || hasRecorded) return;

        setIsRecording(true);
        console.log('🎤 Recording started...');

        // Simulate recording for 2 seconds
        setTimeout(() => {
            setIsRecording(false);
            setHasRecorded(true);
            console.log('✅ Recording complete!');

            // Show success immediately
            setTimeout(() => {
                setStatus('correct');
            }, 500);
        }, 2000);
    };

    const handleContinue = () => {
        // Reset
        setStatus('idle');
        setIsRecording(false);
        setHasRecorded(false);

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

                    {/* Progress indicator */}
                    <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-[240px] overflow-y-auto flex flex-col">
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
                                <span className="text-blue-600 font-bold">Say this word!</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    {/* Hero Card (The Content) */}
                    <div className={`
            w-64
            bg-white 
            rounded-[32px] 
            shadow-xl 
            border-2 border-gray-100 
            border-b-[8px] border-b-gray-200
            p-6
            transition-all duration-300
            ${hasRecorded ? 'border-green-400 border-b-green-500 bg-green-50' : ''}
          `}>
                        {/* Image */}
                        <div className="mb-6">
                            <img
                                src={imageUrl}
                                alt={word}
                                className="w-full aspect-square object-cover rounded-2xl"
                            />
                        </div>

                        {/* Word with Sample Audio Button */}
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <h1 className={`
                text-4xl font-black text-center
                transition-colors duration-300
                ${hasRecorded ? 'text-green-700' : 'text-gray-800'}
              `}>
                                {word}
                            </h1>

                            {/* Sample Audio Button */}
                            <button
                                onClick={handlePlaySample}
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center hover:bg-blue-200 transition-colors active:scale-95"
                            >
                                <SpeakerHigh size={18} weight="bold" className="text-blue-600" />
                            </button>
                        </div>

                        {/* IPA Phonetic Transcription */}
                        <p className="text-center text-lg text-gray-400 font-mono">
                            {ipa}
                        </p>
                    </div>

                    {/* Visualizer (animated bars when recording) */}
                    <div className="flex items-center justify-center gap-2 h-16">
                        {isRecording && (
                            <>
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-2 bg-blue-500 rounded-full animate-wave"
                                        style={{
                                            animationDelay: `${i * 0.1}s`,
                                            height: '100%'
                                        }}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer - Mic Button */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-500 font-medium">
                        {isRecording ? 'Listening...' : hasRecorded ? 'Great job!' : 'Tap to record'}
                    </p>

                    <button
                        onClick={handleMicClick}
                        disabled={isRecording || hasRecorded}
                        className={`
              relative
              w-24 h-24 rounded-full
              ${isRecording ? 'bg-red-500' : hasRecorded ? 'bg-green-500' : 'bg-blue-500'}
              border-4 
              ${isRecording ? 'border-red-400' : hasRecorded ? 'border-green-400' : 'border-blue-400'}
              border-b-[8px] 
              ${isRecording ? 'border-b-red-700' : hasRecorded ? 'border-b-green-700' : 'border-b-blue-700'}
              shadow-xl
              flex items-center justify-center
              transition-all duration-150
              ${isRecording ? 'border-b-0 translate-y-[8px]' : hasRecorded ? 'opacity-80 cursor-not-allowed' : 'hover:scale-110 active:border-b-0 active:translate-y-[8px]'}
            `}
                    >
                        {isRecording && (
                            <>
                                <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />
                                <div className="absolute inset-0 rounded-full bg-red-400 animate-pulse opacity-20" />
                            </>
                        )}

                        <Microphone
                            size={44}
                            weight="fill"
                            className="text-white relative z-10"
                        />
                    </button>
                </div>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message="Perfect pronunciation!"
                onContinue={handleContinue}
            />

            <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: scaleY(0.3);
          }
          50% { 
            transform: scaleY(1);
          }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default VocabSpeakingScreen;
