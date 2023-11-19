import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles.ts';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos cliente</h2>
        </div>
        <img src={logo} alt="Logomarca" />
      </Content>
    </Container>
  );
}
