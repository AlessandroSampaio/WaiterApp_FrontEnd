import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrderBoardsProps {
  icon: string;
  title: string;
  orders?: Array<Order>;
}

export default function OrdersBoard({ icon, title, orders }: OrderBoardsProps) {

  const [isModalVisible, setModalVisible] = useState(false);

  function handleOpenOrder() {
    setModalVisible(prevState => !prevState);
  }


  return (
    <Board>
      <OrderModal visible={isModalVisible} handleClose={handleOpenOrder}></OrderModal>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders?.length ?? 0}</span>
      </header>
      <OrdersContainer>
        {orders?.map((order) => (
          <button type="button" key={order._id} onClick={handleOpenOrder}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} iten(s)</span>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}
