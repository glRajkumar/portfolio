import { Fragment } from "react";
import { educations } from "./data";
import { cn } from "@/lib/utils";

function Educations() {
  return (
    <section
      id="education"
      className="p-8 pb-16 relative border-y"
    >
      <h2 className="mb-8 text-4xl text-center">
        Education
      </h2>

      <div role="list" aria-label="Educational qualifications">
        {educations.map((edu, i) => (
          <Fragment key={edu.course}>
            <article
              className={cn("sm:max-w-xl lg:max-w-3xl mx-auto p-4 text-sm border", {
                "rounded-t-2xl": i === 0,
                "rounded-b-2xl": i === educations.length - 1,
              })}
              role="listitem"
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
            >
              <div className="df justify-between flex-wrap">
                <h3
                  className="font-medium"
                  itemProp="credentialCategory"
                >
                  {edu.course}
                </h3>
                <time
                  className="text-primary/80"
                  dateTime={edu.isoTimeline}
                  itemProp="dateCreated"
                >
                  {edu.timeline}
                </time>
              </div>

              <div
                className="text-primary/90"
                itemProp="recognizedBy"
                itemScope
                itemType="https://schema.org/EducationalOrganization"
              >
                <span itemProp="name">{edu.institution}</span>
              </div>
            </article>

            {i < educations.length - 1 && (
              <div
                className="-mx-8 py-2.5 bg-pattern border-y"
                aria-hidden="true"
              ></div>
            )}
          </Fragment>
        ))}
      </div>

      <div
        className="absolute inset-y-0 w-[calc(100%-2rem)] sm:w-full sm:max-w-xl lg:max-w-3xl left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-6 h-full absolute top-0 bg-pattern border-x -left-2 sm:-left-6"></div>
        <div className="w-6 h-full absolute top-0 bg-pattern border-x -right-2 sm:-right-6"></div>
      </div>
    </section>
  )
}

export default Educations
