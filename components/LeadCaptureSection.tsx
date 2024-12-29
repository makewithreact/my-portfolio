import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

export function LeadCaptureSection() {
  return (
    <section className="w-full pt-5 pb-20 flex flex-col gap-3 items-center">
      <h1 className="text-4xl font-bold text-center md:text-left">
        Lets Design Together
      </h1>
      <p className="max-w-[500px] text-center text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit, nunc id luctus.
      </p>
      <div className="w-full max-w-xl flex flex-col md:flex-row items-center gap-3">
        <Input placeholder="Your Email" />
        <Button className="bg-orange-600 text-white w-full md:w-auto">Contact Me</Button>
      </div>
    </section>
  )
}
