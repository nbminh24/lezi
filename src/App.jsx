import React, { useState } from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import SignupScreen from './screens/auth/SignupScreen';
import PhoneFrame from './components/PhoneFrame';
import ProfileCard from './components/ProfileCard';
import DevTab from './components/dev/DevTab';

function App() {
    const [currentScreen, setCurrentScreen] = useState('login');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'login':
                return <LoginScreen onNavigateToSignup={() => setCurrentScreen('signup')} />;
            case 'signup':
                return <SignupScreen onNavigateToLogin={() => setCurrentScreen('login')} />;
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
