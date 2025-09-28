import data from "./data";

function Experiences() {
  return (
    <section className="p-8 relative">
      <h2 className="mb-2 text-4xl text-center">Work Experience</h2>

      {
        data.experiences.map(ex => (
          <div key={ex.title} className="revealing mb-20 p-8 rounded-2xl border">
            <div className=" p-2 bg-amber-500 sticky top-12">
              <p>{ex.title}</p>
              <p>{ex.company}</p>
            </div>
            <p>{ex.timeline}</p>
            <p>{ex.location}</p>
            {ex.descriptions.map((d, j) => {
              if (typeof d === "string") {
                return (
                  <p key={j}>{d}</p>
                )
              }
              return d.points.map((p, i) => (
                <p key={i}>{p}</p>
              ))
            })}
          </div>
        ))
      }
    </section>
  )
}

export default Experiences
