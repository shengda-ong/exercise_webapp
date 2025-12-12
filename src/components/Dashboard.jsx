import React from 'react';
import WorkoutCard from './WorkoutCard';
import { Search, Bell, Mic } from 'lucide-react';

const Dashboard = () => {
    const workouts = [
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
            title: "Yoga Flow",
            duration: 45,
            intensity: "Low",
            instructor: "Emma W.",
            image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 4,
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
        }
    ];

    return (
        <main className="flex-1 ml-64 p-8 lg:p-12 pb-32 min-h-screen">
            {/* Top Header */}
            <header className="flex justify-between items-center mb-10">
                <div>
                    {/* Mobile Menu Trigger would go here */}
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl mx-8 relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500 group-focus-within:text-neon-coral transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-12 py-3.5 bg-[#1E1E1E] border border-transparent focus:border-neon-coral/50 rounded-2xl leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-0 focus:bg-[#252525] transition-all shadow-inner"
                        placeholder="Search workouts, trainers, music..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer hover:text-white text-gray-500">
                        <Mic className="h-5 w-5" />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative text-gray-400 hover:text-white transition-colors">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-0 right-0.5 block h-2.5 w-2.5 rounded-full bg-neon-coral ring-2 ring-[#121212]" />
                    </button>
                </div>
            </header>

            {/* Featured Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Editor's Pick</h2>
                <div className="relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer border border-white/5">
                    <img
                        src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=2070&auto=format&fit=crop"
                        alt="Featured"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-10 max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-neon-coral/20 text-neon-coral border border-neon-coral/30 text-xs font-bold tracking-wider uppercase mb-4">New Series</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Ignite Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-coral to-white">Summer Session</span></h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg">Join top trainer Sarah K. for a 4-week high-intensity program designed to boost your endurance.</p>
                        <button className="px-8 py-3.5 bg-neon-coral hover:bg-neon-coral/90 text-white text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-all transform hover:scale-105 active:scale-95">
                            Start Program
                        </button>
                    </div>
                </div>
            </section>

            {/* Workouts Grid */}
            <section>
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-2xl font-bold text-white">Recommended for You</h2>
                    <button className="text-sm text-electric-teal hover:text-white transition-colors font-medium">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {workouts.map(workout => (
                        <WorkoutCard key={workout.id} {...workout} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
