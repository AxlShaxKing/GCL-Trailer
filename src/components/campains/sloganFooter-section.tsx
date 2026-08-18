"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-09-27T00:00:00+01:00").getTime();

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeRemaining(now: number): TimeRemaining {
  const difference = Math.max(TARGET_DATE - now, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const INITIAL_TIME: TimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function Countdown() {
  const [time, setTime] = useState<TimeRemaining>(INITIAL_TIME);

  useEffect(() => {
    setTime(calculateTimeRemaining(Date.now()));

    const interval = window.setInterval(() => {
      setTime(calculateTimeRemaining(Date.now()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const items = [
    { value: time.days, label: "Jours" },
    { value: time.hours, label: "Heures" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Secondes" },
  ];

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:flex sm:gap-8"
      aria-label="Compte à rebours avant le 27 septembre 2026"
    >
      {items.map(({ value, label }) => (
        <div
          key={label}
          className="min-w-0"
        >
          <div className="font-display text-3xl font-black leading-none tracking-[-0.045em] text-night-foreground sm:text-4xl">
            {String(value).padStart(2, "0")}
          </div>

          <div className="label-technical mt-2 truncate text-[0.55rem] text-night-foreground/40 sm:text-[0.6rem]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SloganFooterSection() {
  return (
    <section className="relative overflow-hidden bg-sovereign px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 sky-glow opacity-30" />

      {/* Subtle grid */}
      <div className="grid-field pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-4xl">
        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="max-w-3xl">
          <p className="label-campaign mb-5 text-yellow/80">
            Une nouvelle manière de faire
          </p>

          <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-night-foreground">
            Mettons fin à
            <br />
            <span className="text-yellow">
              « J’ai l’honneur ».
            </span>
          </h2>

          <p className="mt-7 max-w-xl font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.035em] text-night-foreground/90">
            Oui, je le veux.
          </p>

          <p className="mt-2 font-display text-lg font-bold text-yellow sm:text-xl">
            Et toi ?
          </p>
        </div>

        {/* =====================================================
            REVEAL
        ===================================================== */}

        <div className="mt-14 border-t border-night-foreground/10 pt-7 sm:mt-18 sm:pt-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-technical text-night-foreground/40">
                Révélation
              </p>

              <p className="mt-2 font-display text-lg font-bold tracking-tight text-night-foreground sm:text-xl">
                27 septembre 2026
              </p>
            </div>

            <div className="sm:text-right">
              <p className="label-technical mb-3 text-night-foreground/35">
                Dans
              </p>

              <Countdown />
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-10">
          <button type="button" className="btn-campaign">
            Je veux savoir
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* =====================================================
            FOOTER NOTE
        ===================================================== */}

        <div className="mt-16 flex flex-col gap-4 border-t border-night-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="label-technical text-night-foreground/35">
            GCL — RDC
          </span>

          <p className="max-w-md text-xs leading-relaxed text-night-foreground/35 sm:text-right">
            Faire émerger l’industrie congolaise à partir de l’excellence
            locale.
          </p>
        </div>
      </div>
    </section>
  );
}
