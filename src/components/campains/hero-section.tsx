import { Countdown } from "./countdown";

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-sovereign">
      <div className="mx-auto max-w-[1600px]">

        {/* =====================================================
            MOBILE LOGO
        ===================================================== */}

        <div
          className="
            flex min-h-[25vh] items-center justify-center
            px-8 pt-10 pb-4
            sm:min-h-[28vh]
            sm:px-12
          "
        >
          <img
            src="/gcl-logo-color.png"
            alt="Génération Contenu Local RDC"
            className="
              h-auto w-[52%] max-w-[220px]
              object-contain
              sm:w-[40%] sm:max-w-[260px]
              lg:hidden
            "
          />
        </div>

        {/* =====================================================
            MAIN HERO
        ===================================================== */}

        <div
          className="
            flex min-h-[75vh] flex-col
            px-7 pb-14
            sm:px-12 sm:pb-16
            lg:min-h-screen lg:px-12 lg:py-16
            xl:px-16
          "
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3 sm:mb-9">
            <span
              className="
                h-1.5 w-1.5 shrink-0
                animate-node rounded-full bg-red
              "
            />

            <span className="label-technical text-white/45">
              Une nouvelle génération arrive
            </span>
          </div>

          {/* =================================================
              SLOGAN
          ================================================= */}

          <h1
            className="
              max-w-full
              font-display font-black uppercase
              leading-[0.86]
              tracking-[-0.055em]
            "
          >
            <span
              className="
                block
                text-[clamp(2.8rem,13vw,5.5rem)]
                text-red
              "
            >
              Mettons
            </span>

            <span
              className="
                block
                text-[clamp(2.8rem,13vw,5.5rem)]
                text-red
              "
            >
              fin à
            </span>

            <span
              className="
                mt-5 block
                text-[clamp(3.2rem,14vw,6rem)]
                text-white
              "
            >
              « J&apos;ai
            </span>

            <span
              className="
                block
                text-[clamp(3.2rem,14vw,6rem)]
                text-white
              "
            >
              l&apos;honneur »
            </span>
          </h1>

          {/* =================================================
              TEASER
          ================================================= */}

          <p
            className="
              mt-7 max-w-xs
              text-sm leading-relaxed
              text-white/50
              sm:mt-9 sm:max-w-md sm:text-base
            "
          >
            Le talent local mérite son moment.
          </p>

          {/* =================================================
              COUNTDOWN
          ================================================= */}

          <div
            className="
              mt-9
              border-t border-white/10
              pt-6
              sm:mt-12 sm:pt-7
            "
          >
            <Countdown />
          </div>
        </div>

        {/* =====================================================
            DESKTOP LOGO
        ===================================================== */}

        <div
          className="
            relative hidden min-h-screen
            items-center justify-center
            px-8
            lg:flex
            lg:px-12
            xl:px-16
          "
        >
          <img
            src="/gcl-logo-color.png"
            alt="Génération Contenu Local RDC"
            className="
              h-auto w-[72%] max-w-[520px]
              object-contain
              lg:w-[82%] lg:max-w-[650px]
              xl:max-w-[760px]
            "
          />
        </div>
      </div>
    </section>
  );
}
