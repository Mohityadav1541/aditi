import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOOKS = [
    {
        id: 'emerald',
        label: 'Emerald',
        emoji: '💚',
        src: '/aditi1.jpg',
        title: 'Emerald Elegance',
        tag: 'Effortless Café Chic',
        fashionNote: 'Emerald drape, gold buckle detail, and that calm, magnetic confidence — you turned an ordinary café into a runway.',
        flirtLine: 'Honestly, the coffee didn’t stand a chance next to you. Next time, let me sit across from you and forget to check my phone.',
    },
    {
        id: 'ivory',
        label: 'Ivory',
        emoji: '🤍',
        src: '/aditi2.jpg',
        title: 'Ivory Grace',
        tag: 'Timeless Saree Muse',
        fashionNote: 'Soft ivory organza, pearl choker, and a smile warm enough to stop any conversation mid-sentence.',
        flirtLine: 'Some people wear sarees. You turn them into poetry — and I’m hopelessly caught between admiring your grace and your smile.',
    },
    {
        id: 'crimson',
        label: 'Crimson',
        emoji: '❤️',
        src: '/aditi3.jpg',
        title: 'Crimson Aura',
        tag: 'Festive Royale',
        fashionNote: 'Rich crimson, delicate gold embroidery, and eyes that hold both softness and quiet fire.',
        flirtLine: 'If elegance had a favorite color, it would still ask for your permission before stepping out.',
    },
    {
        id: 'sunlit',
        label: 'Sunlit',
        emoji: '💛',
        src: '/aditi4.jpg',
        title: 'Sunlit Charm',
        tag: 'Golden Hour Ready',
        fashionNote: 'Marigold florals, tinted shades, and effortless main-character energy under the afternoon sun.',
        flirtLine: 'Even Goa’s golden hour would look at you in this yellow and feel slightly underdressed.',
    },
];

export default function StyleMuseSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showFlirt, setShowFlirt] = useState(true);
    const current = LOOKS[activeIndex];

    const handleSelect = (idx) => {
        setActiveIndex(idx);
        setShowFlirt(true);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % LOOKS.length);
        setShowFlirt(true);
    };

    return (
        <section id="style-muse">
            <motion.div
                className="glass-card muse-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <span className="section-kicker">THE ADITI EDIT</span>
                <h2>Style, Grace &amp; Allure ✨</h2>
                <p className="section-sub">
                    Every look you wear has its own quiet magic — tap a shade to see why I can’t look away.
                </p>

                {/* Mobile-friendly pill selector */}
                <div className="look-pills" role="tablist" aria-label="Aditi fashion looks">
                    {LOOKS.map((look, idx) => (
                        <button
                            key={look.id}
                            role="tab"
                            aria-selected={idx === activeIndex}
                            className={`look-pill ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => handleSelect(idx)}
                        >
                            <span>{look.emoji}</span>
                            <span>{look.label}</span>
                        </button>
                    ))}
                </div>

                {/* Editorial Lookbook Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        className="muse-stage"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                        <div className="muse-photo-wrap" onClick={handleNext}>
                            <img
                                src={current.src}
                                alt={current.title}
                                className="muse-photo"
                            />
                            <span className="muse-badge">{current.tag}</span>
                            <span className="muse-tap-hint">Tap photo for next look →</span>
                        </div>

                        <div className="muse-copy">
                            <h3>{current.title}</h3>
                            <p className="muse-fashion-note">{current.fashionNote}</p>

                            <button
                                type="button"
                                className="flirt-reveal-btn"
                                onClick={() => setShowFlirt((prev) => !prev)}
                            >
                                {showFlirt ? '💋 Whispered Note' : '💋 Tap for My Confession'}
                            </button>

                            <AnimatePresence>
                                {showFlirt && (
                                    <motion.blockquote
                                        className="muse-flirt-quote"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        “{current.flirtLine}”
                                    </motion.blockquote>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

