import React from 'react';
import { Play, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkoutCard = ({ title, duration, intensity, image, instructor }) => {
    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {duration} min
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-neon-coral flex items-center gap-1.5">
                            <Zap className="w-3 h-3" />
                            {intensity}
                        </span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-teal transition-colors leading-tight">{title}</h3>
                    <p className="text-sm text-gray-300 mb-0">{instructor}</p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-neon-coral flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.6)] transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WorkoutCard;
