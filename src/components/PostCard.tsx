import Harkirat from "../images/Harkirat.png";
import post from "../images/post.png";



export const PostCard = () => {
    return <div>
           <div className="w-140 h-215 mt-3 border rounded-lg border-gray-300 bg-white">
             <div className="w-132 h-10 border-b-1 border-gray-300 ml-4 flex justify-between">
                   <span className="text-gray-500 text-xs mt-3 cursor-pointer ">Suggested</span>
                   <span className="text-2xl flex gap-3">...
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-6 mt-3 cursor-pointer">
                        <path d="M6 18 18 6M6 6l12 12" />
                      </svg>
                   </span>
             </div>
             <div className="flex flex-col gap-2">
                   <div className="flex"> 
                     <span className="h-12 w-12 border-none rounded-full absolute ml-4 mt-3 "><img src={Harkirat} alt="sorry"  className="h-full w-full object-cover rounded-full"/></span>
                       <div className="flex flex-col">
                        <div className="flex">
                         <div className="text-base  ml-18 font-semibold flex relative mt-3 ">Harkirat Singh 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5 mt-0.5 ml-1">
                            <path  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                          </svg>
                        </div>
                         <span className="text-gray-500 text-xs "><span className="text-3xl">.</span> 2nd</span>
                      </div>
                         <span className="text-gray-500 text-xs ml-18 ">Working with WebRTC | 100xDevs | BagPack </span> 
                      </div>
                   </div>

                   <div className="text-sm ml-5 w-130 mt-1">Hey Harkirat , made this linkedIn after watching youtube-clone class.
                    Not the best but i tried and learned any new things. 
                   </div>

                   <div className="w-140 h-160 border-1 border-white "><img src={post} alt="Sorry" className="w-full h-full object-cover"/></div>

              </div>  
               <div className="w-132 h-5 border-b-1 border-gray-400 ml-4  "></div>    
               <div className="w-132 h-10 flex ml-4 gap-16  mt-0.5 font-semibold text-sm ">
                <span className=" w-full h-full p-2 ps-8 relative flex  gap-16">
                  <span className="flex gap-1  hover:bg-gray-200 ">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5">
                         <path  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                     </svg>
                    Like
                  </span>
                  <span className="flex gap-1  hover:bg-gray-200 ">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5">
                      <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                     </svg>
                    Comment
                  </span>
                  <span className="flex gap-1  hover:bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-5">
                      <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                    </svg>
                    Repost 
                  </span>
                  <span className="flex gap-1  hover:bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-5">
                    <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg> 
                    Send
                  </span> 
                  </span>

                </div>    
           </div> 
    </div>
}


