import { useEffect, useRef, useCallback } from 'react';

const HEARTS = ['❤️', '💕', '💖', '💗', '💓', '💘', '🌹', '✨', '💜'];

export default function FloatingHearts() {
    const containerRef = useRef(null);
    const heartCountRef = useRef(0);

    const spawnHeart = useCallback(() => {
        const container = containerRef.current;
        if (!container || heartCountRef.current > 25) return;

        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];

        const left = Math.random() * 100;
        const duration = Math.random() * 6 + 6;
        const size = Math.random() * 1.2 + 0.8;
        const drift = (Math.random() - 0.5) * 100;
        const spin = (Math.random() - 0.5) * 360;

        heart.style.left = `${left}%`;
        heart.style.fontSize = `${size}rem`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.setProperty('--drift', `${drift}px`);
        heart.style.setProperty('--spin', `${spin}deg`);

        container.appendChild(heart);
        heartCountRef.current += 1;

        heart.addEventListener('animationend', () => {
            heart.remove();
            heartCountRef.current -= 1;
        });
    }, []);

    useEffect(() => {
        // Spawn hearts periodically
        const interval = setInterval(spawnHeart, 800);

        // Initial burst
        for (let i = 0; i < 6; i++) {
            setTimeout(spawnHeart, i * 200);
        }

        return () => clearInterval(interval);
    }, [spawnHeart]);

    return <div ref={containerRef} className="floating-hearts-container" />;
}
