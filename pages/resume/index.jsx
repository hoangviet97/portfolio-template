import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const index = () => {
  const data = useContext(AppContext);

  return (
    <div className="dark:bg-gray-800 ml-[150px] px-[60px] w-[calc(100% - 150px)] min-h-[100vh]">
      <header className="h-[200px] w-[100%] flex items-center justify-center">
        <h1 className="text-6xl text-gray-800 dark:text-slate-200">
          resume<span className="text-teal-400">.</span>
        </h1>
      </header>
      <div className="up-anim bg-white rounded-[10px] grid grid-cols-5 py-[40px] px-[30px]">
        <div className="col-span-1">
          <div className="mb-[20px]">
            <h3 className="text-teal-400 font-bold">Core Technologies:</h3>
            <ul>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="mb-[20px]">
            <h3 className="text-teal-400 font-bold">Services:</h3>
            <ul>
              <li>Heroku</li>
              <li>Vercel</li>
              <li>AWS</li>
              <li>Github</li>
              <li>Firebase</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <div className="mb-[20px]">
                <div className="text-6xl text-teal-400 font-bold">{data.resume.template.firstname}</div>
                <div className="text-6xl text-teal-400 font-bold">{data.resume.template.lastname}</div>
              </div>
              <div className="text-2xl text-gray-800 font-light">{data.resume.template.title}</div>
              <div>{data.resume.template.perex}</div>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div>
            <div>
              <h3 className="text-teal-400 font-bold">Education</h3>
              <div>
                {data.resume.template.education.map((item) => (
                  <div className="grid grid-cols-4">
                    <div className="col-span-3">{item.school_name}</div>
                    <div className="col-span-1 text-right">
                      {item.start} - {item.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-teal-400 font-bold">Experience</h3>
            </div>
            <div>
              <h3 className="text-teal-400 font-bold">Projects</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
