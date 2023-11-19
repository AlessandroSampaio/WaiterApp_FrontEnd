import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⌚" title="Fila de espera" />
      <OrdersBoard icon="🧑‍🍳" title="Em Produção"  />
      <OrdersBoard icon="🆗" title="Feito"  />
    </Container>
  );
}
