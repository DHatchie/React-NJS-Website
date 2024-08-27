import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png"
import { SectionHeader } from "@/components/SectionHeader"
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image"
import { Card } from "@/components/Card"

const testimonials = [
  {
    name: "First1 Last1",
    position: "Marketing Manager @ TechStartups",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.!",
    avatar: memojiAvatar1
  },
  {
    name: "First2 Last2",
    position: "Head of Design @ GreenLeaf",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: memojiAvatar2
  },
  {
    name: "First3 Last3",
    position: "CEO @ InnovateCo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: memojiAvatar3
  },
  {
    name: "First4 Last4",
    position: "Product Manager @ GlobalTech",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: memojiAvatar4
  },
  {
    name: "First5 Last5",
    position: "Director of IT @ MegaCorp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: memojiAvatar5
  }
]

export const Testimonials = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say about Me'
          description="Don't just take my word for it. See what my clients have to say about my
          work."
        />
        <div className='mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24'>
          <div className='flex flex-none gap-8'>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className='max-w-xs md:max-w-md md:p-8'
              >
                <div className='flex items-center gap-4'>
                  <div className='inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700'>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='max-h-full'
                    />
                  </div>
                  <div>
                    <div className='font-semibold'>{testimonial.name}</div>
                    <div className='text-sm text-white/40'>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className='mt-4 text-sm md:mt-6 md:text-base'>
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
