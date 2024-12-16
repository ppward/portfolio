"use client";
import {useState} from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupContent,
  } from "@/components/ui/sidebar"
import { sideItem } from "@/type/sidebarItem"  

export function AppSidebar() {
  const [colorIdx, setColorIdx] = useState<number|null>(); 
  
  
    return (
      <Sidebar >
        <SidebarContent className='bg-slate-950'>
          <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-black">Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenu>
          {sideItem.map((item, idx)=> (
            <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild 
            onMouseEnter={()=>setColorIdx(idx)}
            onMouseLeave={()=>{setColorIdx(null)}}
            >
              <a href={item.url}>
                <item.icon className={`${colorIdx===idx? "text-slate-950":"text-white"}`}/>
                <span className={`${colorIdx === idx ? 'text-slate-950' : 'text-white'}`}>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          ))}
           </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup >
        </SidebarContent>
        <SidebarFooter className='bg-slate-950'/>
      </Sidebar>
    )
  }
  