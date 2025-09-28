import Link from "next/link";

import ThemeToggler from "../theme/toggler";

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
    <nav className="df nav-anime px-6 py-3 fixed z-50 backdrop-blur-md border border-accent/20">
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

      <ThemeToggler />
    </nav>
  )
}

export default Nav
