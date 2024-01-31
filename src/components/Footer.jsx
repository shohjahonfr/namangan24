import React, { useEffect, useState } from "react";
import Telegram from '../img/telegram.svg'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import YuTube from '../img/yutube.svg'




const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <footer className='bg-blue-700 text-white mt-6'>

      <div className=' w-full max-w-7xl px-5 py-16 mx-auto '>
        <div className='border-b lg:flex justify-between  pb-3 '>

          <div className=' lg:mb-0 mb-5'>
            <NavLink className='text-blue-900 text-xl font-bold  p-1 rounded-md bg-white text-start lg:text-start' to="/">NAMANGANLIKLAR 24</NavLink>
          </div>
          <div className=" flex items-start lg:items-center space-x-0 flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
            <div className='flex justify-between '>
              <div><p className='font-medium '>{t("bizni")}</p></div>
            </div>
            <a href="https://t.me/NAMANGANLIKLAR" target="_blank" className='p-1 bg-blue-400 inline-block rounded-md'>
              <div className='flex p-1 bg-blue-400 '>
                <img src={Telegram} className='w-6 mr-1' alt="" />
                <p className='text-white'>{t("obuna")}</p>
              </div>
            </a>
          </div>
        </div>
        <div className='lg:flex justify-between pt-8'>
          <div className='max-w-[439px] '>
            <span className='font-semibold'>{t("huquq")}</span>
            <p className='text-sm'>{t("foydalanish")}</p>
          </div>
          <div className="sm:flex justify-between gap-10 lg:mt-0 mt-5 text-start lg:text-end">
            <div className='flex flex-col'>
              <NavLink className="  inline-block text-white  hover:text-yellow-400 " to="/Contact"> {t("yozilish")}</NavLink>
            </div>
            <div>
              <span>{t("malumot")}</span>
            </div>
            <div>
              <h3 className='font-bold'>{t("kuzatuv")}</h3>
              <div className=''>
                <a href="https://t.me/NAMANGANLIKLAR"target="_blank" className='p-1   inline-block rounded-md'>
                  <div className='flex p-1   text-white '>
                    <img src={Telegram} className='w-8' alt="" />
                    {t("tkanal")}
                  </div>
                </a>
              </div>
              <a href="https://t.me/NAMANGANLIKLAR"target="_blank" className='p-1  inline-block rounded-md'>
                <div className='flex p-1    text-white '>
                  <img src={YuTube} className='w-8' alt="" />
                  {t("ykanal")}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </footer>
  )
}

export default Footer