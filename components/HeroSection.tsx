import Image from 'next/image'
import profileImage from '../public/images/profile-avatar.png'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="w-full py-10 md:py-20 flex flex-col-reverse md:flex-row gap-3 items-center">
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold">Hi I am</h2>
        <h1 className="text-6xl font-bold text-orange-600">John Doe</h1>
        <h3 className="font-bold text-muted-foreground">A Full Stack Developer</h3>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit, nunc id luctus.
        </p>
        <Button className="bg-orange-600 max-w-[200px] mt-5">Hire Me</Button>
      </div>

      <div className="w-full flex flex-col gap-1">
        <Image src={profileImage} alt="Jhon Doe" width={500} height={500} />
      </div>
    </section>
  )
}
