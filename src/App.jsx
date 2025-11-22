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
