import React from 'react';
import { MdOutlineRepeat } from 'react-icons/md';
import { PiBrainBold } from 'react-icons/pi';
import { BsPencilSquare, BsCalendarCheck } from 'react-icons/bs';
import { LuAlarmClock } from 'react-icons/lu';

import { GiFrog } from 'react-icons/gi';

const tips = [
    { number: "01", title: "Spaced Repetition", desc: "Review core concepts at increasing intervals to improve long-term retention.", icon: MdOutlineRepeat, tilt: '-2deg' },
    { number: "02", title: "The Feynman Technique", desc: "Explain complex topics in simple terms to identify gaps in your knowledge.", icon: PiBrainBold, tilt: '2deg' },
    { number: "03", title: "Active Recall", desc: "Test yourself frequently rather than passively re-reading course materials.", icon: BsPencilSquare, tilt: '-1.5deg' },
    { number: "04", title: "Time Blocking", desc: "Dedicate specific chunks of your day to focused learning without distractions.", icon: LuAlarmClock, tilt: '1.5deg' },
    { number: "05", title: "Pomodoro 2.0", desc: "50 mins work / 10 mins rest for deep focus sessions that maximize output.", icon: LuAlarmClock, tilt: '-2deg' },
    { number: "06", title: "Eat the Frog", desc: "Complete your most difficult learning task first thing in the morning.", icon: GiFrog, tilt: '0deg' },
    { number: "07", title: "Weekly Review", desc: "Spend 30 mins every Sunday planning your learning goals for the week ahead.", icon: BsCalendarCheck, tilt: '2deg' },
];

const NoteCard = ({ tip }) => {
    const Icon = tip.icon;
    return (
        <div style={{ transform: `rotate(${tip.tilt})` }}>
            {/* Spiral holes */}
            <div className="flex justify-around px-3">
                {Array.from({ length: 10 }).map((_, j) => (
                    <div
                        key={j}
                        className="w-3.5 h-3.5 rounded-full border-2 border-yellow-700/50 bg-[#c9b115]"
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.4)' }}
                    />
                ))}
            </div>

            {/* Wire bar */}
            <div
                className="h-2 w-full"
                style={{
                    background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 6px, #b8860b 6px, #b8860b 10px)',
                }}
            />

            {/* Paper */}
            <div
                className="relative px-6 pt-5 pb-6 rounded-b-xl"
                style={{
                    backgroundColor: '#F5F5F7',
                    boxShadow: '4px 8px 24px rgba(0,0,0,0.35)',
                }}
            >
                {/* Ruled lines */}
                <div
                    className="absolute inset-0 rounded-b-xl pointer-events-none overflow-hidden"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            180deg,
                            transparent 0px,
                            transparent 23px,
                            rgba(100,140,200,0.15) 23px,
                            rgba(100,140,200,0.15) 24px
                        )`,
                        backgroundPositionY: '32px',
                    }}
                />
                {/* Red margin */}
                <div
                    className="absolute top-0 bottom-0 left-10 w-px"
                    style={{ backgroundColor: 'rgba(220,80,80,0.3)' }}
                />

                <div className="relative z-10 pl-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black tracking-widest" style={{ color: '#2d7a3a' }}>
                            {tip.number}
                        </span>
                        <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8f5e9' }}>
                            <Icon size={18} color="#2d7a3a" />
                        </span>
                    </div>
                    <h3 className="text-sm font-black mb-1.5 leading-snug" style={{ color: '#1a5c25', fontFamily: 'Georgia, serif' }}>
                        {tip.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#3a3828', fontFamily: 'Georgia, serif' }}>
                        {tip.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Learning = () => {
    return (
        <section
            className="relative min-h-screen py-20 px-4"
            style={{
                background: 'linear-gradient(160deg, #9c6b42 0%, #7a4f2e 40%, #8d5c38 70%, #6b3f22 100%)',
            }}
        >
            {/* Wood grain */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, rgba(255,255,255,0.015) 1px, transparent 2px, transparent 8px)`,
                }}
            />

            <div className="relative max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
                        Learning Tips
                    </h2>
                    <p className="text-amber-200 text-sm mt-2 opacity-80">
                        Master any subject with these proven techniques
                    </p>
                </div>

                {/* ── Row 1: col1 + EMPTY + col3 ── */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <NoteCard tip={tips[0]} />
                    <div /> {/* empty middle */}
                    <NoteCard tip={tips[1]} />
                </div>

                {/* ── Row 2: col1 + EMPTY + col3 ── */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <NoteCard tip={tips[2]} />
                    <div /> {/* empty middle */}
                    <NoteCard tip={tips[3]} />
                </div>

                {/* ── Row 3: all 3 cols ── */}
                <div className="grid grid-cols-3 gap-4">
                    <NoteCard tip={tips[4]} />
                    <NoteCard tip={tips[5]} />
                    <NoteCard tip={tips[6]} />
                </div>

            </div>
        </section>
    );
};

export default Learning;