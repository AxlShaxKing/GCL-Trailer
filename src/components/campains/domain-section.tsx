export function DomainsSection () {
  const domains = [
    { number: '01', name: 'Mines & Métaux', color: 'var(--sovereign)' },
    { number: '02', name: 'Numérique & Data', color: 'var(--sky)' },
    { number: '03', name: 'Énergie', color: 'var(--yellow)' },
    { number: '04', name: 'Économie verte', color: 'var(--sky)' },
    { number: '05', name: 'Santé', color: 'var(--red)' },
    { number: '06', name: 'Agro-industrie', color: 'var(--sky)' },
    { number: '07', name: 'Industries créatives', color: 'var(--yellow)' },
    { number: '08', name: 'Infrastructures', color: 'var(--sovereign)' },
    { number: '09', name: 'Transport & Logistique', color: 'var(--sky)' },
    { number: '10', name: 'Formation & Recherche', color: 'var(--sovereign)' },
    { number: '11', name: 'Finance & Investissement', color: 'var(--sky)' },
    { number: '12', name: 'Entrepreneuriat', color: 'var(--yellow)' }
  ]

  return (
    <section className='relative z-10 bg-white'>
      <div
        className='
          mx-auto max-w-[1600px]
          px-7 py-16
          sm:px-12 sm:py-20
          lg:px-12 lg:py-24
          xl:px-16 xl:py-28
        '
      >
        {/* Header */}
        <div>
          <h2 className='display-section text-foreground'>
            Et si tes idées
            <br />
            pouvaient devenir
            <br />
            <span className='text-sky'>réelles&nbsp;?</span>
          </h2>

          <p className='mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            De la technologie à la santé. De l&apos;industrie minière à
            l&apos;économie verte. Du digital aux industries créatives.
          </p>
        </div>

        {/* Domains */}
        <div
          className='
            mt-12 grid overflow-hidden
            border border-border
            sm:mt-14 sm:grid-cols-2
            lg:grid-cols-3
          '
        >
          {domains.map(domain => (
            <div
              key={domain.number}
              className='
                group relative
                border-b border-r border-border
                bg-card p-6
                transition-all duration-300
                hover:bg-secondary
                sm:p-7
                lg:p-8
              '
            >
              <div className='flex items-center gap-3'>
                <span
                  className='
                    h-2.5 w-2.5 shrink-0 rounded-full
                    transition-transform duration-300
                    group-hover:scale-125
                  '
                  style={{ backgroundColor: domain.color }}
                  aria-hidden='true'
                />

                <span className='label-technical text-muted-foreground'>
                  {domain.number}
                </span>
              </div>

              <p
                className='
                  mt-5
                  font-display text-xl font-bold
                  tracking-tight text-foreground
                  transition-transform duration-300
                  group-hover:translate-x-1
                  lg:text-2xl
                '
              >
                {domain.name}
              </p>

              {/* Accent */}
              <span
                className='
                  absolute bottom-0 left-0
                  h-0.5 w-0
                  transition-all duration-300
                  group-hover:w-full
                '
                style={{ backgroundColor: domain.color }}
                aria-hidden='true'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
