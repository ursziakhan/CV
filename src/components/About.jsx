import React from 'react';

function About() {
  return (
    <div
      name="about"
      className="w-full sm:h-screen bg-[#0A192f] text-[#8892b0] sm:pb-0 pb-[200px] pt-[100px] sm:pt-[200px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8  ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className=" text-4xl font-bold inline border-b-4 border-[#520e26] text-[#ccd6f6]">
              About
            </p>
          </div>
          <div> </div>
        </div>
        <div className="max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex sm:justify-center sm:items-center sm:text-right text-4xl font-bold text-[#ccd6f6]">
            <p>
              Webbutvecklare med erfarenhet inom WordPress, JavaScript, React
              Next.js och Node.js.
            </p>
          </div>
          <div>
            <p className="sm:text-justify  text-[18px]  text-[#ccd6f6] ">
              Jag har erfarenhet inom webbtekniker inklusive WordPress,
              JavaScript, React, Next.js, Node.js, HTML, CSS, Bootstrap och
              TailwindCSS. Min erfarenhet med WordPress innefattar anpassad
              React-integrering, vilket tillsammans med min kompetens i
              JavaScript och React möjliggör skapande av dynamiska och
              interaktiva webbapplikationer. Jag har även kunskaper inom Next.js
              och Node.js, vilket möjliggör utveckling av högpresterande
              webbapplikationer med server-side rendering och API-integration.
              Min kunskap inom HTML, CSS, Bootstrap och Tailwind möjliggör
              skapandet av responsiva och visuellt tilltalande webbplatser.
              Utöver detta har jag en magisterexamen i företagsutveckling från
              Umeå universitet och erfarenhet inom affärsutveckling.
            </p>
          </div>
        </div>
        <div className="max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-[60px] ">
          <div className=" bg-red order-2 md:order-1">
            <p className="sm:text-justify  text-[18px]  text-[#ccd6f6] ">
              Jag har erfarenhet inom sökmotoroptimering (SEO), Google Ads,
              Google Merchant, och sociala medier. Med min SEO-kunskap kan jag
              hantera sökordsanalys, on-page/off-page optimering, länkbyggande,
              och sökresultatsspårning. Jag kan också skapa effektiva annonser
              och produktlistningar med mina Google Ads- och Google
              Merchant-färdigheter, samt använda Google Analytics för att
              analysera webbplatstrafiken och marknadsföringskampanjers
              prestanda. Dessutom har jag erfarenhet av att hantera
              företagskonton på olika sociala medieplattformar, skapa innehåll
              och utveckla strategier för att öka interaktionen på dessa
              plattfor
            </p>
          </div>
          <div className="flex  sm:justify-center sm:items-center sm:text-left text-4xl font-bold order-1 md:order-2 text-[#ccd6f6]">
            <p>
              Erfaren inom SEO, Google Ads, Google Merchant, Google Analytics
              och sociala medier hantering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
