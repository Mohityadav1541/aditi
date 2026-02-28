import { motion } from 'framer-motion';

const memories = [
    { src: '/ishika1.jpg', alt: 'Our Memory 1', caption: 'Every moment with you ✨' },
    { src: '/ishika2.jpg', alt: 'Our Memory 2', caption: 'Is pure magic 💫' },
    { src: '/ishika1.jpg', alt: 'Our Memory 3', caption: 'And I want more 💖' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function MemoryGallery() {
    return (
        <section>
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2>Our Memories 💌</h2>
                <p>Every picture tells our story...</p>

                <motion.div
                    className="gallery"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                >
                    {memories.map((memory, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <img src={memory.src} alt={memory.alt} loading="lazy" />
                            <p
                                style={{
                                    marginTop: '10px',
                                    fontFamily: 'var(--font-cursive)',
                                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                                    opacity: 0.8,
                                }}
                            >
                                {memory.caption}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
