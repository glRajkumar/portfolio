import { experiences } from "./data";

function Experiences() {
  return (
    <section className="p-8">
      <h3 className="mb-4 text-4xl text-center">Work Experience</h3>

      {
        experiences.map((ex, i) => (
          <div key={ex.title} className="revealing mb-8 rounded-2xl border relative isolate">
            <span className={`timeline-line w-px ${i === experiences.length - 1 ? "[--h:90%] md:[--h:80%]" : ""} absolute top-12 -left-px bg-gradient-to-b from-border via-border to-teal-300 rounded-full`}></span>

            <div className="df justify-between gap-4 p-4 pl-7 sticky top-20 rounded-2xl bg-secondary">
              <span className="size-5 absolute top-1/2 -left-[11px] -translate-y-1/2 bg-border dark:bg-secondary border border-accent-foreground/70 rounded-full z-[1]"></span>

              <div className="flex-1">
                <p>{ex.title}</p>
                <p>{ex.company}</p>
              </div>

              <div>
                <p>{ex.timeline}</p>
                <p>{ex.location}</p>
              </div>
            </div>

            <div className="p-4">
              {ex.descriptions.map((d, j) => {
                if (typeof d === "string") {
                  return (
                    <p className="mb-1" key={j}>{d}</p>
                  )
                }
                return (
                  <div className="pl-4 mb-4" key={j}>
                    <h6>{d.title}</h6>
                    {
                      d.points.map((p, i) => (
                        <p className="mb-1 pl-4" key={i}>{p}</p>
                      ))
                    }
                  </div>
                )
              })}
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Experiences
