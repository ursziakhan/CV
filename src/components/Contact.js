import React from 'react';

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen mt-[-10%] sm:mt-0 bg-[#0a192f] flex justify-center items-center px-10 sm:px-0"
    >
      <form
        method="POST"
        action="https://getform.io/f/912a1d42-321c-4448-9862-56e71f3dc916"
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#520e26] text-[#ccd6f6]">
            Kontakt
          </p>
          <p className="text-[#ccd6f6] py-4">
            // Skicka in formuläret nedan eller skicka mig ett e-postmeddelande
            på &nbsp;
            <a
              href="mailto:info@webcomm.com"
              class="text-blue-500 hover:text-blue-600"
            >
              ursziakhan@gmail.com
            </a>
          </p>
        </div>
        <input
          className=" rounded bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Namn"
          name="name"
        />
        <input
          className="my-4 p-2 rounded bg-[#ccd6f6]"
          type="email"
          placeholder="E-post   "
          name="email"
        />
        <textarea
          className=" bg-[#ccd6f6] rounded p-2"
          name="message"
          row="20"
          placeholder="Meddelande

"
        />
        <button className="text-white border-2 hover:bg-[#520e26] hover:border-[#520e26] px-4 py-3 my-8 mx-auto flex items-center">
          Låter samarbeta
        </button>
      </form>
    </div>
  );
}
