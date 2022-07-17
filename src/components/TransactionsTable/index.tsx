import * as S from './styles';

export function TransactionsTable()  {
 return (
  <S.Container>
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Desenvolvimento de Website</td>
          <td className='deposit'>R$12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2022</td>
        </tr>
        <tr>
          <td>Alguel</td>
          <td className='withdraw'>-R$1.100</td>
          <td>Casa</td>
          <td>25/02/2022</td>
        </tr>
      </tbody>
    </table>
  </S.Container>
 )
}