import React from 'react';
import { Plus, X } from 'phosphor-react';

const ChatSidebar = ({ isOpen, onClose, threads, activeThreadId, onSelectThread, onNewChat }) => {
    // Group threads by time
    const groupedThreads = {
        today: threads.filter(t => t.group === 'today'),
        yesterday: threads.filter(t => t.group === 'yesterday'),
        previous7Days: threads.filter(t => t.group === 'previous7Days')
    };

    const handleThreadClick = (threadId) => {
        onSelectThread(threadId);
        onClose();
    };

    const handleNewChat = () => {
        onNewChat();
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50"
                    onClick={onClose}
                />
            )}

            {/* Drawer Panel */}
            <div
                className={`
          absolute top-0 left-0 h-full z-50
          w-[80%] max-w-[280px]
          bg-white/95 backdrop-blur-xl
          shadow-2xl border-r border-white/50
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Header with Close Button */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">Chat History</h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                            <X size={18} className="text-gray-600" />
                        </button>
                    </div>

                    {/* New Chat Button */}
                    <div className="p-4">
                        <button
                            onClick={handleNewChat}
                            className="w-full bg-blue-50 text-blue-600 rounded-xl p-3 font-bold flex items-center gap-2 justify-center hover:bg-blue-100 transition-colors"
                        >
                            <Plus size={20} weight="bold" />
                            New Chat
                        </button>
                    </div>

                    {/* History List - Scrollable */}
                    <div className="flex-1 overflow-y-auto px-4 pb-4">
                        {/* Today */}
                        {groupedThreads.today.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">
                                    Today
                                </h3>
                                <div className="space-y-1">
                                    {groupedThreads.today.map((thread) => (
                                        <button
                                            key={thread.id}
                                            onClick={() => handleThreadClick(thread.id)}
                                            className={`
                        w-full text-left p-3 rounded-lg text-sm truncate
                        transition-colors
                        ${activeThreadId === thread.id
                                                    ? 'bg-blue-100 text-blue-700 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }
                      `}
                                        >
                                            {thread.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Yesterday */}
                        {groupedThreads.yesterday.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">
                                    Yesterday
                                </h3>
                                <div className="space-y-1">
                                    {groupedThreads.yesterday.map((thread) => (
                                        <button
                                            key={thread.id}
                                            onClick={() => handleThreadClick(thread.id)}
                                            className={`
                        w-full text-left p-3 rounded-lg text-sm truncate
                        transition-colors
                        ${activeThreadId === thread.id
                                                    ? 'bg-blue-100 text-blue-700 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }
                      `}
                                        >
                                            {thread.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Previous 7 Days */}
                        {groupedThreads.previous7Days.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">
                                    Previous 7 Days
                                </h3>
                                <div className="space-y-1">
                                    {groupedThreads.previous7Days.map((thread) => (
                                        <button
                                            key={thread.id}
                                            onClick={() => handleThreadClick(thread.id)}
                                            className={`
                        w-full text-left p-3 rounded-lg text-sm truncate
                        transition-colors
                        ${activeThreadId === thread.id
                                                    ? 'bg-blue-100 text-blue-700 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }
                      `}
                                        >
                                            {thread.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatSidebar;
