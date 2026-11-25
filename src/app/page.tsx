import Image from "next/image";

const steps = [
  {
    title: "Make a Requirement List",
    body: "Choose materials and quantities for each space in your project.",
  },
  {
    title: "Send a Quote Request",
    body: "Share the whole list with us in one step.",
  },
  {
    title: "Receive your Quote",
    body: "Our team prices every line and sends you a Quote.",
  },
];

export default function ComingSoon() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-surface-page font-sans text-text-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-tint via-brand-tint/40 to-transparent"
      />
      <Image
        src="/brand/ozimani-logo-mark.svg"
        alt=""
        aria-hidden="true"
        width={24}
        height={21}
        unoptimized
        className="pointer-events-none absolute -right-28 -bottom-20 h-auto w-[440px] opacity-[0.07] sm:-right-16 sm:w-[640px]"
      />

      <header className="relative mx-auto flex w-full max-w-5xl items-center gap-2.5 px-5 pt-6 sm:px-10 sm:pt-10">
        <Image
          src="/brand/ozimani-logo-mark.svg"
          alt=""
          width={32}
          height={29}
          unoptimized
          priority
          className="h-[29px] w-8"
        />
        <span className="text-xl font-semibold tracking-tight">Ozimani</span>
      </header>

      <main className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-14 sm:px-10 sm:py-20">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-primary/25 bg-surface-page/80 px-3 py-1.5 text-label font-semibold text-brand-primary backdrop-blur">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-primary opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-primary" />
          </span>
          Coming soon
        </p>

        <h1 className="mt-6 max-w-3xl text-[34px] leading-[1.12] font-semibold tracking-tight text-balance sm:text-[52px]">
          Building materials,{" "}
          <span className="text-brand-primary">quoted simply.</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
          Ozimani is a new way to get quotes for interior and construction
          materials — boards, hardware, paint, plumbing and more. We’re
          opening soon.
        </p>

        <section aria-labelledby="how-it-works" className="mt-12 max-w-4xl">
          <h2
            id="how-it-works"
            className="text-label font-semibold tracking-[0.7px] text-text-secondary uppercase"
          >
            How it will work
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-2 rounded-card border border-border-default bg-surface-page/90 p-5 backdrop-blur"
              >
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded-full bg-brand-tint text-label font-semibold text-brand-primary"
                >
                  {index + 1}
                </span>
                <h3 className="text-card-title font-semibold">{step.title}</h3>
                <p className="text-body text-text-secondary">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="relative mx-auto w-full max-w-5xl px-5 sm:px-10">
        <div className="border-t border-border-default py-6">
          <p className="text-help text-text-secondary">© 2026 Ozimani</p>
        </div>
      </footer>
    </div>
  );
}
