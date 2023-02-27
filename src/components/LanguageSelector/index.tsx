import assetsPath from "../../data/assets-path"
import { LanguageSelectorContainer } from "./components"

export default function LanguageSelector() {
  return (
    <LanguageSelectorContainer>
        <object data={assetsPath.arrowBottom}/>
        <object data={assetsPath.languageIcon} className='bordered'/>
    </LanguageSelectorContainer>
  )
}
