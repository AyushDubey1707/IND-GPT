"use client"

import  Link  from "next/link";
import  Image  from "next/image"
import {Montserrat} from "next/font/google"
import { cn } from "@/lib/utils";
import {usePathname} from  "next/navigation";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat= Montserrat({weight: "600", subsets:["latin"]})

const routes=[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-200"
    },
    {
        label: "Lets Talk",
        icon: MessageSquare,
        href: "/chat",
        color: "text-green-900"
    },
    {
        label: "Generate Image",
        icon: ImageIcon,
        href: "/image",
        color: "text-black"
    },
    {
        label: "Generate Video",
        icon: VideoIcon,
        href: "/video",
        color: "text-blue-500"
    },
    {
        label: "Generate Music",
        icon: Music,
        href: "/music",
        color: "text-embraled-500"
    },
    {
        label: "Code Solution",
        icon: Code,
        href: "/code",
        color: "text-green-500"
    },
    {
        label: "Setting",
        icon: Settings,
        href: "/setting",
    }
]

const Sidebar=()=>{
    const pathname=usePathname()
    return(
        <div className="space-y-4 py-4 flex flex-col h-full bg-orange-700 text-white">
                <div className="px-3 py-2 flex-1">
                    <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                        <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt="logo"
                        src="/logo.png"
                        />
                        </div>
                        <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                            IND-GPT
                        </h1>
                    </Link>
                    <div className="soace-y-1">
                        {routes.map((route)=>
                        <Link 
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname===route.href? "text-white bg-white/10":"text-zinc-400")}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;