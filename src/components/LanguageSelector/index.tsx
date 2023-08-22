import { useContext, useState } from "react";
import { GameContext, changeLanguage } from "../../context";
import assetsPath from "../../data/assets-path"
import language from "../../data/language"
import { LanguageIcon, LanguageIconsContainer, LanguageSelectorContainer, LanguageText, LanguagesContainer } from "./components"

export default function LanguageSelector() {

  const languagesLength = Object.keys(language).length
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ctx, setCtx } = useContext(GameContext);

  const languagesMenu = <LanguagesContainer >
    {
      Object.keys(language).map((language, i) => {

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
