import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetterSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="envelope-wrapper" id="letter">
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="closed"
                        className="envelope-closed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setIsOpen(true)}
                        exit={{ opacity: 0, scale: 0.85, rotateX: 80 }}
                        transition={{ duration: 0.45 }}
                    >
                        <motion.div
                            className="envelope-icon"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        >
                            💌
                        </motion.div>
                        <h3>A Private Note For Aditi</h3>
                        <p className="click-hint">Tap to break the seal...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        className="glass-card"
                        initial={{ opacity: 0, scale: 0.88, rotateX: -60 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 0.7, type: 'spring', bounce: 0.35 }}
                    >
                        <span className="section-kicker">FROM MY HEART</span>
                        <h2>For You, Aditi 💌</h2>
                        <div className="love-letter">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                            >
                                Dear <span className="highlight">Aditi</span>,
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.85 }}
                                style={{ marginTop: '14px' }}
                            >
                                There is something deeply calming and magnetic about you — the way you carry yourself,
                                the warmth in your eyes, and how effortlessly you make every moment feel worth remembering.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.35 }}
                                style={{ marginTop: '14px' }}
                            >
                                You deserve more than ordinary days. I want to take you to <span className="highlight">Goa</span> —
                                slow mornings, ocean breeze, late-night walks, and watching you smile under golden sunsets.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.85 }}
                                style={{ marginTop: '14px' }}
                            >
                                Just say <span className="highlight">yes</span>, and leave the rest to me. 🥂💖
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
