import data from "./data";

function Experiences() {
  return (
    <section className="mb-20">
      {
        data.experiences.map(ex => (
          <div key={ex.title} className="mb-4">
            <p>{ex.title}</p>
            <p>{ex.company}</p>
            <p>{ex.timeline}</p>
            <p>{ex.location}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Experiences
