import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import { Menu } from "./Header"

export function MobileMenu({ menu }: { menu: Menu[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-[200px]">
        {
          menu.map((item, index) => (
            <div key={index}>
              <DropdownMenuItem>
                {item.name}
              </DropdownMenuItem>
              {
                index !== menu.length - 1 && (
                  <DropdownMenuSeparator />
                )
              }
            </div>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
