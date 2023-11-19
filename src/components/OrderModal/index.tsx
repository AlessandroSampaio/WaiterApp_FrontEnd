import { ModalBody, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
interface OrderModalProps {
  visible: boolean;
  handleClose: () => void;
}

export function OrderModal({ visible, handleClose }: OrderModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa #1</strong>
          <button type='button' onClick={handleClose}>
            <img src={closeIcon} alt='Fechar modal' />
          </button>
        </header>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>🕰️</span>
            <strong>Fila de Espera</strong>
          </div>
        </div>
      </ModalBody>
    </Overlay>
  );
}
