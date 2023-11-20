import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const orders : Order[] = [
  {
    '_id': '655a5d14c46e4013ff08f39c',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1700412044817-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '655a5d14c46e4013ff08f39a'
      },
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1700412044817-quatro-queijos.png',
          'price': 30,
        },
        'quantity': 1,
        '_id': '655a5d14c46e4013ff08f39d'
      },
    ],
  }
];

export default function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⌚" title="Fila de espera" orders={orders}/>
      <OrdersBoard icon="🧑‍🍳" title="Em Produção"  />
      <OrdersBoard icon="🆗" title="Feito"  />
    </Container>
  );
}
