import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { AppContext } from "../../../context/AppContext";
import ServiceCard from "../../services/ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressCircle from "../../progress/ProgressCircle";
import CountUp from "react-countup";
import BarSkillset from "../../skillsets/BarSkillset";
import CircleSkillset from "../../skillsets/CircleSkillset";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutTemplate1 = () => {
  const data = useContext(AppContext);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh] relative">
        <div className="col-span-1 max-w-[100%] lg:max-w-[85%] mt-[80px] lg:mt-0 flex items-center">
          <div className="mx-auto text-justify">
            <h2 className="text-6xl text-center lg:text-left text-teal-400 font-bold mb-[30px]">Who am I?</h2>
            <p className="mb-[10px] dark:text-slate-400">I'm an experienced full-stack developer from Czech Republic. During my free time I enjoy solve difficult problems and improve my skills.</p>
            <p className="mb-[10px] dark:text-slate-400">Graduated from Harvard college with master degree in Information Technology with concentration in web development. I mainly focus on javascript based technologies. I provide clean code, reusable components and pixel perfect design.</p>
            <div className="flex justify-between lg:grid md:grid-cols-4 gap-[20px] mt-[60px] lg:mt-[20px] mx-auto">
              {data.highlightStatistics.map((item) => (
                <div className="max-w-[100px] flex flex-col items-center lg:block">
                  <div className="text-5xl text-teal-400 mb-[8px]">
                    <CountUp end={item.number} duration={1} />
                  </div>
                  <div className="font-medium text-center lg:text-left dark:text-slate-200">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center mt-[60px] lg:mt-0 relative">
          <div className="relative">
            <div className="absolute border-[3px] border-teal-400 h-[420px] w-[370px] rounded-[20px]"></div>
            <div className="about-img relative h-[420px] w-[370px] top-[15px] left-[-20px] rounded-[20px] overflow-hidden">
              <div className="absolute top-0 left-0 bg-teal-400 w-[100%] h-[100%] opacity-40 z-30"></div>
              <Image src={data.aboutImage} className="w-[100%] object-cover z-20" layout="fill" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 py-[20px] w-[100%] text-center text-slate-400 tracking-wider">scroll down</div>
      </div>
      <div data-aos="fade-up" className="pt-[100px]">
        <div className="mb-[40px]">
          <h2 className="text-6xl text-teal-400 font-bold mb-[30px]">What I do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
      <div data-aos="fade-up" className="py-[160px]">
        <div className="mb-[40px]">
          <h2 className="text-6xl text-teal-400 font-bold mb-[30px]">Skills</h2>
        </div>
        <div className="grid grid-cols-2 gap-[120px]">
          <BarSkillset />
          <CircleSkillset />
        </div>
      </div>
    </div>
  );
};

export default AboutTemplate1;
