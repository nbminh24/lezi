import React, { useState } from 'react';
import { ArrowLeft, XCircle, CheckCircle } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const TrueFalseScreen = ({ onBack, onComplete }) => {
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'wrong'
    const [flashColor, setFlashColor] = useState(null);
    const [shakeCard, setShakeCard] = useState(false);

    // Mock data
    const displayImage = '/avatar.png'; // Cat image (using bear for now)
    const displayText = 'Dog';
    const isCorrect = false; // This is wrong - image shows bear/cat, text says dog

    const handleAnswer = (userSaysTrue) => {
        if (status !== 'idle') return;

        // Check if user's answer matches reality
        const isUserCorrect = (userSaysTrue === isCorrect);

        if (isUserCorrect) {
            // CORRECT!
            console.log('✅ Correct judgment!');
            setFlashColor('green');
            setTimeout(() => {
                setFlashColor(null);
                setStatus('correct');
            }, 500);
        } else {
            // WRONG!
            console.log('❌ Wrong judgment!');
            setFlashColor('red');
            setShakeCard(true);
            setTimeout(() => {
                setFlashColor(null);
                setShakeCard(false);
                setStatus('wrong');
            }, 800);
        }
    };

    const handleContinue = () => {
        const wasCorrect = status === 'correct';

        // Reset
        setStatus('idle');
        setFlashColor(null);
        setShakeCard(false);

        // Notify parent
        if (onComplete) {
            onComplete(wasCorrect);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#F9FAFB] flex flex-col">
            {/* Flash Overlay */}
            {flashColor && (
                <div
                    className={`fixed inset-0 z-30 pointer-events-none transition-opacity duration-300 ${flashColor === 'green' ? 'bg-green-500/20' : 'bg-red-500/20'
                        }`}
                />
            )}

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
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-6 pt-[90px] pb-[200px] overflow-y-auto flex flex-col">
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
                                <span className="text-blue-600 font-bold">Is this correct?</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 flex items-center justify-center">
                    {/* The Challenge Card (Center) - Smaller & Cleaner */}
                    <div className={`
                        w-[280px] h-[320px]
                        bg-white 
                        rounded-[32px] 
                        shadow-xl 
                        border-2 border-gray-100 
                        border-b-[8px] border-b-gray-200
                        p-5
                        flex flex-col
                        transition-all duration-200
                        ${shakeCard ? 'animate-shake' : ''}
                    `}>
                        {/* Image */}
                        <div className="flex-1 flex items-center justify-center mb-4">
                            <img
                                src={displayImage}
                                alt="Question"
                                className="w-full aspect-square object-cover rounded-2xl"
                            />
                        </div>

                        {/* Text Label */}
                        <div className="text-center">
                            <p className="text-3xl font-bold text-gray-800">
                                {displayText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interaction Area (Smaller Buttons) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <div className="flex justify-center gap-6">
                    {/* NO Button (FALSE / WRONG) */}
                    <button
                        onClick={() => handleAnswer(false)}
                        disabled={status !== 'idle'}
                        className="
              w-32 h-32 rounded-3xl
              bg-red-100 
              border-2 border-red-200 
              border-b-[6px] border-b-red-300
              shadow-[0_6px_0_0_#fca5a5]
              flex flex-col items-center justify-center gap-2
              transition-all duration-150
              hover:scale-105
              active:bg-red-200 active:border-b-0 active:shadow-none active:translate-y-[6px]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
                    >
                        <XCircle size={40} weight="fill" className="text-red-500" />
                        <span className="text-lg font-bold text-red-700">NO</span>
                    </button>

                    {/* YES Button (TRUE / CORRECT) */}
                    <button
                        onClick={() => handleAnswer(true)}
                        disabled={status !== 'idle'}
                        className="
              w-32 h-32 rounded-3xl
              bg-green-100 
              border-2 border-green-200 
              border-b-[6px] border-b-green-300
              shadow-[0_6px_0_0_#86efac]
              flex flex-col items-center justify-center gap-2
              transition-all duration-150
              hover:scale-105
              active:bg-green-200 active:border-b-0 active:shadow-none active:translate-y-[6px]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
                    >
                        <CheckCircle size={40} weight="fill" className="text-green-500" />
                        <span className="text-lg font-bold text-green-700">YES</span>
                    </button>
                </div>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message={status === 'correct' ? 'Sharp eye!' : 'Oops! That was incorrect.'}
                correctAnswer={null}
                onContinue={handleContinue}
            />

            <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
        </div>
    );
};

export default TrueFalseScreen;
