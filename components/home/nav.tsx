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
    <nav>
      <h1>Raj kumar</h1>

      <ul>
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
