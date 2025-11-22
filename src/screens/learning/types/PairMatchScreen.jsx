import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import FeedbackSheet from '../FeedbackSheet';

const PairMatchScreen = ({ onBack, onComplete }) => {
    const [status, setStatus] = useState('idle'); // 'idle', 'correct'
    const [selectedTile, setSelectedTile] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [errorTiles, setErrorTiles] = useState([]);

    // Mock data for pairs
    const initialPairs = [
        { id: 1, text: 'Hello', pairId: 1, lang: 'en' },
        { id: 2, text: 'Xin chào', pairId: 1, lang: 'vi' },
        { id: 3, text: 'Bear', pairId: 2, lang: 'en' },
        { id: 4, text: 'Con gấu', pairId: 2, lang: 'vi' },
        { id: 5, text: 'Apple', pairId: 3, lang: 'en' },
        { id: 6, text: 'Quả táo', pairId: 3, lang: 'vi' },
    ];

    // Shuffle tiles on mount
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        // Shuffle algorithm
        const shuffled = [...initialPairs].sort(() => Math.random() - 0.5);
        setTiles(shuffled);
    }, []);

    const handleTileClick = (tile) => {
        // Ignore if already matched or in error state
        if (matchedPairs.includes(tile.pairId) || errorTiles.includes(tile.id)) {
            return;
        }

        // First selection
        if (selectedTile === null) {
            setSelectedTile(tile);
            return;
        }

        // Prevent selecting the same tile twice
        if (selectedTile.id === tile.id) {
            return;
        }

        // Second selection - check if match
        if (selectedTile.pairId === tile.pairId) {
            // MATCH!
            console.log('✅ Match found!');
            setMatchedPairs(prev => [...prev, tile.pairId]);
            setSelectedTile(null);

            // Check if all pairs are matched
            const totalPairs = new Set(initialPairs.map(p => p.pairId)).size;
            if (matchedPairs.length + 1 === totalPairs) {
                // All matched! Show success after short delay
                setTimeout(() => {
                    setStatus('correct');
                }, 500);
            }
        } else {
            // NO MATCH - show error briefly
            console.log('❌ No match');
            setErrorTiles([selectedTile.id, tile.id]);

            // Reset after brief delay
            setTimeout(() => {
                setErrorTiles([]);
                setSelectedTile(null);
            }, 800);
        }
    };

    const getTileState = (tile) => {
        if (matchedPairs.includes(tile.pairId)) {
            return 'matched';
        }
        if (errorTiles.includes(tile.id)) {
            return 'error';
        }
        if (selectedTile?.id === tile.id) {
            return 'selected';
        }
        return 'idle';
    };

    const getTileStyle = (state) => {
        switch (state) {
            case 'matched':
                return 'bg-green-100 border-green-400 border-b-4 border-b-green-500 text-green-700 opacity-50 cursor-not-allowed';
            case 'selected':
                return 'bg-blue-100 border-blue-400 border-b-4 border-b-blue-500 text-blue-700 scale-105';
            case 'error':
                return 'bg-red-100 border-red-400 border-b-4 border-b-red-500 text-red-700 animate-shake';
            case 'idle':
            default:
                return 'bg-white border-gray-200 border-b-4 border-b-gray-300 text-gray-700 hover:border-gray-300';
        }
    };

    const handleContinue = () => {
        // Reset
        setStatus('idle');
        setSelectedTile(null);
        setMatchedPairs([]);
        setErrorTiles([]);

        // Reshuffle
        const shuffled = [...initialPairs].sort(() => Math.random() - 0.5);
        setTiles(shuffled);

        // Notify parent
        if (onComplete) {
            onComplete(true);
        }
    };

    const allMatched = matchedPairs.length === new Set(initialPairs.map(p => p.pairId)).size;

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
                            <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(matchedPairs.length / 3) * 100}%` }}
                            />
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
                                Tap the <span className="text-blue-600 font-bold">matching pairs</span>!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tile Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {tiles.map((tile) => {
                        const state = getTileState(tile);
                        const isDisabled = state === 'matched' || state === 'error';

                        return (
                            <button
                                key={tile.id}
                                onClick={() => handleTileClick(tile)}
                                disabled={isDisabled}
                                className={`
                  min-h-[80px] rounded-2xl p-4
                  border-2
                  text-center text-[17px] font-bold
                  transition-all duration-200
                  active:scale-95 active:border-b-0 active:translate-y-[4px]
                  ${getTileStyle(state)}
                `}
                            >
                                {tile.text}
                            </button>
                        );
                    })}
                </div>

                {/* Completion Message */}
                {allMatched && status === 'idle' && (
                    <div className="mt-8 text-center">
                        <p className="text-green-600 text-lg font-bold">
                            🎉 All pairs matched!
                        </p>
                    </div>
                )}
            </div>

            {/* Footer (Continue Button - only enabled when all matched) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <button
                    onClick={handleContinue}
                    disabled={!allMatched || status !== 'idle'}
                    className={`
            w-full h-14 rounded-full
            font-bold text-[16px]
            transition-all duration-200
            ${allMatched && status === 'idle'
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl active:scale-95'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
          `}
                >
                    {allMatched ? (
                        <div className="flex items-center justify-center gap-2">
                            <Check size={20} weight="bold" />
                            <span>Continue</span>
                        </div>
                    ) : (
                        <span>Match all pairs</span>
                    )}
                </button>
            </div>

            {/* Feedback Sheet */}
            <FeedbackSheet
                status={status}
                message="Perfect matching!"
                onContinue={handleContinue}
            />

            <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
        </div>
    );
};

export default PairMatchScreen;
