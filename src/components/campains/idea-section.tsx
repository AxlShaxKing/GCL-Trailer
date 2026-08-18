export default function IdeasSection() {
  return (
    <section className="px-7 py-28 sm:px-12 sm:py-40 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="display-section font-black">
          Et si tes idées
          <br />
          <br />
          pouvaient devenir
          <br/>
          <span className="text-sky">réelles&nbsp;?</span>
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li>Tu as appris.</li>
            <li>Tu as expérimenté.</li>
            <li>Tu as imaginé.</li>
            <li>Tu as peut-être même construit quelque chose.</li>
          </ul>

          <p className="font-display text-4xl font-extrabold tracking-tight font-black sm:text-5xl">
            Et maintenant&nbsp;?
          </p>
        </div>
      </div>
    </section>
  )
}