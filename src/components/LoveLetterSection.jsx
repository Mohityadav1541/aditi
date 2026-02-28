import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetterSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="envelope-wrapper">
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="closed"
                        className="envelope-closed"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => setIsOpen(true)}
                        exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="envelope-icon"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            💌
                        </motion.div>
                        <h3>A Letter Just For You</h3>
                        <p className="click-hint">Tap to open...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        className="glass-card"
                        initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    >
                        <h2>A Little Note For You 💌</h2>
                        <div className="love-letter">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                Dear <span className="highlight">Ishika</span>,
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                style={{ marginTop: '15px' }}
                            >
                                You make every ordinary day feel extraordinary.
                                From your smile to your laugh — everything about you is magic.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.8 }}
                                style={{ marginTop: '15px' }}
                            >
                                I want to walk on the beaches of <span className="highlight">Goa</span> with you,
                                watch the sunset together, and create memories that last forever.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2.4 }}
                                style={{ marginTop: '15px' }}
                            >
                                So... will you say <span className="highlight">yes</span>? 🥺💖
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
