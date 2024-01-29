import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { styles } from '../styles';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import YuTube from '../img/yutube.svg';
import Telegram from '../img/telegram.svg'
import  Instagram  from '../img/instagram.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const telegram_bot_id = "6609975412:AAFoCAiAYg2foFBTWU4a9VmTcwKDoBD7Aoo";
  const chat_id = 6046638891;

  const sendMessage = async () => {
    const message = `Ismi: ${name}\nEmail: ${email}\ntelefon nomer va adresslar: ${userMessage}`;
    try {
      if (name.trim() != "" && email.trim() != "" && userMessage.trim() != "") {
        const response = await fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chat_id,
            text: message,
          }),
        });
        toast('Sorov telegram botga yuborildi', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      } else{
        toast.error('Sorovni toldiring', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }

    // Formni tozalash
    setName('');
    setEmail('');
    setUserMessage('');
  };

  return (
    <div className='flex items-center'>
      <div className={`${styles.container}`}>
        <div className='my-10 xl:items-center lg:items-end'>
          <Link className='text-lg font-semibold sm:text-2xl' to="/">{t("homga")}</Link>
          <h1 className='text-2xl font-bold my-8 md:text-4xl'>
            {t("bizga")}
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
              <label className='text-xl font-semibold' htmlFor="name">{t("ismingiz")}</label> <br />
              <input className='w-full md:w-[309px] h-14 border-2 rounded-xl py-3 px-3' type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder={t("ismi")} autoComplete='off' />
            </div>
            <div>
              <label className='text-xl font-semibold' htmlFor="email">{t("email")}</label><br />
              <input className='w-full md:w-[309px] h-14 border rounded-xl py-3 px-3' type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='@mail.com' autoComplete='off' />
            </div>
          </div>
          <div className='my-10'>
            <label className='text-xl font-semibold' htmlFor="message">{t("adres")}</label><br />
            <textarea className='w-full border rounded-xl resize-none h-40 py-3
              px-3'placeholder="+998" id="message" value={userMessage} onChange={e => setUserMessage(e.target.value)}></textarea>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-8'>
            </div>
          </div>
          <div className="text-center">
            <button className='p-3 bg-slate-200 text-blue-700 rounded-lg active:bg-slate-400 active:duration-100' onClick={sendMessage}>{t("jonatish")}</button>
          </div>
        </div>
      </div>
      <div className="drop-shadow-2xl w-full max-w-[700px]  justify-between border rounded-lg p-4 hidden xl:inline-block">
        <div className=''>
          <div className='flex justify-between m-5 '>
            <div><p className='font-medium'>{t("pochta2")}</p></div>
            <div><span>Namanganliklar24@gmail.com</span></div>
          </div>
          <div className='flex justify-between m-5'>
            <div><p className='font-medium'>{t("tarmoqlar")}</p></div>
            <div className='flex items-center'>
              <a href="https://t.me/NAMANGANLIKLAR" target="_blank"><img src={Telegram} alt="telegram" /></a>
              <a href="https://t.me/NAMANGANLIKLAR" target="_blank"><img src={YuTube} alt="yutube" /></a>
              <a href="https://www.instagram.com/yoldashev_fr/" target="_blank"><img src={Instagram} className="w-10" alt="instagram" /></a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div >
  )
}

export default Contact
