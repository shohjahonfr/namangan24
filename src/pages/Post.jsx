import React, { useEffect, useState } from "react";
import { main } from './data/data'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import rasm from '../img/immage.jpg';

import { useParams } from 'react-router-dom'
const Post = () => {
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
  const { id } = useParams();
  const datas = [...main]
  const data = datas.find(i => i.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex gap-5">

      <div className="max-w-5xl w-full ">
        <h2 className=" text-lg lg:text-2xl w-full max-w-2xl  md:max-w-5xl">{t(data.title)}</h2>
        <p className=" text-sm lg:text-lg my-2 w-full max-w-2xl  md:max-w-5xl">{data.date}</p>
        <img className="w-full max-w-2xl rounded-lg my-3 md:max-w-5xl" src={data.img} alt="" />
        <p className="lg:text-xl text-base font-normal my-3 w-full max-w-2xl  md:max-w-5xl">{t(data.content)}</p>
      </div>

      <div className="lg:block hidden">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl mb-5">{t("ommabop")}</h2>
          {
            main.slice(30, 40).map((e) => {
              return (
                <div key={e.id} className='  max-w-2xl bg-slate-200 rounded-md '>
                  <div className="p-5" >
                    <div className="py-2">
                      <Link className="inline-block mb-2 " to={`/post/${e.id}`}>
                        <img className=" bg-gray-300 rounded-md inline-block w-48 h-32" src={e.img} alt="" />
                      </Link>
                      <Link className="block " to={`/post/${e.id}`}>
                        <p className='text-lg text-start hover:text-blue-900'>{t(e.title)}</p>
                      </Link>
                      <Link to={`/post/${e.id}`}>
                        <p className='text-sm text-slate-700 text-end hover:text-blue-900 '>{e.date}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className=" ">
          <a href="https://domtut.uz/nedvizhimost/zhiloj-kompleks-olmos-residence" target="_blank">
            <img className="mt-5 w-full" src={rasm} alt="olmosresidence" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Post