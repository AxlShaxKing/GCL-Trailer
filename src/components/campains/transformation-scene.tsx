"use client";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  TrendingUp,
  Users,
  Briefcase,
  FileText,
} from "lucide-react";

import {
  TRANSFORMATION_STAGES,
  type Stage,
} from "@/lib/site-config";

const chips = [
  {
    icon: FileText,
    label: "CV",
    appearAt: 0,
  },
  {
    icon: Briefcase,
    label: "Projet",
    appearAt: 2,
  },
  {
    icon: Users,
    label: "Équipe",
    appearAt: 4,
  },
  {
    icon: TrendingUp,
    label: "Croissance",
    appearAt: 4,
  },
];

const chipPos = [
  "left-1 top-3 sm:left-6 sm:top-8",
  "right-1 top-5 sm:right-8 sm:top-10",
  "bottom-4 left-2 sm:bottom-8 sm:left-10",
  "bottom-3 right-1 sm:bottom-6 sm:right-10",
];

export function TransformationScene({
  activeStage,
}: {
  activeStage: number;
}) {
  const reduce = useReducedMotion();

  const stage: Stage =
    TRANSFORMATION_STAGES[activeStage];

  const Icon = stage.icon;

  const intensity =
    activeStage /
    (TRANSFORMATION_STAGES.length - 1);

  return (
    <div className="relative mx-auto w-full max-w-4xl">

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.035]
          px-4
          py-6
          shadow-[0_25px_70px_rgba(0,0,0,0.35)]
          backdrop-blur-md
          sm:rounded-3xl
          sm:px-8
          sm:py-9
        "
      >

        {/* Ligne décorative */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/50 to-transparent" />

        {/* =====================================================
            VISUAL AREA
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            h-[230px]
            w-full
            items-center
            justify-center
            sm:h-[270px]
            md:h-[300px]
          "
        >

          {/* Rings */}

          {[0, 1, 2].map((ring) => {
            const size =
              105 + ring * 58;

            return (
              <motion.span
                key={ring}
                className="
                  absolute
                  rounded-full
                  border
                  border-sky/30
                "
                style={{
                  width: size,
                  height: size,
                  opacity:
                    0.12 +
                    intensity * 0.32 -
                    ring * 0.03,
                }}
                animate={
                  reduce
                    ? undefined
                    : {
                        scale: [1, 1.06, 1],
                        opacity: [
                          0.08,
                          0.28,
                          0.08,
                        ],
                      }
                }
                transition={{
                  duration: 4 + ring,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: ring * 0.4,
                }}
              />
            );
          })}

          {/* Gold glow */}

          <div
            className="
              absolute
              h-36
              w-36
              rounded-full
              blur-3xl
              transition-all
              duration-700
              sm:h-44
              sm:w-44
            "
            style={{
              background: `radial-gradient(
                circle,
                rgba(242,169,59,${
                  0.08 + intensity * 0.42
                }) 0%,
                transparent 70%
              )`,
            }}
          />

          {/* =====================================================
              CENTRAL ICON
          ===================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{
                opacity: 0,
                scale: 0.65,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.65,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                grid
                place-items-center
                rounded-full
                bg-gradient-to-br
                from-sky
                to-sovereign
                shadow-[0_18px_45px_-10px_rgba(29,100,193,0.8)]
              "
              style={{
                width:
                  82 + intensity * 30,
                height:
                  82 + intensity * 30,
              }}
            >
              <Icon
                className="text-white"
                style={{
                  width:
                    34 + intensity * 12,
                  height:
                    34 + intensity * 12,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
              FLOATING CHIPS
          ===================================================== */}

          {chips.map((chip, i) => {
            const visible =
              activeStage >= chip.appearAt;

            const ChipIcon = chip.icon;

            return (
              <AnimatePresence key={chip.label}>
                {visible && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 8,
                    }}
                    animate={
                      reduce
                        ? {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }
                        : {
                            opacity: 1,
                            scale: 1,
                            y: [0, -6, 0],
                          }
                    }
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                      },
                      y: {
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`
                      absolute
                      ${chipPos[i]}
                      z-10
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-night/80
                      px-2.5
                      py-1.5
                      backdrop-blur-md
                      sm:px-3
                    `}
                  >
                    <ChipIcon className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" />

                    <span
                      className="
                        font-display
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-white/80
                        sm:text-[11px]
                      "
                    >
                      {chip.label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* =====================================================
            STAGE TEXT
        ===================================================== */}

        <div
          className="
            mt-5
            min-h-[135px]
            text-center
            sm:mt-7
            sm:min-h-[125px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{
                opacity: 0,
                y: 12,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -12,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                className="
                  label-technical
                  text-sky
                "
              >
                {stage.key}
              </span>

              <h3
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  font-display
                  text-xl
                  font-black
                  leading-[1]
                  tracking-[-0.025em]
                  text-white
                  sm:text-2xl
                  md:text-3xl
                "
              >
                {stage.headline}
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-lg
                  text-xs
                  leading-relaxed
                  text-white/50
                  sm:text-sm
                "
              >
                {stage.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}