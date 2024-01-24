import React, { useEffect, useState } from "react";
import Telegram from '../img/telegram.svg'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Menu from "../img/Menu.svg"
import Back from "../img/Back.png"

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "uz"
  );
  const [menu, setMenu] = useState(false);
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <header className={`top-0 bg-zinc-200 sm:bg-zinc-200 ${isMenuOpen ? "sticky" : ""}`}>
      <div className="relative py-5">
        <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden top-5 right-5 absolute z-[9999]">
          {
            !isMenuOpen ? <img className="w-6 h-6" src={Menu} alt="" /> : <img className="w-6 h-6" src={Back} alt="" />
          }
        </button>
        <div className="w-full max-w-[1480px] mx-auto px-5 drop-shadow-xl">
          <div className=' lg:flex items-center justify-between'>
            <div className="flex justify-between  items-start sm:items-end">
              <NavLink className='text-blue-800 text-base font-bold p-1 bg-white rounded-md flex justify-center items-center space-x-2 sm:text-2xl' to="/"><span>NAMANGANLIKLAR</span><span>24</span></NavLink>
              <div className="lg:hover:">

              </div>
            </div>
            <div className=" hidden lg:inline lg:text-center ">
              <ul className="flex ">
                <li className="flex"><span className='text-blue-800 mr-2 font-bold '>$ </span><p className='text-slate-500 mr-4'>12315.00</p></li>
                <li className="flex"><span className='text-blue-800 mr-2 font-bold'>P </span><p className='text-slate-500 mr-4'>138.99</p></li>
                <li className="flex"><span className='text-blue-800 mr-2 font-bold'>E </span><p className='text-slate-500'> 13496.92</p></li>
              </ul>
            </div>
            <div className="sm:flex items-center gap-7">
              <div className="mt-5 lg:mt-0">
                <div className='flex items-center gap-5 w-full '>
                  <select id="languageSelect" className="py-1 px-2   bg-white text-gray-800 rounded outline-none" value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code} className="bg-gray-800 text-white p-1">
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <a href="https://t.me/NAMANGANLIKLAR" target="_blank" className='p-1 bg-blue-400 inline-block rounded-md'>
                    <div className='flex p-1 bg-blue-400 '>
                      <img src={Telegram} className='w-6 mr-1' alt="" />
                      <p className='text-white'>{t("obuna")}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-[1480px] mx-auto px-5  drop-shadow-xl '>
          <div className="lg:block hidden">
            <ul className='py-6 mt-5 text-[#7F7F7F] text-xl bg-white rounded-md  px-8 font-semibold flex justify-between items-center'>
              
              <li>
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full" to="/">{t("asosiy")}</NavLink>
              </li>
              <li>
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Dunyo">{t("dunyo")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Molia">{t("moliya")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Birja">{t("birjalar")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Madaniyat">{t("madaniyat")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Iqtisodiyot">{t("iqtisodiyot")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Sport ">{t("sport")}</NavLink>
              </li>
              <li className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full">
                <NavLink className="relative after:left-0 after:bottom-0 after:translate-y-full after:absolute after:h-1 after:bg-blue-600 after:w-0 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"to="/Texnologiyalar">{t("tehnalogialar")}</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <nav className={`lg:hidden lg:items-center mt-5  ${isMenuOpen ? "block absolute bg-sky-700 w-full z-[99] h-screen p-5 left-0 -top-5 bottom-0 " : "hidden"}`}>
            <div className={`h-full flex ${isMenuOpen ? "flex-col " : "flex-row lg:hidden"}`}>
             <ul className={`h-full ${isMenuOpen ? "flex flex-col justify-between items-start" : "flex flex-row space-x-5"}`}>

                <li className="pl-8">
                <NavLink onClick={() => setIsMenuOpen(false)} className='text-blue-800 text-base font-bold p-1 bg-white rounded-md flex justify-center items-center space-x-2 sm:text-2xl ' to="/"><span>NAMANGANLIKLAR</span><span>24</span></NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/">
                    {t("asosiy")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Dunyo">
                    {t("dunyo")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Molia">
                    {t("moliya")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Birja">
                    {t("birjalar")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Madaniyat">
                    {t("madaniyat")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Iqtisodiyot">
                    {t("iqtisodiyot")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Sport">
                    {t("sport")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Texnologiyalar">
                    {t("tehnalogialar")}
                  </NavLink>
                </li>
                <li className="my-2 ">
                  <NavLink onClick={() => setIsMenuOpen(false)} className="inline-block text-white text-lg font-semibold  pl-8" to="/Contact">
                    {t("contact")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header