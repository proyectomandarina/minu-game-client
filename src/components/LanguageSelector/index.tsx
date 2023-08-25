import { useContext, useEffect, useState } from "react";
import { GameContext, changeLanguage } from "../../context";
import assetsPath from "../../data/assets-path"
import language from "../../data/language"
import { LanguageIcon, LanguageIconsContainer, LanguageSelectorContainer, LanguageText, LanguagesContainer } from "./components"
import { LANGUAGES } from "../../types";

export default function LanguageSelector() {

  const languagesLength = Object.keys(language).length
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ctx, setCtx } = useContext(GameContext);

  useEffect(()=>{
    localStorage.setItem('language', ctx.currentLanguage)
  }, [ctx.currentLanguage])

  const keysOfEnum = Object.keys(language) as LANGUAGES[]

  const languagesMenu = <LanguagesContainer >
    {
      keysOfEnum.map((language, i) => {

        const newContext = changeLanguage(language, ctx)

        return (
          <LanguageText
            isCurrentLanguage={language === ctx.currentLanguage}
            onClick={() => setCtx(newContext)}
            key={i}>
            {language.toUpperCase()}
          </LanguageText>
        )
      })
    }
  </LanguagesContainer>

  if (languagesLength > 1) {
    return (
      <LanguageSelectorContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <LanguageIconsContainer>
          <LanguageIcon src={assetsPath.languageIcon} />
          <LanguageIcon src={assetsPath.arrowBottom} />
        </LanguageIconsContainer>
        {
          isMenuOpen
            ? languagesMenu
            : null
        }
      </LanguageSelectorContainer>
    )
  } else {
    return (
      <></>
    )
  }
}
