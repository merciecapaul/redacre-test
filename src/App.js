import { GlobalStyle } from './styles/global.style';
import { Layout } from './styles/layout.style';
import { ExchangeRate } from './components/ExchangeRate';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <ExchangeRate />
    </Layout>
  );
}

export default App;
