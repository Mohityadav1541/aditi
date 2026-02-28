import { motion } from 'framer-motion';

const goaVideos = [
    {
        youtubeId: 'dQw4w9WgXcQ', // placeholder — will use poster images instead
        poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        title: 'Golden Sunset Beach 🌅',
        description: 'Imagine us walking here at sunset...',
    },
    {
        poster: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
        title: 'Aerial Paradise 🏝️',
        description: 'Our view from the sky...',
    },
    {
        poster: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80',
        title: 'Palm Tree Vibes 🌴',
        description: 'Swaying palms, just like my heart for you...',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export default function GoaBeachesSection() {
    return (
        <section>
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2>Our Dream Destination 🏖️</h2>
                <p>These beaches are waiting for us, Ishika...</p>

                <motion.div
                    className="video-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                >
                    {goaVideos.map((video, index) => (
                        <motion.div
                            key={index}
                            className="video-card"
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <div className="video-wrapper">
                                <img
                                    src={video.poster}
                                    alt={video.title}
                                    className="video-poster"
                                />
                                <div className="video-overlay-gradient" />
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Full-width cinematic YouTube embed */}
                <motion.div
                    className="cinematic-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Goa Beach Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="cinematic-iframe"
                    />
                    <div className="cinematic-overlay">
                        <motion.p
                            className="cinematic-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Soon, this will be us ❤️
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
