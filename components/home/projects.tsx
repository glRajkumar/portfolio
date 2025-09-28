import data from "./data";

function Projects() {
  return (
    <section className="p-8">
      <h2 className="mb-2 text-4xl text-center">Projects</h2>

      {
        data.projects.map(pro => (
          <div key={pro.title} className="in-out p-4 mb-4 border border-accent/10">
            <p>{pro.title}</p>
            <p>{pro.description}</p>
            <p>{pro.timeline}</p>
            <p className="df my-2">
              Tech:
              {pro.technologies.map(t => (
                <button key={t} className="px-2.5 py-1 text-sm border border-border/30 rounded-full">
                  {t}
                </button>
              ))}
            </p>

            {pro.links.map(l => (
              <button key={l.url} className="px-2.5 py-1 text-sm border border-border/30 rounded-full">
                {l.description}
              </button>
            ))}
          </div>
        ))
      }
    </section>
  )
}

export default Projects
