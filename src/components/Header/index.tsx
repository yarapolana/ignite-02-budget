
import logoImg from '../../assets/logo.svg'
import { HeaderContainer, Wrap } from './styles'

interface HeaderProps {
  onOpenTransactionModal(): void
}

export function Header({ onOpenTransactionModal}: HeaderProps ) {
  return (
    <HeaderContainer>
      <Wrap>
        <img src={logoImg} alt="Budget App"/>
        <button type="button" onClick={onOpenTransactionModal}>New transaction</button>
      </Wrap>

    </HeaderContainer>
  )
}
