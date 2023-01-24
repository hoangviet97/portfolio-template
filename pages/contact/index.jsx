import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";

const Index = () => {
  const data = useContext(AppContext);

  return (
    <div className="p-[30px] bg-white dark:bg-gray-800 grid lg:grid-cols-2 h-[100vh] lg:ml-[150px]">
      <div className="hidden lg:block col-span-1 w-[90%] h-[100%] relative rounded-[12px] overflow-hidden">
        <div></div>
        <Image src={data.contactImage} className="w-[100%] object-cover" layout="fill" />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <div className="w-[80%]">
          <div>
            <div></div>
          </div>
          <h1 className="text-6xl text-gray-800 dark:text-slate-200 font-bold mb-[30px]">
            contact me<span className="text-teal-400">.</span>
          </h1>
          <div class="lg:col-span-3">
            <form action="" class="space-y-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Firstname
                  </label>
                  <input class="w-full rounded-lg outline-none border-[1px] p-3 text-sm" placeholder="Firstname" type="email" id="email" />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Lastname
                  </label>
                  <input class="w-full rounded-lg outline-none border-[1px] border-gray-200 p-3 text-sm" placeholder="Lastname" type="tel" id="phone" />
                </div>
              </div>

              <div>
                <label class="sr-only" for="name">
                  E-mail
                </label>
                <input class="w-full rounded-lg outline-none border-[1px] border-gray-200 p-3 text-sm" placeholder="E-mail" type="text" id="name" />
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>
                <textarea class="w-full rounded-lg outline-none border-[1px] border-gray-200 p-3 text-sm" placeholder="Message" rows="6" id="message"></textarea>
              </div>

              <div class="mt-4">
                <button type="submit" class="inline-flex w-full outline-none items-center justify-center rounded-lg bg-teal-400 px-5 py-3 text-white sm:w-auto">
                  <span class="font-medium"> Send message </span>

                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
