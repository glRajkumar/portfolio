import data from "./data";

function Projects() {
  return (
    <section className="mb-20">
      {
        data.projects.map(pro => (
          <div key={pro.title} className="mb-4">
            <p>{pro.title}</p>
            <p>{pro.description}</p>
            <p>{pro.timeline}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Projects
