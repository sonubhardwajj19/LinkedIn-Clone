import { PostCard } from "./PostCard";
import profile from "../images/profile.png";

export const MainSection = () => {
 return   <div >  
          <div className="border-b-2 w-116 border-gray-300  pb-4">
              <div className="w-140 h-28 border rounded-lg border-gray-300 relative flex bg-white">
               <span className="h-12 w-12 border-none rounded-full absolute ml-4 mt-3 "><img src={profile} alt="sorry"  className="h-full w-full object-cover rounded-full"/></span>
               <span className="absolute ml-18 mt-3">
                   <input type="search" id="search" className="h-12 w-118 block ps-4  border border-gray-400 text-base font-semibold rounded-full   hover:cursor-pointer placeholder:text-body" placeholder="start a post" required />
               </span>
               <div className="absolute mt-18 flex gap-26 ml-14 text-gray-600 text-sm font-semibold">
                 <span className="flex gap-2 flex-row  ">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-green-600 ">
                     <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                   </svg>
                     Vedio
                 </span>
 
                 <span className="flex gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="size-6 fill-blue-400">
                     <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                   </svg>
                   Photo
                 </span>
 
                 <span className="flex gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-orange-500 mt-0.5">
                     <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                     <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                   </svg>
                   Write article
                 </span>
               </div>
              </div>
             
                <span className="absolute ml-119 text-base text-gray-500 font-semilight text-xs mt-2 hover:cursor-pointer flex flex-row ">Sort by:
                  <span className="text-base text-black font-semibold text-xs flex flex-row ml-2 hover:cursor-pointer">Top
                       <svg xmlns="http://www.w3.org/2000/svg" fill="black-500" viewBox="0 0 20 20" stroke="currentColor" className="size-3 hover:cursor-pointer">                      
                         <path d="m18.8 7.25-7.5 7.5-7.5-7.5" />
                       </svg>
                   </span>
                </span>
            </div>

            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
            <div><PostCard/></div>
         </div>
}