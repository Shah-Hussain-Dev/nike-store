import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {truncate} from "lodash";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <div className="nike-container">
      <Title title={title} />
      <div className="my-7 animate__animated animate__zoomIn">
        <Splide options={splideOptions}>
          {news.map((item, i) => (
            <SplideSlide className="mb-0.5" key={i+2}>
              <div className="relative transition-all grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
                <div className="flex items-center justify-center">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className=" flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5 " />
                    <span className="text-xs font-bold">{item.like}</span>
                  </div>
                  <div className=" flex items-center gap-0.5">
                    <ClockIcon className="icon-style" />
                    <span className="text-xs font-bold">{item.time}</span>
                  </div>
                  <div className=" flex items-center gap-0.5">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-xs font-bold">{item.by}</span>
                  </div>
                </div>
                <div className=" grid items-center justify-items-start px-4 ">
                    <h1 className="text-base font-semibold lg:text-sm">{item.title}</h1>
                    <p className="text-sm text-justify ">{truncate(item.text,{length:150})}</p>
                </div>
                <div className="flex justify-center items-center px-4 w-full">
                    <a href={item.url} target="_blank"  className="bg-gradient-to-b  hover:scale-105  from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 w-full py-1.5 button-theme rounded-md">{item.btn}</a>
                </div>

              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
