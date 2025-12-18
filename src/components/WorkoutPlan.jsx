import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, RefreshCw } from 'lucide-react';

const WorkoutPlan = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const todayRef = useRef(null);

    // Mock data for workouts
    const scheduledWorkouts = [
        { date: 5, title: 'Upper Body Power', type: 'Strength', duration: '45 min', color: 'bg-blue-500' },
        { date: 8, title: 'HIIT Cardio', type: 'Cardio', duration: '30 min', color: 'bg-neon-coral' },
        { date: 12, title: 'Full Body Tone', type: 'Strength', duration: '60 min', color: 'bg-purple-500' },
        { date: 15, title: 'Yoga Flow', type: 'Flexibility', duration: '45 min', color: 'bg-electric-teal' },
        { date: 19, title: 'Leg Day', type: 'Strength', duration: '50 min', color: 'bg-blue-500' },
        { date: 22, title: 'Core Crusher', type: 'Core', duration: '20 min', color: 'bg-orange-500' },
        { date: 26, title: 'HIIT Cardio', type: 'Cardio', duration: '30 min', color: 'bg-neon-coral' },
    ];

    const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Helper to identify today
    const isToday = (day) => {
        const today = new Date();
        return day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();
    };

    // Scroll to today when month changes or on mount
    useEffect(() => {
        if (todayRef.current) {
            todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentDate]);

    const generateCalendarDays = () => {
        const days = [];
        const totalSlots = 42; // Keep 42 slots layout for consistency

        // Empty slots for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-prev-${i}`} className="bg-[#1a1a1a] border border-[#2a2a2a] opacity-50 min-h-[5rem]"></div>);
        }

        // Days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const hasWorkout = scheduledWorkouts.find(w => w.date === day);
            const today = isToday(day);

            days.push(
                <div
                    key={day}
                    ref={today ? todayRef : null}
                    className={`border border-white/5 p-2 transition-colors group relative flex flex-col min-h-[5rem] ${today ? 'bg-electric-teal/5 border-electric-teal/50' : 'bg-[#1E1E1E] hover:bg-[#252525]'}`}
                >
                    <div className="flex justify-between items-start">
                        <span className={`text-md font-medium ${today ? 'text-electric-teal' : (hasWorkout ? 'text-white' : 'text-gray-500')}`}>
                            {day}
                        </span>
                        {today && <span className="text-[10px] font-bold text-electric-teal uppercase tracking-wider">Today</span>}
                    </div>

                    {hasWorkout && (
                        <div className={`mt-2 p-1.5 rounded-lg ${hasWorkout.color}/20 border border-${hasWorkout.color.replace('bg-', '')}/30 cursor-pointer hover:opacity-80 transition-opacity`}>
                            <p className={`text-[10px] font-bold ${hasWorkout.color.replace('bg-', 'text-')} truncate`}>{hasWorkout.title}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                                <Clock className="w-2.5 h-2.5 text-gray-400" />
                                <span className="text-[9px] text-gray-400">{hasWorkout.duration}</span>
                            </div>
                        </div>
                    )}

                    {/* Add button on hover */}
                    <button className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all font-bold pb-0.5 text-xs">
                        +
                    </button>
                </div>
            );
        }

        // Fill remaining slots
        const remainingSlots = totalSlots - (firstDayOfMonth + daysInMonth);
        for (let i = 0; i < remainingSlots; i++) {
            days.push(<div key={`empty-next-${i}`} className="bg-[#1a1a1a] border border-[#2a2a2a] opacity-30 min-h-[5rem]"></div>);
        }

        return days;
    };

    return (
        <main className="flex-1 ml-64 p-8 lg:p-10 h-screen flex flex-col bg-gradient-to-b from-[#1E1E1E] to-[#121212] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 flex-shrink-0">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-1">Workout Plan</h1>
                    <p className="text-gray-400 text-sm">Track your progress and schedule upcoming sessions.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#333] text-gray-300 rounded-lg flex items-center gap-2 transition-colors border border-white/5">
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm">Sync to Calendar</span>
                    </button>
                    <button className="px-4 py-2 bg-electric-teal text-black font-bold rounded-lg hover:bg-teal-400 transition-colors flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm">Schedule Workout</span>
                    </button>
                </div>
            </div>

            {/* Calendar Controls */}
            <div className="flex items-center justify-between mb-4 bg-[#1E1E1E] p-3 rounded-xl border border-white/5 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-bold text-white w-40 text-center">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">Strength</span>
                    <span className="px-3 py-1 rounded-full bg-neon-coral/20 text-neon-coral text-xs font-medium border border-neon-coral/30">Cardio</span>
                    <span className="px-3 py-1 rounded-full bg-electric-teal/20 text-electric-teal text-xs font-medium border border-electric-teal/30">Flexibility</span>
                </div>
            </div>

            {/* Calendar Grid Container (Scrollable) */}
            <div className="flex-1 bg-white/5 rounded-2xl overflow-hidden border border-white/5 shadow-xl min-h-0 flex flex-col">
                {/* Weekday Headers (Fixed) */}
                <div className="grid grid-cols-7 border-b border-white/5 bg-[#1a1a1a] flex-shrink-0">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="p-3 text-center text-sm font-semibold text-gray-400">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Scrollable Days Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-7 auto-rows-fr">
                        {generateCalendarDays()}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutPlan;
