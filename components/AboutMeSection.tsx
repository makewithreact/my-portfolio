import Image from 'next/image'
import aboutMeImage from '../public/images/about-me-avatar.png'
import { Slider } from "@/components/ui/slider"

const skills = [
  { name: "UX/UI Design", value: 93 },
  { name: "Frontend Development", value: 85 },
  { name: "Backend Development", value: 75 },
  { name: "Mobile Development", value: 80 },
  { name: "DevOps", value: 70 },
]

export function AboutMeSection() {
  return (
    <section className="w-full py-5 flex gap-3 items-center">
      <Image src={aboutMeImage} alt="Jhon Doe" width={500} height={500} />

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-4xl font-bold">About Me</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit, nunc id luctus.
        </p>

        <div className="flex flex-col gap-3 mt-4">
          {
            skills.map(skill => (
              <div key={skill.name} className="flex flex-col gap-3">
                <span className="text-sm font-bold">{skill.name}</span>
                <Slider defaultValue={[skill.value]} max={100} step={1} disabled />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
