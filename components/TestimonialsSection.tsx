import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import customer1 from "@/public/images/customer-01.png"
import customer2 from "@/public/images/customer-02.png"


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full pt-5 pb-20 flex flex-col gap-3 items-center">
      <h1 className="text-4xl font-bold text-center md:text-left">
        Testimonials
      </h1>
      <p className="max-w-[500px] text-center text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit, nunc id luctus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Carousel>
        <CarouselContent className="w-full max-w-xl">
          <CarouselItem>
            <div className="flex gap-8 items-center bg-zinc-200 border rounded-lg p-4">
              <Image src={customer1} alt="" width={135} height={135} className="rounded-full" />
              <div className="flex flex-col gap-2 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  suscipit, nunc id luctus.
                </p>
                <div className="flex flex-col">
                  <span className="font-bold">John Doe</span>
                  <span>CEO, Company</span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full">
            <div className="flex gap-8 items-center bg-zinc-200 border rounded-lg p-4">
              <Image src={customer2} alt="" width={135} height={135} className="rounded-full" />
              <div className="flex flex-col gap-2 text-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  suscipit, nunc id luctus.
                </p>
                <div className="flex flex-col">
                  <span className="font-bold">John Doe</span>
                  <span>CEO, Company</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
