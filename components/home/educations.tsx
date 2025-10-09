import { Fragment } from "react";
import { educations } from "./data";
import { cn } from "@/lib/utils";

function Educations() {
  return (
    <section className="p-8 pb-16 relative border-y">
      <h3 className="mb-8 text-4xl text-center">Education</h3>

      {
        educations.map((edu, i) => (
          <Fragment key={edu.course}>
            <div className={cn("sm:max-w-xl lg:max-w-3xl mx-auto p-4 text-sm border", {
              "rounded-t-2xl": i === 0,
              "rounded-b-2xl": i === 2,
            })}>
              <p className="df justify-between flex-wrap">
                <span className="font-medium">{edu.course}</span>
                <span className="text-primary/80">{edu.timeline}</span>
              </p>
              <p className="text-primary/90">{edu.institution}</p>
            </div>
            {i < educations.length - 1 && <div className="-mx-8 py-2.5 bg-pattern border-y"></div>}
          </Fragment>
        ))
      }

      <div className="absolute inset-y-0 w-[calc(100%-2rem)] sm:w-full sm:max-w-xl lg:max-w-3xl left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-6 h-full absolute top-0 bg-pattern border-x -left-2 sm:-left-6"></div>
        <div className="w-6 h-full absolute top-0 bg-pattern border-x -right-2 sm:-right-6"></div>
      </div>
    </section>
  )
}

export default Educations
