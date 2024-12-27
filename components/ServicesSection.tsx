import Image from 'next/image'
import uiUxIcon from '../public/icons/ui-ux-icon.svg'
import webDesignIcon from '../public/icons/web-design-icon.svg'
import appDesignIcon from '../public/icons/app-design-icon.svg'
import graphicDesignIcon from '../public/icons/graphic-design-icon.svg'

const services = [{
  name: "UI/UX",
  icon: uiUxIcon,
}, {
  name: "Web Design",
  icon: webDesignIcon,
}, {
  name: "App Design",
  icon: appDesignIcon,
}, {
  name: "Graphic Design",
  icon: graphicDesignIcon
}]

export function ServicesSection() {
  return (
    <section className="w-full py-20 flex flex-col gap-3 items-center">
      <h1 className="text-4xl font-bold text-center md:text-left">Services</h1>
      <p className="max-w-[500px] text-center text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit, nunc id luctus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mt-8">
        {
          services.map(service => (
            <div key={service.name} className="w-full md:w-[150px] bg-white rounded shadow flex flex-col items-center gap-2 p-4">
              <Image src={service.icon} alt={service.name} className="max-h-[35px]" width={30} height={30} />
              <span className="font-bold text-sm">{service.name}</span>
              <p className="text-muted-foreground text-xs text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
