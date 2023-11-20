import { Actions, ModalBody, OrderDetails, Overlay } from './styles';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import closeIcon from '../../assets/images/close-icon.svg';
import { useEffect } from 'react';
interface OrderModalProps {
  order: null | Order;
  visible: boolean;
  handleClose: () => void;
}

export function OrderModal({ order, visible, handleClose }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        handleClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);

  }, [handleClose]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={handleClose}>
            <img src={closeIcon} alt='Fechar modal' />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              { order.status === 'WAITING' && '🕰️' }
              { order.status === 'IN_PRODUCTION' && '🧑‍🍳' }
              { order.status === 'DONE' && '🆗' }
            </span>
            <strong>
              { order.status === 'WAITING' && 'Fila de Espera' }
              { order.status === 'IN_PRODUCTION' && '🧑Em Preparação' }
              { order.status === 'DONE' && 'Pronto' }
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order?.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} width='56' height='29' />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>
              {
                formatCurrency(
                  order.products.reduce(
                    (acc, {product, quantity}) => (acc + (product.price * quantity)), 0
                  ))
              }
            </strong>
          </div>
        </OrderDetails>
        <Actions>
          <button type='button' className='primary'>
            <span>🕰️</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type='button' className='secondary'>
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
