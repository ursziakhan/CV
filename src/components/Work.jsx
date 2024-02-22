import React from 'react';
import Mera from '../assets/mera.png';
import Modernstad from '../assets/modernstäd.png';
import Norway from '../assets/norway.png';
import Crew from '../assets/crew.png';
import Edvardson from '../assets/edvardson.png';
import Garn from '../assets/garn.png';
import Rent from '../assets/rent.png';
import Femk from '../assets/femk.png';
import Hoosab from '../assets/hoosab.png';
import Forest from '../assets/forest.png';
import Caffee from '../assets/caffee.png';
import Tunesia from '../assets/tunesia.png';
import Vastra from '../assets/vastra.png';
function Work() {
  return (
    <div
      name="work"
      className="w-full md:screen text-[#ccd6f6] mt-[52%] sm:mt-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-[150px]">
          <p className="text-4xl font-bold inline border-b-4  border-[#520e26]">
            Work
          </p>
          <p className="py-6"> Avslutade och pågående projekt</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">


        
          <div
            style={{ backgroundImage: `url(${Mera})` }}
            className="shadow-lg  group container rounded-md flex
            justify-center items-center mx-auto content-div mb-10 md:mb-0 border border-white"
           >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://www.merakommunikation.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
             </div>
           </div>


           <div
            style={{ backgroundImage: `url(${Modernstad})` }}
            className="shadow-lg  group container rounded-md flex
            justify-center items-center mx-auto content-div mb-10 md:mb-0 border border-white"
           >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <a href="/"> </a>
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://modernstad.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Norway})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://norwegianexplorervans.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Crew})` }}
            className="shadow-lg group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://umeacleaningcrew.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Edvardson})` }}
            className="shadow-lg group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                In progress
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://edvardson.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Garn})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://www.elvysgarn.nu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Rent})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://rentrivselnorr.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Femk})` }}
            className="shadow-lg group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                In Progress
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://www.femkessverige.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Hoosab})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                In Progress
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://hoosab.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Forest})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                In Progress
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href="https://www.forestinmind.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${Caffee})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
             Completed
              </span>
              <div className="flex justify-center pt-5">
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  <a
                    href=" https://skargardscafeet.se/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>

      
          <div style={{ backgroundImage: `url(${Tunesia})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div bg-slate-300 mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                New-Visit Tunesia
              </span>
              <div className="flex justify-center pt-5">
                <a href="https://norwegianexplorervans.com/visit-tunesia/"> </a>
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  Demo
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg  group container rounded-md flex border border-white
         justify-center items-center mx-auto content-div mb-10 md:mb-0 bg-slate-200"
       >
         {/* hover effect */}
         <div className="group-hover:opacity-100 text-center">
           <span className="text-2xl font-bold text-black tracking-wider">
         Docking app in Progress
           </span>
           <div className="flex justify-center pt-5">
            
           </div>
         </div>
       </div>

       
       <div style={{ backgroundImage: `url(${Vastra})` }}
            className="shadow-lg  group container rounded-md flex border border-white
            justify-center items-center mx-auto content-div bg-slate-300 mb-10 md:mb-0"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                New-Visit Tunesia
              </span>
              <div className="flex justify-center pt-5">
                <a href="https://norwegianexplorervans.com/visit-tunesia/"> </a>
                <button className="  text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     



    </div>
  );
}

export default Work;

