import data from "./data";

function Educations() {
  return (
    <section className="mb-20">
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
