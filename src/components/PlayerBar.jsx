import React, { useState } from 'react';
import { Play, SkipBack, SkipForward, Volume2, ToggleRight, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PlayerBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFormGuideOn, setIsFormGuideOn] = useState(false);
    const [currentTime, setCurrentTime] = useState(260); // Start at 4:20
    const [duration] = useState(720); // 12:00
    const [volume, setVolume] = useState(70);

    // Format seconds to MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Simulate playback
    React.useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime((prev) => (prev < duration ? prev + 1 : 0));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, duration]);

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-6 left-64 right-0 w-auto flex justify-center z-50 pointer-events-none"
        >
            <div className="w-[90%] max-w-5xl h-24 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl px-8 flex items-center justify-between pointer-events-auto">
                {/* Left: Current Workout */}
                <div className="flex items-center gap-4 w-1/4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden relative shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2074&auto=format&fit=crop"
                            alt="Current"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm truncate">Lower Body Burn</h4>
                        <p className="text-xs text-gray-400">Set 2 of 4 • Squats</p>
                    </div>
                </div>

                {/* Center: Controls & Progress */}
                <div className="flex flex-col items-center justify-center flex-1 gap-2">
                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <SkipBack className="w-6 h-6 fill-current" />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-14 h-14 rounded-full bg-neon-coral flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,107,107,0.4)]"
                        >
                            {isPlaying ? (
                                <div className="w-4 h-4 bg-white rounded-sm" />
                            ) : (
                                <Play className="w-6 h-6 fill-white ml-1" />
                            )}
                        </button>

                        <button className="text-gray-400 hover:text-white transition-colors">
                            <SkipForward className="w-6 h-6 fill-current" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-md flex items-center gap-3 text-xs font-mono text-gray-400 group select-none">
                        <span>{formatTime(currentTime)}</span>
                        <div className="flex-1 h-1.5 relative flex items-center">
                            {/* Track Background */}
                            <div className="absolute inset-0 bg-white/10 rounded-full" />

                            {/* Fill */}
                            <div
                                className="absolute left-0 top-0 bottom-0 bg-electric-teal rounded-full"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            >
                                {/* Thumb */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform translate-x-1.5" />
                            </div>

                            {/* Range Input Overlay */}
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={(e) => setCurrentTime(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                        </div>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Right: Options */}
                <div className="flex items-center justify-end gap-6 w-1/4">
                    <div className="flex items-center gap-2 group relative">
                        <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        <div className="w-20 h-1 relative flex items-center">
                            {/* Track */}
                            <div className="absolute inset-0 bg-white/10 rounded-full" />
                            {/* Fill */}
                            <div
                                className="absolute left-0 top-0 bottom-0 bg-white rounded-full"
                                style={{ width: `${volume}%` }}
                            />

                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                        </div>
                    </div>

                    <div className="h-8 w-px bg-white/10" />

                    <button
                        onClick={() => setIsFormGuideOn(!isFormGuideOn)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all border ${isFormGuideOn
                            ? 'bg-electric-teal/10 border-electric-teal/50 text-electric-teal'
                            : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Mic2 className="w-4 h-4" />
                        <span className="text-xs font-bold">Form Guide</span>
                        <div className={`w-2 h-2 rounded-full ${isFormGuideOn ? 'bg-electric-teal shadow-[0_0_8px_rgba(78,205,196,0.8)]' : 'bg-gray-600'}`} />
                    </button>
                </div>

            </div>
        </motion.div>
    );
};

export default PlayerBar;
