import assetsPath from "../../data/assets-path"
import { LanguageIcon, LanguageSelectorContainer } from "./components"

export default function LanguageSelector() {
  console.log('chauchis')

  return (
    <LanguageSelectorContainer>
        <LanguageIcon data={assetsPath.languageIcon} className='bordered'/>
        <LanguageIcon data={assetsPath.arrowBottom}/>
    </LanguageSelectorContainer>
  )
}
