import Link from "next/link";

import ThemeToggler from "../theme/toggler";

const links = [
  {
    name: "Experience",
    to: "/#experience",
  },
  {
    name: "Projects",
    to: "/#projects",
  },
]

function Nav() {
  return (
    <nav className="df nav-anime px-6 py-3 fixed z-50 backdrop-blur-md border">
      <Link href="/" className="df">
        <img
          className="size-10 rounded-full object-cover"
          src="/imgs/profile.jpg"
          alt="Profile"
        />
        <span className="hidden sm:block">Raj kumar</span>
      </Link>

      <ul className="df gap-4 ml-auto">
        {
          links.map(link => (
            <Link
              key={link.to}
              href={link.to}
              className="hover:text-teal-500"
            >
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
