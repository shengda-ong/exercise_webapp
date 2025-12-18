import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import HorizontalSection from './HorizontalSection';
import { Search, Bell, Mic, Settings } from 'lucide-react';

// Assets
import hiitImg from '../assets/images/hiit.png';
import yogaImg from '../assets/images/yoga.png';

import workoutData from '../data/dashboard.json';

const Dashboard = () => {
    const [greeting, setGreeting] = useState('Good Morning');
    const [user, setUser] = useState({ name: "Sheng Da Ong" });

    // Image mapping
    const imageMap = {
        'hiit': hiitImg,
        'yoga': yogaImg
    };

    // Helper to process data with images
    const processData = (data) => {
        return data.map(item => ({
            ...item,
            image: imageMap[item.imageKey] || hiitImg // Fallback to hiit if key not found
        }));
    };

    const recentlyPlayed = processData(workoutData.recentlyPlayed);
    const madeForYou = processData(workoutData.madeForYou);
    const topMixes = processData(workoutData.topMixes);
    const recommended = processData(workoutData.recommended);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    return (
        <main className="flex-1 ml-64 p-8 lg:p-10 pb-32 min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#121212]">
            {/* Top Header */}
            <header className="flex justify-between items-center mb-6 sticky top-0 z-30 py-3 -mx-8 px-8 -mt-2 lg:-mt-10 bg-[#1E1E1E]/95 backdrop-blur-xl border-b border-white/5 shadow-sm">
                <div className="flex items-center gap-4 flex-1">
                    {/* Search Bar - redesigned to be cleaner and more integrated */}
                    <div className="relative group w-full max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-white transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-4 h-10 bg-[#2A2A2A] border border-transparent focus:border-white/10 rounded-full leading-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-[#333] transition-all text-sm"
                            placeholder="What do you want to play?"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="px-6 h-10 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform flex items-center justify-center">Explore Premium</button>
                    <button className="text-gray-400 hover:text-white transition-colors relative p-2">
                        <Bell className="w-7 h-7" />
                        <span className="absolute top-1.5 right-2 block h-2 w-2 rounded-full bg-neon-coral ring-2 ring-[#1E1E1E]" />
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-coral to-electric-teal p-[2px] cursor-pointer hover:scale-105 transition-transform">
                        <img className="w-full h-full rounded-full object-cover border-2 border-[#121212]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="Profile" />
                    </div>
                </div>
            </header>

            {/* Greeting */}
            <h1 className="text-3xl font-bold text-white mb-6 px-4">{greeting}, {user.name}</h1>

            {/* Quick Access Grid (Spotify style top grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-10">
                {recentlyPlayed.slice(0, 6).map((item) => (
                    <div key={item.id} className="flex bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden cursor-pointer group items-center">
                        <div className="h-20 w-20 min-w-[5rem] shadow-lg">
                            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-4 font-bold text-white truncate flex-1 flex justify-between items-center">
                            <span>{item.title}</span>
                            <div className="bg-neon-coral rounded-full p-2 opacity-0 group-hover:opacity-100 shadow-xl translate-y-2 group-hover:translate-y-0 transition-all">
                                <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-4">
                <HorizontalSection title={`Made for ${user.name}`} bgGradient="from-neon-coral/10 to-transparent">
                    {madeForYou.map(item => (
                        <div key={item.id} className="w-[180px] md:w-[220px] flex-shrink-0">
                            <WorkoutCard {...item} />
                        </div>
                    ))}
                </HorizontalSection>

                <HorizontalSection title="Your Top Mixes">
                    {topMixes.map(item => (
                        <div key={item.id} className="w-[180px] md:w-[220px] flex-shrink-0">
                            <WorkoutCard {...item} />
                        </div>
                    ))}
                </HorizontalSection>

                <HorizontalSection title="Recently Played">
                    {recentlyPlayed.map(item => (
                        <div key={item.id} className="w-[180px] md:w-[220px] flex-shrink-0">
                            <WorkoutCard {...item} />
                        </div>
                    ))}
                </HorizontalSection>

                <HorizontalSection title="Recommended for You">
                    {recommended.map(item => (
                        <div key={item.id} className="w-[180px] md:w-[220px] flex-shrink-0">
                            <WorkoutCard {...item} />
                        </div>
                    ))}
                </HorizontalSection>
            </div>
        </main>
    );
};

export default Dashboard;
