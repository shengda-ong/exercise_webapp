import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HorizontalSection = ({ title, bgGradient, children }) => {
    const scrollContainerRef = useRef(null);
    const [showControls, setShowControls] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.8;
            const newScrollPos = direction === 'left'
                ? Math.max(0, container.scrollLeft - scrollAmount)
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollPos,
                behavior: 'smooth'
            });
            setScrollPos(newScrollPos);
        }
    };

    return (
        <section
            className="mb-8 relative group/section"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <div className="flex justify-between items-end mb-4 px-8">
                <h2 className="text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer decoration-white/20 underline-offset-4">{title}</h2>
                <button className="text-xs font-bold text-neutral-400 hover:text-white uppercase tracking-wider transition-colors">Show All</button>
            </div>

            <div className="relative group">
                {/* Left Button */}
                <AnimatePresence>
                    {showControls && (
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            onClick={() => handleScroll('left')}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-neutral-800 text-white p-2 rounded-full shadow-lg border border-white/10 ml-2 backdrop-blur-sm ${scrollPos <= 0 ? 'hidden' : ''}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onScroll={(e) => setScrollPos(e.currentTarget.scrollLeft)}
                >
                    {children}
                </div>

                {/* Right Button */}
                <AnimatePresence>
                    {showControls && (
                        <motion.button
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            onClick={() => handleScroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-neutral-800 text-white p-2 rounded-full shadow-lg border border-white/10 mr-2 backdrop-blur-sm"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Optional Background Gradient for section separation */}
            {bgGradient && (
                <div className={`absolute -inset-4 -z-10 bg-gradient-to-b ${bgGradient} opacity-5 rounded-3xl blur-2xl pointer-events-none`} />
            )}
        </section>
    );
};

export default HorizontalSection;
