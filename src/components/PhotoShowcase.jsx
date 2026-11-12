import { motion } from 'framer-motion';

const aditiPhotos = [
    {
        src: '/aditi2.jpg',
        caption: 'Grace that turns heads effortlessly ✨',
        rotate: -2.5,
    },
    {
        src: '/aditi1.jpg',
        caption: '"Mere rahoge kya?" 💛',
        rotate: 2.5,
    },
];

export default function PhotoShowcase() {
    return (
        <section className="photo-showcase-section">
            <motion.div
                className="glass-card photo-showcase-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
            >
                <span className="section-kicker">MY FAVORITE VIEW</span>
                <h2>You... Just You 💕</h2>
                <p>No filter, no occasion needed — you carry magic in every frame</p>

                <div className="photo-showcase-grid">
                    {aditiPhotos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className="showcase-frame"
                            initial={{
                                opacity: 0,
                                scale: 0.85,
                                rotate: photo.rotate * 2,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: photo.rotate,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.25,
                                type: 'spring',
                                bounce: 0.3,
                            }}
                            whileHover={{
                                scale: 1.04,
                                rotate: 0,
                                boxShadow: '0 24px 64px rgba(232, 93, 158, 0.45)',
                                transition: { duration: 0.35 },
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="showcase-glow" />
                            <img src={photo.src} alt={photo.caption} />
                            <motion.div
                                className="showcase-caption"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.25, duration: 0.5 }}
                            >
                                <p>{photo.caption}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="heart-connection"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    <span className="connection-heart">💕</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
