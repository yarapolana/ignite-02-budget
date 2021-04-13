import logoImg from '../../assets/logo.svg'
import { HeaderContainer, Wrap } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Wrap>
        <img src={logoImg} alt="Budget App"/>
        <button type="button">New transaction</button>
      </Wrap>
    </HeaderContainer>
  )
}