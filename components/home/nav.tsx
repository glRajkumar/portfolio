import Link from "next/link";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Contact",
    to: "/#contact",
  },
  {
    name: "Blog",
    to: "/blog",
  },
]

function Nav() {
  return (
    <nav className="df px-8 py-2 sticky top-0 z-50 bg-primary border-b border-accent/20">
      <img
        className="size-10 rounded-full object-cover"
        src="/imgs/profile.jpg"
        alt="Profile"
      />
      <p>Raj kumar</p>

      <ul className="df gap-4 ml-auto">
        {
          links.map(link => (
            <Link key={link.to} href={link.to}>
              {link.name}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
