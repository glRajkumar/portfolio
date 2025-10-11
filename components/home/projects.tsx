import { Link } from "lucide-react";
import { archievedProjects, liveProjects, type projT } from "./data";

type props = {
  title: string
  list: projT[]
}

function Card({ title, list }: props) {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="mb-2 text-lg font-medium">{title} Projects</h3>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {
          list.map(pro => (
            <article
              key={pro.title}
              className="dfc in-out p-4 sm:p-6 border rounded-2xl shadow dark:shadow-white/20"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <header className="df flex-wrap">
                <h4
                  className="text-lg font-semibold shrink-0 mr-auto"
                  itemProp="name"
                >
                  {pro.title}
                </h4>

                <div className="df flex-wrap gap-2" aria-label="Project links">
                  {pro.links.map(l => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="df gap-1.5 px-2.5 py-1.5 text-xs border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer shadow dark:shadow-white/20"
                      aria-label={`${l.description} for ${pro.title}`}
                      itemProp={l.type === "github" ? "codeRepository" : "url"}
                    >
                      {l.type === "github" ?
                        <svg role="img" viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        :
                        <Link className="size-4" aria-hidden="true" />
                      }
                      {l.description}
                    </a>
                  ))}
                </div>
              </header>

              <div className="flex-1 text-sm text-secondary-foreground/70">
                <p
                  className="text-balance"
                  itemProp="description"
                >
                  {pro.description}
                </p>

                <ul
                  className="pl-4 mt-2 mb-4 list-disc sm:list-inside marker:text-primary/40"
                  aria-label="Project features"
                >
                  {pro.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <footer className="df flex-wrap" aria-label="Technologies used">
                <span className="sr-only">Technologies used:</span>
                {pro.technologies.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs text-primary/80 border rounded-lg bg-primary/5"
                    itemProp="keywords"
                  >
                    {t}
                  </span>
                ))}
              </footer>
            </article>
          ))
        }
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className="p-8" id="projects">
      <h2 className="mb-8 text-4xl text-center">
        Projects
      </h2>

      <Card
        title="Live"
        list={liveProjects}
      />

      <Card
        title="Archieved"
        list={archievedProjects}
      />
    </section>
  )
}

export default Projects
