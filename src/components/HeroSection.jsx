import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TYPING_MESSAGE = "Aditi, pack your favorite heels & let's disappear to Goa together... ✈️🥂";

export default function HeroSection({ onApprove, proposalApproved, onTypingComplete }) {
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [typingDone, setTypingDone] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (indexRef.current < TYPING_MESSAGE.length) {
                setTypedText(TYPING_MESSAGE.slice(0, indexRef.current + 1));
                indexRef.current += 1;
            } else {
                clearInterval(interval);
                setTypingDone(true);
                onTypingComplete();
            }
        }, 55);

        return () => clearInterval(interval);
    }, [onTypingComplete]);

    useEffect(() => {
        if (!typingDone) return;
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, [typingDone]);

    return (
        <div className="hero" id="hero">
            <motion.span
                className="hero-eyebrow"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                ✨ An Exclusive Invitation ✨
            </motion.span>

            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: -35, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.35 }}
            >
                Hey Aditi ❤️
            </motion.h1>

            <motion.p
                className="hero-sub"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 0.92, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                You handle everything around you with so much poise and grace...
                tonight, let me spoil you with sunsets, sea breeze, and zero alarms.
            </motion.p>

            <motion.div
                className="typing-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {typedText}
                <span
                    className="typing-cursor"
                    style={{ opacity: typingDone ? (showCursor ? 1 : 0) : 1 }}
                />
            </motion.div>

            <motion.button
                className={`cta-btn ${!proposalApproved ? 'cta-btn-pulse' : ''}`}
                onClick={onApprove}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                {proposalApproved ? "💖 Sealed! Goa Awaits Us" : "Say Yes to Goa 🥂"}
            </motion.button>

            <motion.p
                className="hero-flirt-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 1.9 }}
            >
                {proposalApproved
                    ? "🎉 Scroll down — I saved my favorite compliments & our date below."
                    : "Warning: tapping comes with sunset cocktails & undivided attention."}
            </motion.p>

            <motion.a
                href="#style-muse"
                className="scroll-indicator"
                aria-label="Scroll down"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                ↓
            </motion.a>
        </div>
    );
}
