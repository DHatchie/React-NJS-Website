import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/SectionHeader"
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
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import { title } from "process"

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
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-[320px]'>
            <CardHeader title='My Resume' description='Explore my resume' />
            <div className='mx-auto mt-8 w-40'>
              <Image src={bookImage} alt='Book cover' />
            </div>
          </Card>
          <Card className='h-[320px] p-0'>
            <CardHeader
              title='My Toolbox'
              description='The technologies I use to craft modern solutions.'
              className='px-6 pt-6'
            />
            <ToolboxItems items={toolboxItems} className='mt-6' />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6'
              itemsWrapperClassName='-translate-x-1/2'
            />
          </Card>
          <Card>
            <CardHeader
              title='Beyond the Code'
              description='Explore my hobbies outside of the digital realm.'
            />
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
