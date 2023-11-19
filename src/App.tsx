import { Header } from './components/Header/';
import Orders from './components/Orders/index.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
