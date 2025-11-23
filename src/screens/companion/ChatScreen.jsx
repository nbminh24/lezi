import React, { useState } from 'react';
import { ArrowUp, Microphone, Trash, List } from 'phosphor-react';
import BottomNavBar from '../../components/layout/BottomNavBar';
import ChatSidebar from './ChatSidebar';

const ChatScreen = ({ onNavigate }) => {
    const [message, setMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeThreadId, setActiveThreadId] = useState('thread1');

    // Mock threads data
    const threads = [
        {
            id: 'thread1',
            title: 'Learning about Food',
            group: 'today',
            messages: [
                {
                    id: 1,
                    type: 'bot',
                    text: 'Hi there! I\'m Lezi, your AI companion. I\'m here to help you practice English! 🎉',
                    timestamp: '10:30 AM'
                },
                {
                    id: 2,
                    type: 'user',
                    text: 'Hello Lezi, I want learn food.',
                    timestamp: '10:31 AM'
                },
                {
                    id: 3,
                    type: 'bot',
                    text: 'Sure! Let\'s talk about your favorite meal. What do you like to eat?',
                    correction: 'I want *to* learn *about* food.',
                    timestamp: '10:31 AM'
                },
                {
                    id: 4,
                    type: 'user',
                    text: 'I like pizza and pasta very much!',
                    timestamp: '10:32 AM'
                },
                {
                    id: 5,
                    type: 'bot',
                    text: 'Great choices! Italian food is delicious. Can you tell me about your favorite pizza topping?',
                    timestamp: '10:32 AM'
                }
            ]
        },
        {
            id: 'thread2',
            title: 'Past Tense Practice',
            group: 'today',
            messages: [
                {
                    id: 1,
                    type: 'bot',
                    text: 'Let\'s practice past tense! Tell me what you did yesterday.',
                    timestamp: '9:15 AM'
                }
            ]
        },
        {
            id: 'thread3',
            title: 'Vocabulary: Animals',
            group: 'yesterday',
            messages: [
                {
                    id: 1,
                    type: 'bot',
                    text: 'Let\'s learn about animals! What\'s your favorite animal?',
                    timestamp: 'Yesterday'
                }
            ]
        },
        {
            id: 'thread4',
            title: 'Free Talk with Lezi',
            group: 'yesterday',
            messages: [
                {
                    id: 1,
                    type: 'bot',
                    text: 'Hi! Let\'s have a casual conversation. How are you today?',
                    timestamp: 'Yesterday'
                }
            ]
        },
        {
            id: 'thread5',
            title: 'Greeting Lesson',
            group: 'previous7Days',
            messages: [
                {
                    id: 1,
                    type: 'bot',
                    text: 'Welcome! Let\'s learn common English greetings.',
                    timestamp: '5 days ago'
                }
            ]
        }
    ];

    // Get current thread messages
    const currentThread = threads.find(t => t.id === activeThreadId);
    const messages = currentThread ? currentThread.messages : [];

    const suggestions = [
        'Help me with grammar',
        'Roleplay: Cafe',
        'Explain this word',
        'Practice conversation'
    ];

    const handleSend = () => {
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const handleMicToggle = () => {
        setIsRecording(!isRecording);
        console.log('Mic toggled:', !isRecording);
    };

    const handleSuggestionClick = (suggestion) => {
        console.log('Suggestion clicked:', suggestion);
    };

    const handleClearChat = () => {
        console.log('Clear chat clicked');
    };

    const handleSelectThread = (threadId) => {
        setActiveThreadId(threadId);
    };

    const handleNewChat = () => {
        setActiveThreadId(null);
    };

    return (
        <div className="h-full flex flex-col bg-[#F9FAFB] relative overflow-hidden">
            {/* Chat Sidebar */}
            <ChatSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                threads={threads}
                activeThreadId={activeThreadId}
                onSelectThread={handleSelectThread}
                onNewChat={handleNewChat}
            />

            {/* Header - Absolute */}
            <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Left: Menu Button + Avatar */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <List size={20} className="text-gray-600" weight="bold" />
                        </button>

                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                            <span className="text-white text-xl">🐻</span>
                        </div>

                        {/* Center: Title & Status */}
                        <div>
                            <h1 className="text-base font-bold text-gray-800">Lezi AI</h1>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <p className="text-xs text-gray-500">Always here to help</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Clear Chat */}
                    <button
                        onClick={handleClearChat}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        <Trash size={16} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Chat Body - Scrollable */}
            <div className="flex-1 overflow-y-auto pt-20 pb-32 px-4">
                <div className="space-y-4 max-w-2xl mx-auto">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[75%] ${msg.type === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                                {/* Correction Badge (if any) */}
                                {msg.correction && (
                                    <div className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-1 inline-block">
                                        <strong>Correction:</strong> {msg.correction}
                                    </div>
                                )}

                                {/* Message Bubble */}
                                <div
                                    className={`
                    px-4 py-3 shadow-sm
                    ${msg.type === 'bot'
                                            ? 'bg-white border border-gray-100 rounded-2xl rounded-tl-none text-gray-800'
                                            : 'bg-[#3E73F9] rounded-2xl rounded-tr-none text-white shadow-md'
                                        }
                  `}
                                >
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                </div>

                                {/* Timestamp */}
                                <p className="text-xs text-gray-400 mt-1 px-1">{msg.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggestion Chips - Floating Above Input */}
            <div className="absolute bottom-[210px] left-0 right-0 z-30 px-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {suggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="flex-shrink-0 bg-white border border-gray-200 text-sm text-gray-600 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Area - Floating Capsule */}
            <div className="absolute bottom-[140px] left-4 right-4 z-40">
                <div className="bg-white shadow-lg rounded-[32px] p-2 flex items-center gap-2">
                    {/* Mic Button */}
                    <button
                        onClick={handleMicToggle}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
              ${isRecording
                                ? 'bg-red-100 text-red-600 animate-pulse'
                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            }
            `}
                    >
                        <Microphone size={20} weight="bold" />
                    </button>

                    {/* Input Field */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent px-2 outline-none text-gray-700 text-sm placeholder:text-gray-400"
                    />

                    {/* Send Button */}
                    <button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className={`
              w-9 h-9 rounded-full flex items-center justify-center transition-all
              ${message.trim()
                                ? 'bg-[#3E73F9] text-white shadow-md hover:bg-blue-600'
                                : 'bg-gray-100 text-gray-400'
                            }
            `}
                    >
                        <ArrowUp size={20} weight="bold" />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavBar activeTab="chat" onTabChange={onNavigate} />
        </div>
    );
};

export default ChatScreen;
