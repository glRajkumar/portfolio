import { educations } from "./data";

function Educations() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h3 className="mb-8 text-4xl text-center">Education</h3>

      {
        educations.map(edu => (
          <div key={edu.course} className="mb-6 last:mb-0 p-4 border rounded-xl">
            <p className="df justify-between flex-wrap">
              <span>{edu.course}</span>
              <span>{edu.timeline}</span>
            </p>
            <p>{edu.institution}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Educations
