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
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order) {
    setModalVisible(prevState => !prevState);
    setSelectedOrder(order);
  }

  function handleCloseOrder(){
    setModalVisible(false);
    setSelectedOrder(null);
  }


  return (
    <Board>
      <OrderModal order={selectedOrder} visible={isModalVisible} handleClose={handleCloseOrder}></OrderModal>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders?.length ?? 0}</span>
      </header>
      <OrdersContainer>
        {orders?.map((order) => (
          <button type="button" key={order._id} onClick={() => handleOpenOrder(order)}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} iten(s)</span>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}
