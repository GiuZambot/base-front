import AppRoutes from './App-routes';
import pt_BR from 'antd/lib/locale/pt_BR';
import { ConfigProvider } from 'antd';
import './styles/index.css';

const App = () => {
  return (
    <ConfigProvider locale={pt_BR}>
      <AppRoutes />
    </ConfigProvider>);
};

export default App;
