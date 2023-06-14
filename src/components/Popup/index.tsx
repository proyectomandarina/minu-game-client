import { ReactElement } from 'react'
import styled from 'styled-components'
import theme from '../../data/theme'

export default function Popup({children}:{children:ReactElement[]|ReactElement}) {

    const PopupContainer = styled.div`
        padding: 2em 1em;
        margin: 1em;
        border: 2px solid ${theme.white};
        border-radius: ${theme.borderRadius};
        background-color: ${theme.bgColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        p, h2, h3 {
            color: ${theme.white}
        }
    `

  return (
    <PopupContainer>
        {children}
    </PopupContainer>
  )
}
