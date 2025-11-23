import React, { useState } from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import SignupScreen from './screens/auth/SignupScreen';
import InterestScreen from './screens/onboarding/InterestScreen';
import GoalScreen from './screens/onboarding/GoalScreen';
import LevelScreen from './screens/onboarding/LevelScreen';
import DashboardScreen from './screens/home/DashboardScreen';
import MapScreen from './screens/map/MapScreen';
import ImageSelectScreen from './screens/learning/types/ImageSelectScreen';
import TextChoiceScreen from './screens/learning/types/TextChoiceScreen';
import SentenceBuildScreen from './screens/learning/types/SentenceBuildScreen';
import PairMatchScreen from './screens/learning/types/PairMatchScreen';
import ListeningScreen from './screens/learning/types/ListeningScreen';
import ImageToTextScreen from './screens/learning/types/ImageToTextScreen';
import FillBlankScreen from './screens/learning/types/FillBlankScreen';
import ListeningTypeScreen from './screens/learning/types/ListeningTypeScreen';
import DialogueScreen from './screens/learning/types/DialogueScreen';
import TrueFalseScreen from './screens/learning/types/TrueFalseScreen';
import RoleplayScreen from './screens/learning/types/RoleplayScreen';
import VocabSpeakingScreen from './screens/learning/types/VocabSpeakingScreen';
import RealWorldScreen from './screens/learning/types/RealWorldScreen';
import LessonCompleteScreen from './screens/learning/LessonCompleteScreen';
import LeaderboardScreen from './screens/leaderboard/LeaderboardScreen';
import ChatScreen from './screens/companion/ChatScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import AchievementsScreen from './screens/profile/AchievementsScreen';
import SettingsScreen from './screens/profile/SettingsScreen';
import PhoneFrame from './components/PhoneFrame';
import ProfileCard from './components/ProfileCard';
import DevTab from './components/dev/DevTab';

function App() {
    const [currentScreen, setCurrentScreen] = useState('login');
    const [onboardingData, setOnboardingData] = useState({});

    const handleOnboardingNext = (step, data) => {
        setOnboardingData((prev) => ({ ...prev, ...data }));

        // Navigate to next step
        if (step === 1) setCurrentScreen('onboard2');
        else if (step === 2) setCurrentScreen('onboard3');
        else if (step === 3) {
            console.log('Onboarding complete:', { ...onboardingData, ...data });
            setCurrentScreen('dashboard'); // Navigate to dashboard
        }
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'login':
                return <LoginScreen onNavigateToSignup={() => setCurrentScreen('signup')} />;
            case 'signup':
                return <SignupScreen onNavigateToLogin={() => setCurrentScreen('login')} />;

            // Onboarding Screens
            case 'onboard1':
                return (
                    <InterestScreen
                        onNext={(data) => handleOnboardingNext(1, data)}
                        onBack={() => setCurrentScreen('signup')}
                    />
                );
            case 'onboard2':
                return (
                    <GoalScreen
                        onNext={(data) => handleOnboardingNext(2, data)}
                        onBack={() => setCurrentScreen('onboard1')}
                    />
                );
            case 'onboard3':
                return (
                    <LevelScreen
                        onNext={(data) => handleOnboardingNext(3, data)}
                        onBack={() => setCurrentScreen('onboard2')}
                    />
                );

            // Dashboard (Home)
            case 'dashboard':
                return <DashboardScreen onNavigate={setCurrentScreen} />;

            // Map (Learning Path)
            case 'map':
                return <MapScreen onNavigate={setCurrentScreen} />;

            // Leaderboard
            case 'rank':
                return <LeaderboardScreen onNavigate={setCurrentScreen} />;

            // Chat (Companion)
            case 'chat':
                return <ChatScreen onNavigate={setCurrentScreen} />;

            // Profile
            case 'profile':
                return <ProfileScreen onNavigate={setCurrentScreen} />;

            // Achievements
            case 'achievements':
                return <AchievementsScreen onBack={() => setCurrentScreen('profile')} />;

            // Settings
            case 'settings':
                return <SettingsScreen onBack={() => setCurrentScreen('profile')} />;

            // Learning - Image Select Question
            case 'imageSelect':
                return (
                    <ImageSelectScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to feedback screen
                        }}
                    />
                );

            // Learning - Text Choice Question
            case 'textChoice':
                return (
                    <TextChoiceScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to feedback screen
                        }}
                    />
                );

            // Learning - Sentence Build Question
            case 'sentenceBuild':
                return (
                    <SentenceBuildScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to feedback screen
                        }}
                    />
                );

            // Learning - Pair Match Question
            case 'pairMatch':
                return (
                    <PairMatchScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('All pairs matched!');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Listening Question
            case 'listening':
                return (
                    <ListeningScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Image to Text Question
            case 'imageToText':
                return (
                    <ImageToTextScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Fill in the Blank Question
            case 'fillBlank':
                return (
                    <FillBlankScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Listening & Typing Question
            case 'listeningType':
                return (
                    <ListeningTypeScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Dialogue Question
            case 'dialogue':
                return (
                    <DialogueScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - True/False Question
            case 'trueFalse':
                return (
                    <TrueFalseScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Roleplay Question
            case 'roleplay':
                return (
                    <RoleplayScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Speaking complete!');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Vocabulary Speaking Question
            case 'vocabSpeaking':
                return (
                    <VocabSpeakingScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Pronunciation complete!');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Real World Context Question
            case 'realWorld':
                return (
                    <RealWorldScreen
                        onBack={() => setCurrentScreen('dashboard')}
                        onComplete={(isCorrect) => {
                            console.log('Answer:', isCorrect ? 'Correct' : 'Wrong');
                            // TODO: Navigate to next question
                        }}
                    />
                );

            // Learning - Lesson Complete Screen
            case 'lessonComplete':
                return (
                    <LessonCompleteScreen
                        onContinue={() => setCurrentScreen('dashboard')}
                    />
                );

            // Profile (Old demo)
            case 'profile':
                return (
                    <PhoneFrame>
                        <ProfileCard />
                    </PhoneFrame>
                );

            default:
                return <LoginScreen onNavigateToSignup={() => setCurrentScreen('signup')} />;
        }
    };

    return (
        <>
            {renderScreen()}
            <DevTab currentScreen={currentScreen} onScreenChange={setCurrentScreen} />
        </>
    );
}

export default App;
