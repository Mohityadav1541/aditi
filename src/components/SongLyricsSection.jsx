import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const verses = [
    {
        lines: [
            'Is katara too muje pyaar kar',
            'Jise kabhi naa main sakun phir bhula',
            'Zindagi laae hamein yahaan',
            'Koi iraadaa to rahaa hoga bhala',
        ],
        emoji: '💫',
    },
    {
        lines: [
            'Ki darkhaast hai ye jo aayi raat hai ye',
            'Too meri banhon mein duniyaa bhula de',
            'Jo ab lamhaat hain ye, bade hee khaas hain ye',
            'Too meri banhon mein duniyaa bhula de',
        ],
        emoji: '🌙',
        highlight: true,
    },
    {
        lines: [
            'Raah mein mere saath chal too',
            'Thame meraa haath chal tu',
            'Vakt jitna bhee ho hasil',
            'Saara mere naam kar too',
        ],
        emoji: '🤝',
    },
    {
        lines: [
            'Ki armaan hain ye guzarish jaan hai ye',
            'Too meri banhon mein duniyaa bhula de',
            'Jo ab lamhaat hain ye, bade hee khaas hain ye',
            'Too meri banhon mein duniyaa bhula de',
        ],
        emoji: '❤️',
        highlight: true,
    },
    {
        lines: [
            'Naqsh lamahon pe aise banaaen',
            'Muddaton se bhee vo mit naa paaen',
            'Too meri banhon mein duniyaa bhula de',
        ],
        emoji: '✨',
    },
    {
        lines: [
            'Tujhse to hoon main yoon bahut mutasir',
            'Par kya karoon? Main hoon ek musfir',
            'Kaisee khushee hai jismein nami hai',
            'Jaane too ye, ya jaane naa?',
        ],
        emoji: '🥺',
    },
    {
        lines: [
            'Too meri banhon mein duniyaa bhula de',
            'Bhula de, bhula de...',
        ],
        emoji: '💖',
        highlight: true,
    },
];

export default function SongLyricsSection({ musicPlaying, onToggleMusic }) {
    const [activeVerse, setActiveVerse] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setActiveVerse((prev) => (prev + 1) % verses.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [autoPlay]);

    return (
        <section>
            <motion.div
                className="glass-card song-section"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2>Her Favourite Song 🎵</h2>
                <p className="song-title">Darkhaast — Arijit Singh</p>
                {onToggleMusic && (
                    <button
                        type="button"
                        className="song-play-btn"
                        onClick={onToggleMusic}
                    >
                        {musicPlaying ? '⏸ Pause Track' : '▶ Play Darkhaast'}
                    </button>
                )}

                {/* Animated verse display */}
                <div className="lyrics-display">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeVerse}
                            className={`lyrics-verse ${verses[activeVerse].highlight ? 'lyrics-highlight' : ''}`}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="verse-emoji">{verses[activeVerse].emoji}</span>
                            {verses[activeVerse].lines.map((line, i) => (
                                <motion.p
                                    key={i}
                                    className="lyrics-line"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.4 }}
                                >
                                    {line}
                                </motion.p>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Verse dots navigation */}
                <div className="lyrics-dots">
                    {verses.map((_, index) => (
                        <button
                            key={index}
                            className={`lyrics-dot ${index === activeVerse ? 'active' : ''}`}
                            onClick={() => {
                                setActiveVerse(index);
                                setAutoPlay(false);
                            }}
                            aria-label={`Verse ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Full lyrics scroll */}
                <motion.details
                    className="full-lyrics"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <summary className="full-lyrics-toggle">
                        Read Full Lyrics 📜
                    </summary>
                    <div className="full-lyrics-content">
                        {verses.map((verse, vi) => (
                            <div key={vi} className={`full-verse ${verse.highlight ? 'full-verse-highlight' : ''}`}>
                                {verse.lines.map((line, li) => (
                                    <p key={li}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.details>
            </motion.div>
        </section>
    );
}
