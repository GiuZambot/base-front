import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.min.css';

const container = document.getElementById('root') || document.createElement('div');
const root = ReactDOMClient.createRoot(container);
export default root.render(<App />);
