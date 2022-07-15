import * as S from './style';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button type='button'>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  );
}
