import assetsPath from "../../data/assets-path"
import { LanguageIcon, LanguageSelectorContainer } from "./components"

export default function LanguageSelector() {
  
  const languagesLength = 1

  if (languagesLength > 1){
    return (
      <LanguageSelectorContainer>
          <LanguageIcon data={assetsPath.languageIcon}/>
          <LanguageIcon data={assetsPath.arrowBottom}/>
      </LanguageSelectorContainer>
    )
  } else {
    return (
      <></>
    )
  }
}
