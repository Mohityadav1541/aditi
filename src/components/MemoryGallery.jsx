import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
    { src: '/aditi1.jpg', alt: 'Aditi in Emerald', caption: 'Effortless charm in every glance ✨' },
    { src: '/aditi2.jpg', alt: 'Aditi in Ivory Saree', caption: 'Pure grace & timeless poise 🤍' },
    { src: '/aditi3.jpg', alt: 'Aditi in Crimson', caption: 'Warmth, elegance & a little fire ❤️' },
    { src: '/aditi4.jpg', alt: 'Aditi in Sunshine Yellow', caption: 'My favorite kind of sunshine 💛' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: 'easeOut' },
    },
};

export default function MemoryGallery() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <section id="gallery">
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <span className="section-kicker">FRAMES I ADORE</span>
                <h2>Four Shades of Aditi 💌</h2>
                <p>Tap any photo to open it full screen</p>

                <motion.div
                    className="gallery"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                >
                    {memories.map((memory, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            variants={itemVariants}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedPhoto(memory)}
                        >
                            <img src={memory.src} alt={memory.alt} loading="lazy" />
                            <p className="gallery-caption">{memory.caption}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Mobile-friendly Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', bounce: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="lightbox-close"
                                onClick={() => setSelectedPhoto(null)}
                                aria-label="Close photo"
                            >
                                ✕
                            </button>
                            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                            <p>{selectedPhoto.caption}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
