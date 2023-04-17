import LoginWidget from './LoginPage';

function App() {
    const handleLogin = () => {
    // Perform login 
    };

    return (
        <div>
            <LoginWidget onLogin={handleLogin} />
        </div>
    );
}

export default App;

