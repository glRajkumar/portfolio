import { projects } from "./data";

function Projects() {
  return (
    <section className="p-8">
      <h3 className="mb-2 text-4xl text-center">Projects</h3>

      {
        projects.map(pro => (
          <div key={pro.title} className="in-out p-4 mb-4 border">
            <p>{pro.title}</p>
            <p>{pro.description}</p>
            <p>{pro.timeline}</p>
            <p className="df my-2">
              Tech:
              {pro.technologies.map(t => (
                <button key={t} className="px-2.5 py-1 text-sm border rounded-full">
                  {t}
                </button>
              ))}
            </p>

            {pro.links.map(l => (
              <button key={l.url} className="px-2.5 py-1 text-sm border rounded-full">
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
