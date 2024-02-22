









import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MovingComponent from 'react-moving-text';
import resume from './resume.pdf';
import { Link } from 'react-scroll';
function Home() {
  return (
    <div
      name="home"
      className=" w-full h-auto sm:h-screen bg-[#0a192f] sm:pt-[8%] "
    >
      {/* container */}
      <div
        className="max-w-[1000px] mx-auto
        px-8
        flex
        flex-col
        justify-center
        h-full w-screen text-white   "
      >
        <p className="text-pink-600 pt-[200px] sm:pt-0">Hej, mitt namn är</p>
        <h1 className="text-4xl sm:7px font-bold text-[#ccd6f6]">
          Ziaullah Sahibzada
        </h1>
        <h2 className="text-4xl pt-[10%] sm:pb-8 pb-[10%] sm:pt-8 sm:text-5xl font-bold text-pink-600 ">
          <MovingComponent
            type="typewriter"
            dataText={[
              'En webbutvecklare',
              'En SEO och Google-annonsexpert',
              'En affärsutvecklar',
            ]}
          />
        </h2>
        <h2 className="text-4xl sm:pt-8 sm:text-5xl font-bold text-[#ccd6f6]">
          Jag är en webbutvecklare och expert på SEO och Google Ads
        </h2>
        <p className="text-[#ccd6f6] py-4  text-xl text-left sm:text-justify">
          Jag är en webbutvecklare specialiserad på att skapa högoptimerade
          webbplatser med den bästa användarupplevelsen. Jag har omfattande
          erfarenhet av SEO och Google Ads för att förbättra webbplatsens
          positionering, öka trafiken och driva konverteringar. Med mitt
          passionerade och engagerade arbete är jag alltid redo att ta på mig
          nya utmaningar och leverera optimala resultat för mina kunder. Jag har
          också bakgrund inom företagsutveckling och innehar en magisterexamen i
          företagsekonomi från Umeå universitet. Bläddra igenom mitt portfolio
          och kontakta mig för att komma igång med ditt projekt idag!
        </p>
        <div className="flex space-x-8">
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#520e26] hover:border-[#520e26]">
            <Link className="flex" to="work" smooth={true} duration={500}>
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </button>

          <button className="group text-white border-2 px-6 py-3 my-2 flex  items-center hover:bg-[#520e26] hover:border-[#520e26]">
            <a className="flex" href={resume}>
              Ladda ner CV
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
