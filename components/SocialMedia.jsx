import { Github, Linkedin, Youtube, Twitter, Facebook } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from './ui/tooltip'

const SocialLink = [
  {
    title: 'Facebook',
    icon: <Facebook className='w-6 h-6' />,
    link: 'https://www.facebook.com'
  },
  {
    title: 'Github',
    icon: <Github className='w-6 h-6' />,
    link: 'https://github.com/Partho2006?tab=repositories'
  },
  {
    title: 'Linkedin',
    icon: <Linkedin className='w-6 h-6' />,
    link: 'https://www.linkedin.com/in/parthojoty-roy-chowdhury-562a71371/'
  },
  {
    title: 'Youtube',
    icon: <Youtube className='w-6 h-6' />,
    link: 'https://www.youtube.com/@PryRice'
  },
  {
    title: 'X',
    icon: <Twitter className='w-6 h-6' />,
    link: 'https://x.com/partho221/'
  }
]

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div>
        <div className='flex items-start justify-between mt-4'>
          {SocialLink.map((item) => (
            <Tooltip key={item.title} >
              <TooltipTrigger asChild>
                <a href={item.link} target="_blank" rel='noopener noreferrer' className='text-lightColor p-2 border-1 rounded-full hover:text-shop_light_green transform-all duration-200 hover:border-shop_light_green bg-black/10'>
                  {item.icon}
                  <TooltipContent className="bg-white text-black font-semibold">
                    {item.title}
                  </TooltipContent>
                </a>
              </TooltipTrigger>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
