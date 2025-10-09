import { Md } from "@m2d/react-markdown";

import { experiences } from "./data";

function Experiences() {
  return (
    <section className="p-8" id="experience">
      <h3 className="mb-4 text-4xl text-center">Experience</h3>

      {
        experiences.map((ex, i) => (
          <div key={ex.title} className="revealing mb-4 sm:mb-8 max-w-7xl mx-auto rounded-2xl border relative isolate">
            <span className={`timeline-line w-px ${i === experiences.length - 1 ? "[--h:90%] md:[--h:80%]" : ""} absolute top-12 -left-px bg-gradient-to-b from-border via-border to-teal-600 dark:to-teal-300 rounded-full`}></span>

            <div className="df justify-between flex-wrap sm:gap-4 p-4 pl-7 stick top-20 rounded-2xl bg-secondary border shadow dark:shadow-white/10">
              <span className="size-5 absolute top-1/2 -left-[11px] -translate-y-1/2 bg-border dark:bg-secondary border border-accent-foreground/70 rounded-full z-[1]"></span>

              <div className="sm:flex-1 text-sm sm:text-base font-medium">
                <p>{ex.title}</p>
                <p>{ex.company}</p>
              </div>

              <div className="text-xs sm:text-sm">
                <p>{ex.timeline}</p>
                <p>{ex.location}</p>
              </div>
            </div>

            <div className="mb-2 sm:mb-4 px-4 pt-2.5 sm:pt-4">
              <Md className="marked">{ex.compDescription}</Md>
            </div>

            {ex.descriptions.map((d, j) => (
              <Md className="marked mb-1 px-4" key={j}>{d}</Md>
            ))}
          </div>
        ))
      }
    </section>
  )
}

export default Experiences
