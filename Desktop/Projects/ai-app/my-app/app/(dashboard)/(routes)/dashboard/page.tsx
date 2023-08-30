"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, Code, Image, MessagesSquare, Music, Video } from "lucide-react"
import {useRouter} from "next/navigation"

const tools=[
  {
    label:"Lets Talk",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/chat"
  },
  {
    label:"Generate Image",
    icon: Image,
    color: "text-black-500",
    bgColor: "bg-yellow-500/10",
    href: "/image"
  },
  {
    label:"Generate-Video",
    icon: Video,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/video"
  },
  {
    label:"Generate Music",
    icon: Music,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/music"
  },
  {
    label:"Code Solution",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code"
  }
]

export default function DashboardPage() {
  const router=useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
          <h1 className="text-2xl md:text-xl font-bold text-center">Get All Your Solution Here </h1>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Get answer for all your solution with a smart AI Tool IND-GPT
          </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=>(
            <Card
            onClick={()=>router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className={cn("flex justify-between p-2 w-ft rounded-md",tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8",tool.color)}/>
              <div className="font-semibold">
              {tool.label}
            </div>
            <ArrowRight className="w-5 h-5"/>
            </div>
            </Card>
          ))}
      </div>
    </div>
    )
}