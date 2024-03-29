import * as S from './styles';
import logoImg from 'assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionsModal: () => void;
}
export function Header({onOpenNewTransactionsModal}: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type='button' onClick={onOpenNewTransactionsModal}>
          Nova transação
        </button>
      </S.Content>

    </S.Container>
  );
}
