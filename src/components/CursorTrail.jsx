import { useEffect } from 'react';

const EMOJIS = ['💖', '✨', '💕', '🥂', '🌹'];

function spawnTrailEmoji(x, y) {
    const heart = document.createElement('span');
    heart.className = 'cursor-heart';
    heart.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    const size = Math.random() * 14 + 12;
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${x - size / 2}px`;
    heart.style.top = `${y - size / 2}px`;

    const rotate = Math.random() * 50 - 25;
    heart.style.setProperty('--rot', `${rotate}deg`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
}

export default function CursorTrail() {
    useEffect(() => {
        let throttleTimer = false;

        const handleMouseMove = (e) => {
            if (throttleTimer) return;
            throttleTimer = true;
            setTimeout(() => { throttleTimer = false; }, 65);

            if (Math.random() > 0.55) return;
            spawnTrailEmoji(e.clientX, e.clientY);
        };

        const handleTouchStart = (e) => {
            const touch = e.touches && e.touches[0];
            if (!touch) return;
            spawnTrailEmoji(touch.clientX, touch.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return null;
}
