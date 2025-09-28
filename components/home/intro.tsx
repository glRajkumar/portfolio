
function Intro() {
  return (
    <section className="grid md:grid-cols-2 items-center content-center gap-6 min-h-[calc(100vh-4rem)] p-8">
      <div className="animate-slide-fade">
        <h2 className="mb-2 text-4xl animate-slide-fade-del">
          Full Stack Dev
        </h2>
        <p className="text-xl animate-slide-fade-del">
          Enhancing digital experiences that are smooth, scalable, and made to impress.
        </p>
      </div>

      <img
        className="size-60 sm:size-80 mx-auto rounded-full object-cover animate-img-move"
        src="/imgs/profile.jpg"
        alt="Profile"
      />
    </section>
  )
}

export default Intro
