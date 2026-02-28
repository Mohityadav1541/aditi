import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TYPING_MESSAGE = "Will you go to Goa with me and take a break from everything? ✈️";

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
        }, 65);

        return () => clearInterval(interval);
    }, [onTypingComplete]);

    // Blink cursor after typing is done
    useEffect(() => {
        if (!typingDone) return;
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, [typingDone]);

    return (
        <div className="hero" id="hero">
            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
            >
                Hey Ishika ❤️
            </motion.h1>

            <motion.p
                className="hero-sub"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                You approve leaves everyday... but today I want to apply for something truly special.
            </motion.p>

            <motion.div
                className="typing-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
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
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                {proposalApproved ? '💖 Approved! Let\'s Go!' : 'Approve My Proposal ✈️'}
            </motion.button>

            {proposalApproved && (
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    style={{
                        marginTop: '20px',
                        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                        color: 'var(--gold)',
                    }}
                >
                    🎉 Yaaay! Scroll down to pick our date! 🌴
                </motion.p>
            )}

            {/* Scroll indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>↓</span>
            </motion.div>
        </div>
    );
}
