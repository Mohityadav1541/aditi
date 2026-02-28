import { motion } from 'framer-motion';

// Photo showcase with romantic imagery matching Ishika's vibe
// Photo 1: Silhouette with fairy lights (matches her first photo)
// Photo 2: Artistic portrait (matches her second photo)
const ishikaPhotos = [
    {
        src: '/ishika1.jpg',
        caption: 'The way you light up my world ✨',
        rotate: -3,
    },
    {
        src: '/ishika2.jpg',
        caption: '"Mere rhoge kya?" 💛',
        rotate: 3,
    },
];

export default function PhotoShowcase() {
    return (
        <section className="photo-showcase-section">
            <motion.div
                className="glass-card photo-showcase-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2>You... Just You 💕</h2>
                <p>The most beautiful person in my universe</p>

                <div className="photo-showcase-grid">
                    {ishikaPhotos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className="showcase-frame"
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                                rotate: photo.rotate * 3,
                                y: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: photo.rotate,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.4,
                                type: 'spring',
                                bounce: 0.3,
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                boxShadow: '0 30px 80px rgba(255, 110, 196, 0.5)',
                                transition: { duration: 0.4 },
                            }}
                        >
                            <div className="showcase-glow" />
                            <img src={photo.src} alt={photo.caption} />
                            <motion.div
                                className="showcase-caption"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + index * 0.4, duration: 0.6 }}
                            >
                                <p>{photo.caption}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Heartbeat connection line between photos */}
                <motion.div
                    className="heart-connection"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 }}
                >
                    <span className="connection-heart">💕</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
