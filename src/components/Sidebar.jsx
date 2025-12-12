import React from 'react';
import { Home, Compass, Calendar, Activity, User, Settings } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: Home, label: 'Home', active: false },
        { icon: Compass, label: 'Discover', active: true },
        { icon: Calendar, label: 'My Plans', active: false },
        { icon: Activity, label: 'Body Stats', active: false },
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-[#121212] border-r border-white/5 flex flex-col z-40">
            {/* Branding */}
            <div className="p-8 pb-4">
                <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-8 h-8 text-electric-teal" />
                    <h1 className="text-3xl font-bold tracking-tight text-white">Tempo</h1>
                </div>
                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase ml-1">Your Body. Your Beat.</p>
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

            {/* User Profile */}
            <div className="p-4 border-t border-white/5 m-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-coral to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        AS
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">Alex Striner</h4>
                        <p className="text-xs text-gray-400 truncate">Free Plan</p>
                    </div>
                    <Settings className="w-4 h-4 text-gray-500 hover:text-white transition-colors" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
