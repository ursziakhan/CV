import React from 'react';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import Nex from '../assets/nex.png';
import Wordpress from '../assets/wordpress.png';
import Node from '../assets/node.png';
import SEO from '../assets/seo.png';
import Tailwind from '../assets/tailwind.png';
import CSS from '../assets/css.png';
import Ads from '../assets/ads.png';
import html from '../assets/html.png';
import Github from '../assets/github.png';
import Firebase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';
import Xd from '../assets/xd.png';
import Bootstrap from '../assets/bootstrap.png';

function Skills() {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] w-full h-screen mt-[200px]  text-[#ccd6f6] "
    >
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full    ">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-[#520e26]">
            Skills
          </p>
          <p className="py-4"> De teknologier jag har arbetat med.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img
              className="w-20 mx-auto"
              src={Wordpress}
              alt="WordPress Icon"
            />
            <p className="my-4">WordPress</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="Javascript Icon"
            />
            <p className="my-4">Javascript</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 ">
            <img className="w-20 mx-auto" src={react} alt="React Icon" />
            <p className="my-4">React.js</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Nex} alt="Next Icon" />
            <p className="my-4">Next.js</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
            <p className="my-4">Node.js</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={html} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="my-4">Tailwind</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML Icon" />
            <p className="my-4">Bootstrap</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Ads} alt="Google Ads Icon" />
            <p className="my-4">Google Ads</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={SEO} alt="Seo Icon" />
            <p className="my-4">SEO</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase Icon" />
            <p className="my-4">Firebase</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo Icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase Icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4">
            <img className="w-20 mx-auto" src={Xd} alt="XD Icon" />
            <p className="my-4">XD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
