import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CountdownSection({ proposalApproved }) {
    const [tripDate, setTripDate] = useState('');
    const [countdown, setCountdown] = useState(null);

    const calcCountdown = useCallback(() => {
        if (!tripDate) return;
        const target = new Date(tripDate);
        const now = new Date();
        let diff = target - now;

        if (diff <= 0) {
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds, expired: false });
    }, [tripDate]);

    useEffect(() => {
        if (!tripDate) return;
        calcCountdown();
        const interval = setInterval(calcCountdown, 1000);
        return () => clearInterval(interval);
    }, [tripDate, calcCountdown]);

    return (
        <section>
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2>Let's Choose Our Goa Date Together 🌴</h2>
                <p>
                    {proposalApproved
                        ? "Pick any date... I'll plan everything 💖"
                        : "Say YES... and we'll decide the perfect date together ❤️"}
                </p>

                <div className="date-section">
                    <input
                        type="date"
                        className="date-input"
                        value={tripDate}
                        onChange={(e) => setTripDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                {countdown && !countdown.expired && (
                    <motion.div
                        className="countdown-units"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.4 }}
                    >
                        <CountdownUnit value={countdown.days} label="Days" />
                        <CountdownUnit value={countdown.hours} label="Hours" />
                        <CountdownUnit value={countdown.minutes} label="Min" />
                        <CountdownUnit value={countdown.seconds} label="Sec" />
                    </motion.div>
                )}

                {countdown && !countdown.expired && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            marginTop: '20px',
                            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                            color: 'var(--gold)',
                            fontWeight: 600,
                        }}
                    >
                        ✈️ Goa is calling us!
                    </motion.p>
                )}

                {countdown && countdown.expired && (
                    <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        style={{
                            marginTop: '20px',
                            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                            color: 'var(--gold)',
                            fontWeight: 600,
                        }}
                    >
                        🎉 It's time! Let's go to Goa! 🏖️
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
}

function CountdownUnit({ value, label }) {
    return (
        <motion.div
            className="countdown-unit"
            key={value}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3 }}
        >
            <span className="countdown-number">{String(value).padStart(2, '0')}</span>
            <span className="countdown-label">{label}</span>
        </motion.div>
    );
}
