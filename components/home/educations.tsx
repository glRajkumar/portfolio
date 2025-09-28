import data from "./data";

function Educations() {
  return (
    <section className="p-8">
      <h2 className="mb-2 text-4xl text-center">Education</h2>

      {
        data.educations.map(edu => (
          <div key={edu.course} className="mb-4">
            <p>{edu.course}</p>
            <p>{edu.institution}</p>
            <p>{edu.timeline}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Educations
