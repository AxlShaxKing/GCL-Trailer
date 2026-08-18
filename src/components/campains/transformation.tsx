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

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) {
      setActive(TRANSFORMATION_STAGES.length - 1);
      return;
    }

    if (!inView) return;

    const id = setInterval(() => {
      setActive(
        (prev) => (prev + 1) % TRANSFORMATION_STAGES.length
      );
    }, STEP_MS);

    return () => clearInterval(id);
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
        lg:px-12
        lg:py-32
        bg-white/50
      "
    >
      {/* Background local */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-field opacity-30" />

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-sky/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-node" />

            <span className="label-technical text-white/45">
              Notre vision
            </span>

            <span className="h-px w-8 bg-gold/50" />
          </div>

          <h2
            className="
              font-display
              text-[clamp(2.4rem,7vw,5rem)]
              font-black
              uppercase
              leading-[0.88]
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

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-relaxed
              text-white/55
              sm:text-base
            "
          >
            Du premier CV à la création d’entreprise :
            suivez l’évolution d’un talent qui décide de ne
            plus attendre l’opportunité, mais de la créer.
          </p>
        </div>

        {/* =====================================================
            TRANSFORMATION SCENE
        ===================================================== */}

        <TransformationScene activeStage={active} />

        {/* =====================================================
            PROGRESSION
        ===================================================== */}

        <div
          id="progression"
          className="mt-12 scroll-mt-24 sm:mt-16"
        >
          <ProgressTimeline activeStage={active} />
        </div>

        {/* =====================================================
            FINAL MESSAGE
        ===================================================== */}

        <motion.blockquote
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
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
          "
        >
          <span
            className="
              block
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
          </span>

          <span
            className="
              mt-5
              block
              font-sans
              text-xs
              font-medium
              uppercase
              tracking-[0.22em]
              text-gold
              sm:text-sm
            "
          >
            L’avenir commence maintenant.
          </span>
        </motion.blockquote>

      </div>
    </section>
  );
}