import React, {createContext, useState, useEffect} from 'react';

export const LangContext = createContext();


const LangProvider = (props) => {

    const [lang, setLang] = useState('en');

    useEffect(() => {
    const textEn = Array.from(document.querySelectorAll('[lang="en"]')).slice(1, 1000);
    const textEs = Array.from(document.querySelectorAll('[lang="es"]'));

    console.log(textEn, textEs)

    switch (lang) {
      case "en":
        textEn.forEach((text) => {
          text.classList.remove('hiddenLang');
        })
        textEs.forEach((text) => {
          text.classList.add('hiddenLang');
        })
        break;

      case "es":
        textEn.forEach((text) => {
          text.classList.add('hiddenLang');
        })
        textEs.forEach((text) => {
          text.classList.remove('hiddenLang');
        })
        break;

      default:
        textEn.forEach((text) => {
          text.classList.remove('hiddenLang');
        })
        textEs.forEach((text) => {
          text.classList.add('hiddenLang');
        })
    }

  }, [lang])

    return (
        <LangContext.Provider
        value= {{
            lang,
            setLang
        }}>

            {props.children}
        </LangContext.Provider>
    )
}
 
export default LangProvider