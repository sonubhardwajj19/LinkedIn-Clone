import { HomeIcon, JobsIcon, MessageIcon, NetworkIcon, NotificationIcon, ProfileIcon } from "./Icons"


export const Topbar = () => {
  return <>
    <header className="w-full h-13 border-none flex">

      <div className="w-full max-w-6xl mx-auto flex">


        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <span>
              <img src='./src/images/linked.png' className="h-9 w-9" />
            </span>
            <div className="w-75">
              <div className="relative">
                <span className="absolute flex inset-y-0 ps-3 items-center pointer-events-none">
                  <svg className="w-4 h-4 text-body " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                  </svg>
                </span>
                <input type="search"
                  id="search" className="block w-70 p-1.5 ps-9 bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-full  hover:cursor-pointer focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Search" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex translate-x-25">
          <nav className="flex">
            <div className="flex gap-5 items-center border-r border-gray-300 px-5">
              <HomeIcon>Home</HomeIcon>
              <NetworkIcon>My Network </NetworkIcon>
              <JobsIcon >Jobs</JobsIcon >
              <MessageIcon >Messaging</MessageIcon >
              <NotificationIcon >Notifications</NotificationIcon >
              <span className="text-xs flex flex-col items-center px-1">
                <ProfileIcon />
              </span>
            </div>


            <div className="flex items-center px-5">
              <div className="flex-col">
                <span className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                  </svg>
                </span>
                <span className="flex text-gray-500 items-center justify-center text-xs">For Bussiness
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </div>

          </nav>

        </div>
      </div>


    </header>
  
  </>
}


