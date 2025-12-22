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
  {
    name: "Blog",
    to: "/blog",
  },
]

function Nav() {
  return (
    <nav className="df nav-anime px-4 sm:px-6 py-3 fixed z-50 backdrop-blur-md border shadow dark:shadow-white/20">
      <Link href="/" className="df">
        <img
          className="size-10 rounded-full object-cover border shrink-0"
          src="/imgs/profile.webp"
          alt="Raj kumar profile picture"
          width={40}
          height={40}
        />
        <span className="hidden sm:block">Raj kumar</span>
      </Link>

      <ul className="df sm:gap-4 ml-auto text-sm sm:text-base">
        {
          links.map(link => (
            <li key={link.to}>
              <Link
                href={link.to}
                className="hover:text-teal-500"
              >
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>

      <ThemeToggler />
    </nav>
  )
}

export default Nav
