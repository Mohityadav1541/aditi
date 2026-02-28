import { useEffect } from 'react';

export default function CursorTrail() {
    useEffect(() => {
        let throttleTimer = false;

        const handleMouseMove = (e) => {
            if (throttleTimer) return;
            throttleTimer = true;
            setTimeout(() => { throttleTimer = false; }, 50); // One heart every 50ms max

            // Only drop hearts sometimes
            if (Math.random() > 0.6) return;

            const heart = document.createElement('span');
            heart.className = 'cursor-heart';

            // Randomly select emoji
            const emojis = ['💖', '✨', '💕', '💛', '🌸'];
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            // Set random initial properties for a more natural look
            const size = Math.random() * 15 + 10; // 10px to 25px
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${e.clientX - size / 2}px`;
            heart.style.top = `${e.clientY - size / 2}px`;

            // Random rotation
            const rotate = Math.random() * 60 - 30; // -30 to 30 deg
            heart.style.transform = `rotate(${rotate}deg)`;

            document.body.appendChild(heart);

            // Remove heart after animation finishes (1.2s)
            setTimeout(() => {
                heart.remove();
            }, 1200);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null;
}
