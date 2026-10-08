import { ReactNode } from "react";

export const NavItem=({Icon,children}:{Icon:ReactNode,children:ReactNode})=>{
  return <div className="text-xs flex flex-col items-center justify-center h-full px-1 cursor-pointer fill-current text-gray-500 hover:text-black hover:border-b-2" >
            {Icon}
            {children}
        </div>
}