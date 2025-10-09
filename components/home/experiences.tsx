import { cn } from "@/lib/utils";
import { experiences } from "./data";

function Experiences() {
  return (
    <section className="p-8">
      <h3 className="mb-4 text-4xl text-center">Work Experience</h3>

      {
        experiences.map((ex, i) => (
          <div key={ex.title} className="revealing mb-4 sm:mb-8 rounded-2xl border relative isolate">
            <span className={`timeline-line w-px ${i === experiences.length - 1 ? "[--h:90%] md:[--h:80%]" : ""} absolute top-12 -left-px bg-gradient-to-b from-border via-border to-teal-600 dark:to-teal-300 rounded-full`}></span>

            <div className="df justify-between flex-wrap sm:gap-4 p-4 pl-7 sticky top-20 rounded-2xl bg-secondary border shadow dark:shadow-white/10">
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

            <div className="mb-2 sm:mb-4 px-4 pt-2.5 sm:pt-4 text-[13px] sm:text-[15px]">
              {ex.compDescription}
            </div>

            <ul className={cn("px-4 pb-4 text-[13px] sm:text-[15px] list-disc list-inside marker:text-secondary-foreground/70", ex.listCls)}>
              {ex.descriptions.map((d, j) => {
                if (typeof d === "string") {
                  return (
                    <li className="mb-1" key={j}>{d}</li>
                  )
                }

                return (
                  <li className="my-2 sm:my-4" key={j}>
                    <h6 className="inline-block font-semibold">{d.title}</h6>
                    {d.description && <p className="mb-2">{d.description}</p>}

                    <ul className={cn("pl-7 sm:pl-10 list-disc marker:text-secondary-foreground/70", d.listCls)}>
                      {
                        d.points.map((p, i) => (
                          <li className="mb-1" key={i}>{p}</li>
                        ))
                      }
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        ))
      }
    </section>
  )
}

export default Experiences
