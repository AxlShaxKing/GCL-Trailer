"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-09-27T10:00:00+01:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const INITIAL_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(INITIAL_TIME);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = TARGET_DATE - Date.now();

      if (difference <= 0) {
        setTimeLeft(INITIAL_TIME);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["Jours", timeLeft.days],
    ["Heures", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Secondes", timeLeft.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-8">
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <div className="font-display text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            {String(value).padStart(2, "0")}
          </div>

          <div className="label-technical mt-2 text-xs text-white/40 sm:text-sm">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}