import React, { useEffect, useState } from "react";
import { main } from './data/data'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import rasm from '../img/immage.jpg'

const Asosiy = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "uz"
  );

  const languages = [
    { code: "uz", name: "O'z" },
    { code: "ru", name: "Ру" },
  ];

  const changeLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    i18next.changeLanguage(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18next.changeLanguage(savedLanguage);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1480px]  '>
        {
          main.slice(0, 6).map((e) => {
            return (
              <li className='p-4 bg-zinc-200 rounded-xl '>
                <Link to={`/post/${e.id}`}>
                  <img className='h-44 w-full rounded-md sm:h-64' src={e.img} alt="" />
                </Link>
                <Link to={`/post/${e.id}`}>
                  <p className='text-sm my-5 sm:text-lg'>{t(e.title)}</p>
                </Link>
                <Link to={`/post/${e.id}`}>
                  <p className='text-sm text-slate-700  '>{e.date}</p>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <div className="my-5">
        <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg lg:flex justify-between items-center p-5 ">
          <p className='md:text-2xl text-lg  text-white'>{t("telegram")}</p>
          <a href="https://t.me/NAMANGANLIKLAR"target="_blank" className='text-base sm: p-1 inline-block rounded-md bg-orange-400 px-6 hover:bg-blue-600'>
            <div className='flex p-1 '>
              <p className='text-white'>{t("otish")}</p>
            </div>
          </a>
        </div>
      </div>
      <div className='flex'>


        <div className='w-full max-w-7xl'>
          <div>
            <div className="flex flex-col gap-5 ">
              <h3 className="underline-offset-8 underline text-3xl ">{t("dunyo")}</h3>
              {
                main.slice(0, 10).map((e) => {
                  return (
                    <div className='flex bg-slate-200 rounded-md mr-4  text-lg  sm:text-sm' key={e.id}>
                      <div className="sm:flex ">
                      <Link className="inline-block p-5 sm:p-5 " to={`/post/${e.id}`}>
                        <img className=" max-w-full rounded-md inline-block md:max-w-[350px] sm:max-w-[300px] " src={e.img} alt="" />
                      </Link>
                      <div className="flex flex-col p-5">
                        <Link className="flex-grow block" to={`/post/${e.id}`}>
                          <p className='text-sm hover:text-blue-900 duration-300 sm:text-lg my-2 sm:my-0'>{t(e.title)}</p>
                        </Link>
                        <Link to={`/post/${e.id}`}>
                          <p className='text-sm text-slate-700 lg:text-end  hover:text-blue-900 duration-300 sm:text-lg'>{e.date}</p>
                        </Link>
                      </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="items-center mx-auto ">
              <NavLink className="text-center  bg-blue-600 rounded-lg my-2 inline-block p-3 sm:px-32 duration-300 hover:text-black  text-white sm:text-center sm:p-3" to="/Kop"> {t("kop")}</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">{t("ommabop")}</h2>
            {
              main.slice(30, 40).map((e) => {
                return (
                  <div className='  max-w-2xl bg-slate-200 rounded-md '>
                    <div className="p-5" >
                    <Link className="inline-block  " to={`/post/${e.id}`}>
                        <img className="  rounded-md inline-block max-w-[250px]" src={e.img} alt="" />
                      </Link>
                      <Link className="block " to={`/post/${e.id}`}>
                        <p className='text-lg text-start hover:text-blue-900'>{t(e.title)}</p>
                      </Link>
                      <Link to={`/post/${e.id}`}>
                        <p className='text-sm text-slate-700 text-end hover:text-blue-900 '>{e.date}</p>
                      </Link>
                    </div>

                  </div>
                )
              })
            }
          </div>
          <div className=" ">
          <a href="https://domtut.uz/nedvizhimost/zhiloj-kompleks-olmos-residence"target="_blank">
          <img className="mt-5 w-full" src={rasm} alt="olmosresidence" />
          </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Asosiy