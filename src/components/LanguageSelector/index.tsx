import assetsPath from "../../data/assets-path"
import { LanguageIcon, LanguageSelectorContainer } from "./components"

export default function LanguageSelector() {
  
  if (false){
    return (
      <LanguageSelectorContainer>
          <LanguageIcon data={assetsPath.languageIcon}/>
          <LanguageIcon data={assetsPath.arrowBottom}/>
      </LanguageSelectorContainer>
    )
  } else {
    <></>
  }
}
