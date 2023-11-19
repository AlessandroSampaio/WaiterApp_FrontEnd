import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrderBoardsProps {
  icon: string;
  title: string;
  orders?: Array<Order>;
}

export default function OrdersBoard({ icon, title, orders }: OrderBoardsProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders?.length ?? 0}</span>
      </header>
      <OrdersContainer>
        {orders?.map((order) => (
          <button type="button" key={order._id}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} iten(s)</span>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}
