import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import MemoryGallery from './components/MemoryGallery';
import LoveLetterSection from './components/LoveLetterSection';
import ParticleBackground from './components/ParticleBackground';
import FloatingHearts from './components/FloatingHearts';
import GoaBeachesSection from './components/GoaBeachesSection';
import PhotoShowcase from './components/PhotoShowcase';
import SongLyricsSection from './components/SongLyricsSection';
import CursorTrail from './components/CursorTrail';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function App() {
    const { width, height } = useWindowSize();
    const [proposalApproved, setProposalApproved] = useState(false);
    const [musicPlaying, setMusicPlaying] = useState(false);
    const [showMoonPhoto, setShowMoonPhoto] = useState(false);
    const musicRef = useRef(null);

    const toggleMusic = useCallback(() => {
        if (!musicRef.current) return;
        if (musicPlaying) {
            musicRef.current.pause();
        } else {
            musicRef.current.play().catch(() => { });
        }
        setMusicPlaying(!musicPlaying);
    }, [musicPlaying]);

    const handleApprove = useCallback(() => {
        setProposalApproved(true);
        if (musicRef.current) {
            musicRef.current.play().catch(() => { });
            setMusicPlaying(true);
        }
    }, []);

    const handleTypingComplete = useCallback(() => {
        setTimeout(() => setShowMoonPhoto(true), 1200);
    }, []);

    return (
        <div className="app">
            <CursorTrail />

            {proposalApproved && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, pointerEvents: 'none' }}>
                    <Confetti
                        width={width}
                        height={height}
                        recycle={false}
                        numberOfPieces={800}
                        gravity={0.15}
                        colors={['#ff6ec4', '#7873f5', '#ffd700', '#ff9a9e', '#fecfef']}
                    />
                </div>
            )}

            {/* Background Music */}
            <audio
                ref={musicRef}
                src="/darkhaast.mp3"
                loop
                preload="auto"
            />

            {/* Background Video */}
            <video autoPlay muted loop playsInline className="bg-video">
                <source
                    src="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="slideshow">
                <img src="/ishika1.jpg" alt="Memory 1" />
                <img src="/ishika2.jpg" alt="Memory 2" />
                <img src="/ishika1.jpg" alt="Memory 3" />
            </div>

            {/* Overlay */}
            <div className="overlay" />

            {/* Particle Background */}
            <ParticleBackground />

            {/* Floating Hearts */}
            <FloatingHearts />

            {/* Moon Memory Photo */}
            <AnimatePresence>
                {showMoonPhoto && (
                    <motion.img
                        src="/ishika2.jpg"
                        alt="Moon Memory"
                        className="moon-memory"
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
                    />
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <HeroSection
                onApprove={handleApprove}
                proposalApproved={proposalApproved}
                onTypingComplete={handleTypingComplete}
            />

            {/* Ishika Photo Showcase */}
            <PhotoShowcase />

            {/* Love Letter */}
            <LoveLetterSection />

            {/* Her Favourite Song */}
            <SongLyricsSection />

            {/* Goa Beaches Videos */}
            <GoaBeachesSection />

            {/* Countdown */}
            <CountdownSection proposalApproved={proposalApproved} />

            {/* Gallery */}
            <MemoryGallery />

            {/* Footer */}
            <footer className="footer">
                Made with ❤️ only for Ishika
            </footer>

            {/* Music Toggle */}
            <button
                className={`music-toggle ${musicPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                aria-label="Toggle music"
            >
                {musicPlaying ? '🎵' : '🔇'}
            </button>
        </div>
    );
}

export default App;
