"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { TransformationScene } from "./transformation-scene";
import { ProgressTimeline } from "./progress-timeline";

import {
  TRANSFORMATION_STAGES,
  FINAL_QUOTE,
} from "@/lib/site-config";

const STEP_MS = 3200;

export function TransformationSection() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  /*
   * ---------------------------------------------------------
   * Detect when the section enters the viewport
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * ---------------------------------------------------------
   * Automatic progression
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (reduce) {
      setActive(TRANSFORMATION_STAGES.length - 1);
      return;
    }

    if (!inView) return;

    const interval = setInterval(() => {
      setActive(
        (previous) =>
          (previous + 1) % TRANSFORMATION_STAGES.length
      );
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [inView, reduce]);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="
        relative
        scroll-mt-20
        overflow-hidden
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Digital grid */}
        <div className="absolute inset-0 grid-field opacity-25" />

        {/* Central blue atmosphere */}
        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-sky/10
            blur-[120px]
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        {/* Small gold atmosphere */}
        <div
          className="
            absolute
            bottom-[15%]
            left-[20%]
            h-40
            w-40
            rounded-full
            bg-gold/5
            blur-[90px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
        >

          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-red
                animate-node
              "
            />

            <span className="label-technical text-white/45">
              Notre vision
            </span>

            <span className="h-px w-8 bg-gold/50" />

          </div>

          {/* Heading */}

          <h2
            className="
              font-display
              text-[clamp(2.5rem,7vw,5.2rem)]
              font-black
              uppercase
              leading-[0.87]
              tracking-[-0.055em]
              text-white
            "
          >
            Un parcours.
            <br />

            <span className="text-sky">
              Une transformation.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-relaxed
              text-white/50
              sm:text-base
            "
          >
            Du premier CV à la création d’entreprise :
            suivez l’évolution d’un talent qui décide de
            ne plus attendre l’opportunité, mais de la créer.
          </p>
        </motion.div>

        {/* ===================================================
            TRANSFORMATION
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TransformationScene activeStage={active} />
        </motion.div>

        {/* ===================================================
            PROGRESSION
        =================================================== */}

        <motion.div
          id="progression"
          className="
            mt-12
            scroll-mt-24
            sm:mt-16
            lg:mt-20
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="mb-6 flex items-center gap-4">

            <span className="label-technical text-white/35">
              Progression
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span className="font-display text-[10px] font-bold tracking-[0.15em] text-gold">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(TRANSFORMATION_STAGES.length).padStart(
                2,
                "0"
              )}
            </span>

          </div>

          <ProgressTimeline activeStage={active} />
        </motion.div>

        {/* ===================================================
            FINAL STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-20
            max-w-4xl
            border-t
            border-white/10
            pt-10
            text-center
            sm:mt-24
            sm:pt-12
            lg:mt-28
          "
        >

          {/* Gold signal */}

          <div className="mb-7 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-gold/50" />

            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-node" />

            <span className="h-px w-8 bg-gold/50" />

          </div>

          {/* Quote */}

          <blockquote
            className="
              font-display
              text-[clamp(1.8rem,5vw,3.8rem)]
              font-black
              uppercase
              leading-[0.92]
              tracking-[-0.045em]
              text-white
            "
          >
            {FINAL_QUOTE}
          </blockquote>

          {/* Final caption */}

          <p
            className="
              mt-6
              font-sans
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-gold
              sm:text-xs
            "
          >
            L’avenir commence maintenant.
          </p>

        </motion.div>

      </div>
    </section>
  );
}