import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLIRT_LINES = [
    {
        tag: 'Late Night Thought',
        line: 'You have that rare kind of beauty where the more I talk to you, the harder it is to stop looking at you.',
    },
    {
        tag: 'Unfiltered Truth',
        line: 'You’re the perfect mix of calm maturity and dangerous charm. How am I supposed to focus when you smile like that?',
    },
    {
        tag: 'Goa Promise',
        line: 'Let’s make a deal: you bring that lethal smile, I’ll bring the sunset wine, the playlist, and all my attention.',
    },
    {
        tag: 'Quietly Yours',
        line: 'If I had to choose between a five-star resort and five quiet minutes holding your hand by the waves — I’d pick your hand every time.',
    },
    {
        tag: 'Just You',
        line: 'I don’t usually believe in luck, yet somehow my favorite part of the day is just seeing your name light up my screen.',
    },
];

const DATE_VIBES = [
    {
        id: 'dinner',
        emoji: '🕯️',
        label: 'Candlelit Beach Dinner',
        promise: 'A quiet table right by the tide, warm fairy lights, your favorite dessert, and me shamelessly admiring you all evening.',
    },
    {
        id: 'sunset',
        emoji: '🥂',
        label: 'Sunset Cruise & Wine',
        promise: 'Golden sky, ocean breeze in your hair, chilled glasses clinking, and zero rush to be anywhere else.',
    },
    {
        id: 'walk',
        emoji: '🌊',
        label: 'Barefoot Midnight Walk',
        promise: 'Heels in one hand, my hand in yours, waves at our ankles, and conversations that last till 2 AM.',
    },
    {
        id: 'coffee',
        emoji: '☕',
        label: 'Sea-View Morning Coffee',
        promise: 'Slow mornings on a breezy balcony, fresh coffee, soft music, and waking up with nowhere to hurry.',
    },
];

export default function FlirtDeckSection() {
    const [lineIndex, setLineIndex] = useState(0);
    const [blushCount, setBlushCount] = useState(0);
    const [selectedVibe, setSelectedVibe] = useState(DATE_VIBES[0].id);

    const activeLine = FLIRT_LINES[lineIndex];
    const activeVibe = DATE_VIBES.find((v) => v.id === selectedVibe) || DATE_VIBES[0];

    const nextLine = () => {
        setLineIndex((prev) => (prev + 1) % FLIRT_LINES.length);
    };

    const handleBlush = () => {
        setBlushCount((prev) => prev + 1);
    };

    return (
        <section id="flirt-deck">
            <motion.div
                className="glass-card flirt-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <span className="section-kicker">JUST BETWEEN US</span>
                <h2>A Few Things I’ve Wanted To Say 💋</h2>
                <p className="section-sub">
                    Tap the card whenever you want a little reminder of how effortlessly you impress me.
                </p>

                {/* Interactive Flirt Card */}
                <div className="whisper-box" onClick={nextLine} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && nextLine()}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lineIndex}
                            initial={{ opacity: 0, y: 14, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -14, scale: 0.97 }}
                            transition={{ duration: 0.3 }}
                            className="whisper-inner"
                        >
                            <span className="whisper-tag">{activeLine.tag} • {lineIndex + 1}/{FLIRT_LINES.length}</span>
                            <p className="whisper-text">“{activeLine.line}”</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="whisper-actions">
                    <motion.button
                        type="button"
                        className="whisper-btn"
                        whileTap={{ scale: 0.95 }}
                        onClick={nextLine}
                    >
                        Next Line 💌
                    </motion.button>

                    <motion.button
                        type="button"
                        className="blush-btn"
                        whileTap={{ scale: 0.92 }}
                        onClick={handleBlush}
                    >
                        <span>{blushCount > 0 ? '🥰 Made Me Smile' : '😊 Did That Work?'}</span>
                        {blushCount > 0 && <span className="blush-badge">{blushCount}</span>}
                    </motion.button>
                </div>

                {/* Date Vibe Picker */}
                <div className="vibe-divider" />
                <h3 className="vibe-heading">Pick Your Goa Mood, Aditi 🌴</h3>
                <div className="vibe-grid">
                    {DATE_VIBES.map((vibe) => (
                        <button
                            key={vibe.id}
                            type="button"
                            className={`vibe-chip ${selectedVibe === vibe.id ? 'active' : ''}`}
                            onClick={() => setSelectedVibe(vibe.id)}
                        >
                            <span className="vibe-emoji">{vibe.emoji}</span>
                            <span>{vibe.label}</span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeVibe.id}
                        className="vibe-promise"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {activeVibe.promise}
                    </motion.p>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

