import assetsPath from "../../data/assets-path"
import { LanguageIcon, LanguageSelectorContainer } from "./components"

export default function LanguageSelector() {
  return (
    <LanguageSelectorContainer>
        <LanguageIcon data={assetsPath.arrowBottom}/>
        <LanguageIcon data={assetsPath.languageIcon} className='bordered'/>
    </LanguageSelectorContainer>
  )
}
