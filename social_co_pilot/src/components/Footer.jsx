import React from "react";

function Footer() {
  return (
    <div className="lg:w-full lg:h-screen min-h-screen w-full h-fit  bg-zinc-800 lg:sticky lg:bottom-0 ">
      {/* Parent div full height and width */}
      <div className="w-full h-full px-[8vw] flex flex-col justify-center gap-20">
        {/* Child 1 */}
        <div className="font-['Basis_Grotesque_Pro'] text-center mt-[10vh] lg:mt-0 ">
          <h1 className="text-6xl text-white font-regular">
            Social <span className="font-semibold">Copilot</span>
          </h1>
          <h1 className="text-md mt-3 text-white font-regular uppercase">
            Social Media Adviser
          </h1>
        </div>
        {/* Child 2 */}
        <div className='pt-5 lg:pt-20 flex flex-col lg:flex-row  justify-between aligns-center   text-white font-["Basis_Grotesque_Pro"] gap-[10vw]'>
          <div className="services text-white ">
            <h1 className="font-semibold text-lg mb-5 text-zinc-200">Promps</h1>
            <ul className="text-zinc-500 font-semibold  leading-7">
              <li>Best time to post on LinkedIn</li>
              <li>Most engaging post type on Instagram</li>
              <li>Instagram carousel vs. single post?</li>
              <li>Ideal word count for LinkedIn posts</li>
              <li>Engagement rate of video vs. image</li>
              <li>Best day to post on Facebook</li>
              <li>What drives more LinkedIn comments?</li>
            </ul>
          </div>
          {/* <div className="contact  lg:w-[30vw] text-zinc-500 font-semibold  leading-7">
            <h1 className="font-semibold text-lg mb-5 text-zinc-200">
              Contact
            </h1>
            <h2>Mobile: +91-9429****45</h2>
            <h2>Email: chandansuthar510@gmail.com</h2>
            <h2 className="mt-2 leading-6">
              Address: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eaque repellat odit fuga?
            </h2>
          </div> */}
          <h1 className="mb-10 lg:mb-0 uppercase font-['Basis_Grotesque_Pro'] text-[8vw] lg:text-3xl font-light  tracking-wide leading-none">
            Boost<span className=" text-[#C19A5B] font-semibold"> Social Reach</span>,<br />
            With<span className="text-[#C19A5B] font-semibold"> AI</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
