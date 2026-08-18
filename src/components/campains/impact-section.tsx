export function ImpactSection() {
  return (
    <section className="border-y border-border bg-card px-6 py-28 sm:px-10 sm:py-36 ">
      <div className="mx-auto max-w-5xl relative">
        {/* Label */}
        <p className="label-technical text-sky">
          Génération Contenu Local
        </p>

        {/* Heading */}
        <h2 className="display-section mt-6 max-w-3xl text-foreground">
          Transformer l&apos;excellence locale en impact réel.
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          GCL rapproche les talents, les universités, les entreprises et les
          acteurs publics pour transformer les idées et les compétences
          congolaises en solutions, projets et entreprises capables de créer
          de la valeur en RDC.
        </p>

        {/* Flow */}
        <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Ton idée */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground/80">
              Ton idée
            </div>

            <span className="text-sky">→</span>
          </div>

          {/* Ton expertise */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground/80">
              Ton expertise
            </div>

            <span className="text-sky">→</span>
          </div>

          {/* GCL */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="rounded-full bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground">
              GCL
            </div>

            <span className="text-sky">→</span>
          </div>

          {/* Entreprise */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground/80">
              Entreprise
            </div>

            <span className="text-sky">→</span>
          </div>

          {/* Industrie */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground/80">
              Industrie
            </div>

            <span className="text-sky">→</span>
          </div>

          {/* Impact */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground/80">
              Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}