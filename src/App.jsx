import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WorkoutPlan from './components/WorkoutPlan';
import PlayerBar from './components/PlayerBar';

function AppContent() {
    const location = useLocation();
    const showPlayer = location.pathname !== '/plan';

    return (
        <div className="min-h-screen bg-deep-charcoal text-white font-sans selection:bg-neon-coral selection:text-white overflow-hidden">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/plan" element={<WorkoutPlan />} />
            </Routes>
            {showPlayer && <PlayerBar />}

            {/* Background ambient glows */}
            <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-electric-teal/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-neon-coral/5 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
