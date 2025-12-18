import React from 'react';
import { Home, Compass, Calendar, Activity, User, Settings } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: Home, label: 'Home', active: true },
        { icon: Calendar, label: 'Workout Plan', active: false },
        { icon: Activity, label: 'Progress', active: false },
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-[#121212] border-r border-white/5 flex flex-col z-40">
            {/* Branding */}
            {/* Branding */}
            <div className="p-8 pb-4">
                <a href="/" className="block group">
                    <div className="flex items-center gap-2 mb-1 group-hover:opacity-80 transition-opacity">
                        <Activity className="w-8 h-8 text-electric-teal" />
                        <h1 className="text-3xl font-bold tracking-tight text-white">Tempo</h1>
                    </div>
                    <p className="text-xs text-gray-500 font-medium tracking-wider uppercase ml-1">Your Body. Your Beat.</p>
                </a>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${item.active
                            ? 'bg-gradient-to-r from-electric-teal/20 to-transparent text-electric-teal'
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-electric-teal' : 'text-gray-400 group-hover:text-white'}`} />
                        <span className="font-medium">{item.label}</span>
                        {item.active && (
                            <div className="ml-auto w-1 h-1 rounded-full bg-electric-teal shadow-[0_0_8px_rgba(78,205,196,0.8)]" />
                        )}
                    </button>
                ))}
            </nav>

            {/* General Settings */}
            <div className="p-4 border-t border-white/5">
                <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-gray-400 hover:bg-white/5 hover:text-white group">
                    <Settings className="w-5 h-5 group-hover:text-white transition-colors" />
                    <span className="font-medium">Settings & Help</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
