import icon from "../images/linked.png";
import profile from "../images/profile.png";

export const Topbar = () => {
    return <div>
    <div className="flex gap-3 border-1 border-gray-200 ">
        <div className="flex border-r-1 border-gray-200 p-1 gap-15 ">
        <div className="flex ">
            <div className="ml-50 mr-2 pt-1">
               <img src={icon} className="h-10 w-10"/>
            </div>
            <div className="w-75 p-1">
                  <div className="relative">
                     <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                       <svg className="w-4 h-4 text-body " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                       </svg>
                     </div>
                           <input type="search" id="search" className="block w-70 p-2 ps-9 bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-full   hover:cursor-pointer focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                     </div>
                  </div>
            </div>

        <div className="flex gap-10 p-1  mr-5">
        <div className="text-xs flex flex-col items-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6  hover:cursor-pointer">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
           <span>Home</span>
        </div>

        <div  className="text-xs  flex flex-col items-center text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className=" size-6  hover:cursor-pointer"  focusable="false">
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
           </svg>
           My Network
        </div>

        <div className="text-xs flex flex-col items-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="size-6 hover:cursor-pointer" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
          Jobs
        </div>

        <div  className="text-xs flex flex-col items-center text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className=" size-6  hover:cursor-pointer" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            Messaging
        </div>

        <div  className="text-xs flex flex-col items-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"  className=" size-6   hover:cursor-pointer" focusable="false">
            <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
          </svg>
          Notifications
        </div>
        <div  className="text-xs flex flex-col items-center">
        <div className="bg-red-500 rounded-full size-6"><img src={profile} className=" rounded-full size-6  hover:cursor-pointer object-cover"/></div>
        <span className="flex text-gray-500">Me 
            <svg xmlns="http://www.w3.org/2000/svg" fill="black-500" viewBox="0 0 24 24" stroke="currentColor" className="size-4">                      
               <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>
        </span>
        </div>
        </div>

        </div>

        <div className="text-xs flex flex-col items-center pt-2 ">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
             <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
           </svg>
           <span className="flex text-gray-500">For Bussiness 
             <svg xmlns="http://www.w3.org/2000/svg" fill="black-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">                      
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
             </svg>
           </span>
        </div>
        <div>
      </div>
    </div>
     </div >
}


