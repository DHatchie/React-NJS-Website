import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image"
import AnsibleIcon from "@/assets/icons/ansible.svg"
import NginxIcon from "@/assets/icons/nginx.svg"
import ReactIcon from "@/assets/icons/react.svg"
import AWSIcon from "@/assets/icons/aws.svg"
import GitlabIcon from "@/assets/icons/gitlab.svg"
import JenkinsIcon from "@/assets/icons/jenkins.svg"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { ToolboxIcon } from "@/components/ToolboxIcons"

const toolboxItems = [
  {
    title: "AWS",
    iconType: AWSIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Gitlab",
    iconType: GitlabIcon
  },
  {
    title: "NGINX",
    iconType: NginxIcon
  },
  {
    title: "Jenkins",
    iconType: JenkinsIcon
  },
  {
    title: "Ansible",
    iconType: AnsibleIcon
  }
]

const hobbies = [
  {
    title: "Fishing",
    emoji: "🎣"
  },
  {
    title: "Golf",
    emoji: "⛳"
  },
  {
    title: "Music",
    emoji: "🎧"
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️"
  },
  {
    title: "Hiking",
    emoji: "🥾"
  },
  {
    title: "Camping",
    emoji: "🏕️"
  },
  {
    title: "Hunting",
    emoji: "🏹"
  }
]

export const About = () => {
  return (
    <div className='py-20'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20'>
          <Card className='h-[320px]'>
            <div className='flex flex-col'>
              <div className='inline-flex items-center gap-2'>
                <StarIcon className='size-9 text-emerald-300' />
                <h3 className='font-serif text-3xl'>My Resume</h3>
              </div>
              <p className='mt-2 text-sm text-white/60'>
                Explore a copy of my resume.
              </p>
            </div>
            <div className='mx-auto mt-8 w-40'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>The technologies I use to craft modern solutions.</p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <ToolboxIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my hobbies outside of the digital realm.</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt='map' />
            <Image src={smileMemoji} alt='smiling memoji' />
          </Card>
        </div>
      </div>
    </div>
  )
}
