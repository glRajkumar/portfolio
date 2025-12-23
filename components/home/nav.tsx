import Link from "next/link";

import { basic } from "@/lib/data";

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
    <nav className="df nav-anime px-4 sm:px-6 h-14 fixed z-50 backdrop-blur-md border">
      <Link href="/" className="df gap-2.5">
        <img
          className="size-10 rounded-full object-cover border shrink-0"
          src="/imgs/profile.webp"
          alt={`${basic.name} picture`}
          width={40}
          height={40}
          aria-label={basic.name}
        />
        <span className="hidden xs:block">{basic.name}</span>
      </Link>

      <ul className="df xs:gap-4 ml-auto text-sm xs:text-base">
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
