import Link from 'next/link'
import { Button } from './ui/button'

export function Header() {
  const menu = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Me",
      link: "/"
    },
    {
      name: "Services",
      link: "/"
    },
    {
      name: "Testimonials",
      link: "/"
    },
    {
      name: "Contact",
      link: "/"
    }
  ]


  return (
    <header className="w-full border-b">
      <div className="w-full max-w-4xl p-4 mx-auto flex justify-between gap-3">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold">My</span>
          <span className="text-2xl font-bold text-orange-600">Portfolio</span>
        </div>

        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-8 text-sm">
              {
                menu.map((item, index) => (
                  <li key={index} className="hover:text-orange-600">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Button className="bg-orange-600"> Download CV </Button>
        </div>
      </div>
    </header>
  )
}
