import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpright from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      {
        title: "Enhanced user experience by 40%"
      },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" }
    ],
    link: "",
    image: darkSaasLandingPage
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      {
        title: "Increased brand awareness by 15%"
      }
    ],
    link: "",
    image: lightSaasLandingPage
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      {
        title: "Enhanced user experience by 40%"
      },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" }
    ],
    link: "",
    image: aiStartupLandingPage
  }
]

export const Projects = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-World-Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        <div className='mt-10 flex flex-col gap-20 md:mt-20'>
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className='px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='mt-4 border-t-2 border-white/5 md:mt-5'></hr>
                  <ul className='mt-4 flex flex-col gap-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        className='flex gap-2 text-sm text-white/50 md:text-base'
                        key={null}
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto'>
                      <span>View Live Site</span>
                      <ArrowUpright className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
