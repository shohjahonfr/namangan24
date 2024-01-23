import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom'
import error from '../img/error.jpg'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Xatolar = () => {
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
  return(
    <div>
      <div className="py-8 text-center">
        <h2 className="text-center text-3xl font-semibold">{t("sahifa")}</h2>
        <div className="flex justify-center">
        <img className="w-[300px] h-[300px] my-8" src={error} alt="" />
        </div>
       <Link className="p-3 border-2 bg-slate-300 hover:border-blue-900 hover:text-blue-500 duration-300 rounded-lg" to="/">{t("homga2")}</Link>
      </div>
    </div>
  )
}

export default Xatolar