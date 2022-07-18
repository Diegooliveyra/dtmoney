import * as S from './styles';
import IncomeImg from 'assets/income.svg';
import OutcomeImg from 'assets/outcome.svg';
import TotalImg from 'assets/total.svg';
import { useTransaction } from 'hooks/useTransactions';

export function Summary() {
  const {transactions} = useTransaction();
  
  const summary = transactions.reduce((acc, transaction) => {

    if(transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw -= transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="entradas" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="saídas" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.withdraw)}</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(summary.total)}</strong>
      </div>
    </S.Container>
  );
}