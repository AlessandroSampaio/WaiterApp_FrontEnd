import { Board, OrdersContainer } from './styles';

interface OrderBoardsProps {
  icon: string;
  title: string;
}

export default function OrdersBoard({ icon, title }: OrderBoardsProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>1</span>
      </header>
      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2</span>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
