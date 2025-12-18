import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import HorizontalSection from './HorizontalSection';
import { Search, Bell, Mic, Settings } from 'lucide-react';

const Dashboard = () => {
    const [greeting, setGreeting] = useState('Good Morning');
    const [user, setUser] = useState({ name: "Sheng Da Ong" }); // Placeholder for user data

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    const recentlyPlayed = [
        {
            id: 'rp1',
            title: "Full Body Crush",
            duration: 45,
            intensity: "High",
            instructor: "Sarah K.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'rp2',
            title: "Morning Yoga",
            duration: 20,
            intensity: "Low",
            instructor: "Emma W.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'rp3',
            title: "HIIT Tabata",
            duration: 15,
            intensity: "High",
            instructor: "Mike T.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'rp4',
            title: "Core Blaster",
            duration: 10,
            intensity: "Med",
            instructor: "Jenna R.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'rp5',
            title: "Evening Stretch",
            duration: 15,
            intensity: "Low",
            instructor: "Alice M.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'rp6',
            title: "Quick HIIT",
            duration: 12,
            intensity: "High",
            instructor: "Tom B.",
            image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074&auto=format&fit=crop"
        }

    ];

    const madeForYou = [
        {
            id: 'mf1',
            title: "Daily Mix 1",
            duration: 30,
            intensity: "Med",
            instructor: "Mixed for You",
            image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'mf2',
            title: "Discover Weekly",
            duration: 45,
            intensity: "Var",
            instructor: "New & Fresh",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'mf3',
            title: "Release Radar",
            duration: 25,
            intensity: "High",
            instructor: "Latest Drops",
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'mf4',
            title: "On Repeat",
            duration: 60,
            intensity: "Low",
            instructor: "Your Faves",
            image: "https://images.unsplash.com/photo-1534258936925-c48947b6bf02?q=80&w=2066&auto=format&fit=crop"
        },
        {
            id: 'mf5',
            title: "Late Night Lo-Fi",
            duration: 50,
            intensity: "Low",
            instructor: "Chill Beats",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'mf6',
            title: "Workout Tapes",
            duration: 40,
            intensity: "High",
            instructor: "Pump It",
            image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
        }
    ];

    const topMixes = [
        {
            id: 'tm1',
            title: "Pop Mix",
            duration: 20,
            intensity: "Med",
            instructor: "Hits",
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'tm2',
            title: "Rock Classics",
            duration: 35,
            intensity: "High",
            instructor: "Legends",
            image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'tm3',
            title: "Chill Vibes",
            duration: 40,
            intensity: "Low",
            instructor: "Relax",
            image: "https://images.unsplash.com/photo-1445985543470-4102966bf35f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'tm4',
            title: "Focus Flow",
            duration: 50,
            intensity: "Low",
            instructor: "Deep Work",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'tm5',
            title: "Metal Mix",
            duration: 25,
            intensity: "High",
            instructor: "Intense",
            image: "https://images.unsplash.com/photo-1520638023360-6def43369781?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'tm6',
            title: "Indie Gems",
            duration: 35,
            intensity: "Med",
            instructor: "Discovery",
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const recommended = [
        {
            id: 1,
            title: "HIIT Blast",
            duration: 20,
            intensity: "High",
            instructor: "Sarah K.",
            image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Core Crusher",
            duration: 15,
            intensity: "Med",
            instructor: "Mike T.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Upper Power",
            duration: 30,
            intensity: "High",
            instructor: "Alex S.",
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Leg Day",
            duration: 40,
            intensity: "High",
            instructor: "Jenna R.",
            image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Cardio Kick",
            duration: 25,
            intensity: "High",
            instructor: "David L.",
            image: "https://images.unsplash.com/photo-1534258936925-c48947b6bf02?q=80&w=2066&auto=format&fit=crop"
        },
        {
            id: 7,
            title: "Power Yoga",
            duration: 60,
            intensity: "Med",
            instructor: "Anna K.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="flex-1 ml-64 p-8 lg:p-10 pb-32 min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#121212]">
            {/* Top Header */}
            <header className="flex justify-between items-center mb-8 sticky top-0 z-30 py-4 -mx-8 px-8 bg-[#1E1E1E]/95 backdrop-blur-xl transition-all border-b border-white/5">
                <div className="flex items-center gap-4">
                    <button className="bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                    {/* Search Bar - smaller and more integrated if wanted, or kept prominent */}
                    <div className="relative group ml-4 w-96 hidden md:block">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-white transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-4 py-2.5 bg-[#2A2A2A] border-0 rounded-full leading-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                            placeholder="What do you want to play?"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-4 py-1.5 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform">Explore Premium</button>
                    <button className="text-gray-400 hover:text-white transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-neon-coral ring-2 ring-[#1E1E1E]" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-coral to-electric-teal p-[2px] cursor-pointer hover:scale-105 transition-transform">
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
